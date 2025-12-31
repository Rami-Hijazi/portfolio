"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink, Layers, GraduationCap, Code2, Cpu, Globe } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">
            RAMI<span className="text-indigo-500">HIJAZI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* TEXT SIDE */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
            <GraduationCap size={14} /> CS Student @ HTU
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Next-Level <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              React Developer.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
            I am a **Computer Science student** at **Al-Hussein Technical University (HTU)** with deep expertise in the modern web.
            <br /><br />
            I specialize in building complex, high-performance applications using **React** and **Next.js**. I don't just write code; I engineer scalable solutions with clean architecture.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start mb-10">
            <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
              View My Work
            </a>
            <a href="https://github.com/Rami-Hijazi" target="_blank" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>

          {/* TECH STACK BADGES */}
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-lg bg-[#09090b] border border-white/10 text-zinc-300 text-sm font-bold flex items-center gap-2">
                        {tech === 'React' || tech === 'Next.js' ? <Code2 size={16} className="text-indigo-500"/> : 
                         tech === 'Node.js' ? <Cpu size={16} className="text-indigo-500"/> : <Globe size={16} className="text-indigo-500"/>}
                        {tech}
                    </span>
                ))}
            </div>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div 
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 rounded-full"></div>
            
            {/* IMAGE CONTAINER */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="/me.jpeg" 
                    alt="Rami Hijazi" 
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>

      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Layers className="text-indigo-500" /> Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PROJECT 1: TIER LIST MAKER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center border-b border-white/5">
                <div className="text-4xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">TIER MAKER</div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">Interactive Tier List Maker</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                A complex drag-and-drop application built with React and Hello-Pangea/DnD. 
                Features include dynamic row creation, custom color pickers, image uploading, 
                and high-quality canvas export.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'TypeScript', 'Tailwind', 'Drag & Drop'].map(tag => (
                  <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://tier-list-maker-xi.vercel.app" target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href="https://github.com/Rami-Hijazi/tier-list-maker" target="_blank" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors">
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2: CLINIC SYSTEM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center border-b border-white/5">
                <div className="text-4xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">CLINIC SYSTEM</div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">Clinic Management System</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                A comprehensive dashboard for managing patient records, appointments, and staff. 
                Focuses on clean architecture, authentication, and efficient data handling.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'MongoDB', 'Authentication'].map(tag => (
                  <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-sm font-bold text-zinc-600 cursor-not-allowed" title="Deployment Coming Soon">
                  <ExternalLink size={16} /> Live Demo (Soon)
                </span>
                <span className="flex items-center gap-2 text-sm font-bold text-zinc-600 cursor-not-allowed">
                  <Github size={16} /> View Code
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's build something amazing.</h2>
        <a href="mailto:rami.bhijazi@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-bold transition-all">
          <Mail size={18} /> Contact Me
        </a>
        <p className="text-zinc-500 text-sm mt-12">© {new Date().getFullYear()} Rami Hijazi. All rights reserved.</p>
      </footer>

    </div>
  )
}