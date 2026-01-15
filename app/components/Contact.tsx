"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-black text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border border-black/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border border-black/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="border border-black/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-black/70">{status}</p>}
    </section>
  );
}
