"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Layers, GraduationCap, Code2, Cpu, Globe, Send, ExternalLink, Sun, Moon } from 'lucide-react'

export default function Portfolio() {
  // State for Dark Mode (Default is true/Dark)
  const [isDark, setIsDark] = useState(true)

  // State for Contact Form
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:rami.bhijazi@gmail.com?subject=New Inquiry via Portfolio&body=From: ${formData.email}%0D%0A%0D%0A${formData.message}`
  }

  // --- STYLES BASED ON THEME ---
  const theme = {
    bg: isDark ? "bg-[#050505]" : "bg-zinc-50",
    text: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-400" : "text-zinc-600",
    navBg: isDark ? "bg-[#050505]/80 border-white/10" : "bg-white/80 border-zinc-200",
    cardBg: isDark ? "bg-[#09090b] border-white/10" : "bg-white border-zinc-200 shadow-lg shadow-zinc-200/50",
    inputBg: isDark ? "bg-black/50 border-white/10 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900",
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme.bg} ${theme.text} selection:bg-indigo-500 selection:text-white`}>
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme.navBg}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">
            RAMI<span className="text-indigo-500">HIJAZI</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-sm font-medium ${theme.textMuted}`}>
                <a href="#projects" className="hover:text-indigo-500 transition-colors">Work</a>
                <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
                <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
            </div>

            {/* THEME TOGGLE BUTTON */}
            <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${isDark ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'}`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* TEXT SIDE */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider mb-6">
            <GraduationCap size={14} /> CS Student @ HTU
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Next-Level <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              React Developer.
            </span>
          </h1>
          
          <p className={`${theme.textMuted} text-lg leading-relaxed mb-8 max-w-2xl`}>
            I am a **Computer Science student** at **Al-Hussein Technical University (HTU)** with deep expertise in the modern web.
            <br /><br />
            I specialize in building complex, high-performance applications using **React** and **Next.js**. I don't just write code; I engineer scalable solutions with clean architecture.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start mb-10">
            <a href="#contact" className={`px-8 py-3 rounded-full font-bold transition-colors ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
              Hire Me
            </a>
            <a href="https://github.com/Rami-Hijazi" target="_blank" className={`px-8 py-3 rounded-full border transition-colors flex items-center gap-2 ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}>
              <Github size={20} /> GitHub
            </a>
          </div>

          {/* TECH STACK BADGES */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${theme.textMuted}`}>Tech Stack</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className={`px-4 py-2 rounded-lg border text-sm font-bold flex items-center gap-2 ${isDark ? 'bg-[#09090b] border-white/10 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'}`}>
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
            <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 rounded-full"></div>
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ${isDark ? 'border-white/10' : 'border-white ring-1 ring-zinc-200'}`}>
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
            className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 ${theme.cardBg} hover:border-indigo-500/50`}
          >
            <div className="h-48 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 relative flex items-center justify-center border-b border-white/5">
                <div className={`text-4xl font-black group-hover:text-indigo-500/30 transition-colors ${isDark ? 'text-white/10' : 'text-black/5'}`}>TIER MAKER</div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">Interactive Tier List Maker</h3>
              <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                A complex drag-and-drop application built with React and Hello-Pangea/DnD. 
                Features include dynamic row creation, custom color pickers, image uploading, 
                and high-quality canvas export.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'TypeScript', 'Tailwind', 'Drag & Drop'].map(tag => (
                  <span key={tag} className={`text-xs font-bold px-2 py-1 rounded border ${isDark ? 'bg-white/5 text-zinc-300 border-white/5' : 'bg-zinc-100 text-zinc-600 border-zinc-200'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                
                <a href="https://github.com/Rami-Hijazi/tier-list-maker" target="_blank" className={`flex items-center gap-2 text-sm font-bold transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-black'}`}>
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
            className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 ${theme.cardBg} hover:border-indigo-500/50`}
          >
            <div className="h-48 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 relative flex items-center justify-center border-b border-white/5">
                <div className={`text-4xl font-black group-hover:text-indigo-500/30 transition-colors ${isDark ? 'text-white/10' : 'text-black/5'}`}>CLINIC SYSTEM</div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">Clinic Management System</h3>
              <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                A comprehensive dashboard for managing patient records, appointments, and staff. 
                Focuses on clean architecture, authentication, and efficient data handling.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {/* UPDATED TO NEXT.JS */}
                {['Next.js', 'Node.js', 'MongoDB', 'Authentication'].map(tag => (
                  <span key={tag} className={`text-xs font-bold px-2 py-1 rounded border ${isDark ? 'bg-white/5 text-zinc-300 border-white/5' : 'bg-zinc-100 text-zinc-600 border-zinc-200'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/Rami-Hijazi/clinic-management-system" target="_blank" className={`flex items-center gap-2 text-sm font-bold transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-black'}`}>
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className={`${theme.textMuted} mb-12 max-w-xl`}>Whether you have a project in mind, a job opportunity, or just want to connect, feel free to send me a message.</p>

        <div className="grid md:grid-cols-2 gap-6">
            
            {/* LEFT: FORM */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`border p-8 rounded-2xl shadow-xl order-2 md:order-1 ${theme.cardBg}`}
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`}>Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors ${theme.inputBg}`}
                            required
                        />
                    </div>
                    <div>
                        <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`}>Your Message</label>
                        <textarea 
                            rows={4}
                            placeholder="How can I help you? Feel free to reach out about collaborations, opportunities, or just to say hi."
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none leading-relaxed ${theme.inputBg}`}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
                    >
                        <Send size={18} /> Send Message
                    </button>
                </form>
            </motion.div>

            {/* RIGHT: INFO CARD (ANIMATED) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`border p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden order-1 md:order-2 ${isDark ? 'bg-[#101014] border-white/5' : 'bg-white border-zinc-200'}`}
            >
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full transform translate-y-1/2"></div>
                
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]"
                >
                    <Mail size={36} />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3">Let's connect!</h3>
                <p className={`${theme.textMuted} max-w-xs mb-8 leading-relaxed`}>
                    I'm currently open to new opportunities. I reply to all messages within 24 hours.
                </p>

                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="mailto:rami.bhijazi@gmail.com" 
                    className="text-lg text-indigo-500 font-bold hover:text-indigo-400 transition-colors flex items-center gap-2 bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-500/20"
                >
                    rami.bhijazi@gmail.com <ExternalLink size={16} />
                </motion.a>
            </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-12 border-t text-center text-sm ${isDark ? 'border-white/10 text-zinc-600' : 'border-zinc-200 text-zinc-400'}`}>
        <p>© {new Date().getFullYear()} Rami Hijazi. Built with Next.js & Tailwind.</p>
      </footer>

    </div>
  )
}