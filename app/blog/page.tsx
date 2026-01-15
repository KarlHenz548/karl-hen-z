"use client";

import Link from "next/link";
import { posts } from "@/lib/posts/post";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <section className="w-full min-h-screen px-6 sm:px-12 lg:px-20 py-20 bg-gray-50">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Blog
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Read my latest thoughts, tutorials, and projects.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <p className="text-blue-600 font-semibold hover:underline">
                Read More
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
