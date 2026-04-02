import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Aniket Raut</h1>
        <p className="text-xl text-gray-400 mb-6">
          Game Systems & AI Programmer (Unity)
        </p>
        <p className="max-w-xl text-gray-500 mb-8">
          I build intelligent gameplay systems that feel alive.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 px-6 py-2 rounded-2xl">Projects</button>
          <button className="border border-gray-500 px-6 py-2 rounded-2xl">
            Resume
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

        {/* Project Card */}
        {["Zombie Survival", "Behavior Tree System", "2D Platformer"].map(
          (project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl mb-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{project}</h3>
              <p className="text-gray-400">
                Detailed breakdown of system design, AI behavior, and gameplay
                mechanics.
              </p>
            </motion.div>
          )
        )}
      </section>

      {/* CASE STUDIES */}
      <section className="px-10 py-20 bg-[#121212]">
        <h2 className="text-3xl font-bold mb-10">Case Studies</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Behavior Trees vs FSM</h3>
          <p className="text-gray-400">
            Comparison of AI architectures and when to use each approach.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">System Design Philosophy</h3>
          <p className="text-gray-400">
            Building modular and scalable gameplay systems.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl text-gray-400">
          I am a Unity developer focused on AI systems and gameplay
          architecture. I combine design thinking with engineering to create
          immersive experiences.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-10 py-20 bg-[#121212] text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">your.email@example.com</p>
      </section>
    </div>
  );
}
