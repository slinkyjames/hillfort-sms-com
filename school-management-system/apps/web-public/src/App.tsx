import React, { useState } from 'react';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      
      {/* Top Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>📍 123 Education Lane, Hillfort City</span>
            <span className="hidden md:inline">📞 +1 (555) 382-7200</span>
            <span className="hidden md:inline">✉️ admissions@hillfort.edu</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="http://localhost:5174" className="text-[#D4AF37] hover:underline font-medium">
              Student / Parent Portal →
            </a>
            <a href="http://localhost:5175" className="text-slate-400 hover:text-white transition-colors">
              Admin Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-[#0A192F] text-[#D4AF37] rounded-xl flex items-center justify-center font-bold text-2xl shadow-md">
              H
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block text-[#0A192F]">Hillfort International</span>
              <span className="text-[10px] text-[#800020] font-bold tracking-widest uppercase block">School of Excellence</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="text-[#0A192F] hover:text-[#800020] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#800020] transition-colors">About Us</a>
            <a href="#academics" className="hover:text-[#800020] transition-colors">Academics</a>
            <a href="#admissions" className="hover:text-[#800020] transition-colors">Admissions</a>
            <a href="#contact" className="hover:text-[#800020] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#admissions" 
              className="px-5 py-2.5 bg-[#800020] hover:bg-[#660000] text-white text-sm font-bold rounded-xl shadow transition-all transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-medium">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-[#0A192F]">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">About Us</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Academics</a>
            <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Admissions</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Contact</a>
            <div className="pt-2">
              <a href="#admissions" className="block text-center py-2.5 bg-[#800020] text-white rounded-xl font-bold">Apply Now</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-[#0A192F] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1.5 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold rounded-full tracking-wide uppercase">
              Admissions Open for 2026/2027 Academic Year
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Shaping Future Leaders with <span className="text-[#D4AF37]">Character & Intellect</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
              At Hillfort International School, we provide a world-class curriculum, state-of-the-art facilities, and a nurturing environment designed to unlock every child's full potential.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#admissions" 
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#c28f15] text-[#0A192F] font-bold text-center rounded-xl shadow-lg transition-all"
              >
                Start Application
              </a>
              <a 
                href="#academics" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-center rounded-xl border border-white/20 transition-all"
              >
                Explore Programs
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 md:h-[420px] bg-gradient-to-br from-[#800020] to-[#0A192F] rounded-3xl shadow-2xl flex items-center justify-center p-8 border border-white/10">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-2xl mx-auto flex items-center justify-center text-4xl shadow">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-white">Excellence in Education</h3>
                <p className="text-slate-300 text-sm max-w-sm">
                  Empowering over 1,200 students with global perspectives and timeless values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800020]">About Hillfort</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A192F]">A Legacy of Academic & Moral Distinction</h3>
            <p className="text-slate-600">
              Founded on principles of integrity, leadership, and inquiry, Hillfort International School fosters critical thinking and holistic personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A192F]/10 text-[#0A192F] rounded-xl flex items-center justify-center font-bold text-xl">
                🌍
              </div>
              <h4 className="text-xl font-bold text-[#0A192F]">Global Curriculum</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rigorous academic framework combining international standards with foundational local values.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37]/15 text-[#0A192F] rounded-xl flex items-center justify-center font-bold text-xl">
                🔬
              </div>
              <h4 className="text-xl font-bold text-[#0A192F]">Modern Facilities</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced science labs, robotics workshops, digital libraries, and Olympic-grade sports complexes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#800020]/10 text-[#800020] rounded-xl flex items-center justify-center font-bold text-xl">
                👥
              </div>
              <h4 className="text-xl font-bold text-[#0A192F]">Expert Faculty</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated educators and mentors committed to personalized guidance and student wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="academics" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800020]">Academics</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A192F]">Programs Tailored for Every Stage</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Early Years (Ages 3-5)', 'Primary School (Grades 1-5)', 'Junior High (Grades 6-8)', 'Senior High (Grades 9-12)'].map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                <div className="h-2 w-12 bg-[#D4AF37] rounded-full"></div>
                <h4 className="font-bold text-lg text-[#0A192F]">{program}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Structured developmental curriculum focusing on cognitive agility, emotional intelligence, and exploratory learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Callout */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 bg-[#0A192F] text-white rounded-3xl p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="space-y-4 max-w-xl">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Join Our Community</span>
            <h3 className="text-3xl md:text-4xl font-extrabold">Ready to Enroll Your Child?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Begin your admissions journey today. Submit an online application or schedule a guided campus tour with our admissions team.
            </p>
          </div>
          <div className="flex flex-col space-y-3 w-full md:w-auto">
            <a 
              href="http://localhost:5174" 
              className="px-8 py-3.5 bg-[#D4AF37] text-[#0A192F] font-bold text-center rounded-xl hover:bg-[#c28f15] transition-colors shadow"
            >
              Access Parent Portal
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white/10 text-white font-bold text-center rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0A192F] text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#D4AF37] text-[#0A192F] rounded-lg flex items-center justify-center font-bold">
                H
              </div>
              <span className="font-bold text-white text-base">Hillfort International</span>
            </div>
            <p className="text-xs text-slate-400">
              Cultivating excellence, character, and global leadership in students.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-3">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#D4AF37]">About Us</a></li>
              <li><a href="#academics" className="hover:text-[#D4AF37]">Academic Programs</a></li>
              <li><a href="#admissions" className="hover:text-[#D4AF37]">Admissions</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-3">Portals</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="http://localhost:5174" className="hover:text-[#D4AF37]">Parent / Student Portal</a></li>
              <li><a href="http://localhost:5175" className="hover:text-[#D4AF37]">Admin Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-3">Contact Us</h5>
            <p className="text-xs space-y-1">
              <span>123 Education Lane</span><br />
              <span>Hillfort City, HC 90210</span><br />
              <span>admissions@hillfort.edu</span>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Hillfort International School. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;