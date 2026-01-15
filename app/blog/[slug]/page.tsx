import { posts } from "@/lib/posts/post";
import Image from "next/image";

// Generate static params for each post
export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

// ✅ Dynamic blog page (async because params is a Promise)
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // unwrap the promise

  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="p-20 text-center text-xl">Post not found</div>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
      <time className="block text-gray-500 mb-6">{post.date}</time>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image src={post.image} alt={post.title} fill className="object-cover rounded-xl" priority />
      </div>

      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        {post.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}
