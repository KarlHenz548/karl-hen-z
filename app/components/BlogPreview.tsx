"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "@/lib/posts/post"; // centralized posts

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="w-full min-h-screen flex flex-col items-center bg-gray-50 px-6 sm:px-12 lg:px-20 py-20"
    >
      {/* Section Title */}
      <motion.div
        className="max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Explore my latest insights, tutorials, and tips on building modern web
          applications.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <motion.div
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex flex-col h-full"
              whileHover={{ scale: 1.03 }}
            >
              {/* Blog Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>

              {/* Blog Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <time className="text-sm opacity-70 block">{post.date}</time>
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>

                {/* Truncated description */}
                <p className="text-sm opacity-80 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More */}
                <p className="text-black font-semibold hover:underline mt-auto flex items-center gap-1 ">
                  Read More
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
