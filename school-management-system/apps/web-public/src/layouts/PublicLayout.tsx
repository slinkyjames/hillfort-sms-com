import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-navy text-xl shadow">
              H
            </div>
            <div>
              <span className="font-bold text-xl tracking-wide block text-white">Hillfort International</span>
              <span className="text-xs text-brand-gold font-medium tracking-widest uppercase">School</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/academics" className="hover:text-brand-gold transition-colors">Academics</Link>
            <Link to="/admissions" className="hover:text-brand-gold transition-colors">Admissions</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="http://localhost:5173" // Port for web-portal or redirect URL
              className="px-4 py-2 text-xs font-bold text-brand-navy bg-brand-gold rounded-lg hover:bg-[#c28f15] transition-colors shadow-sm"
            >
              Portal Login
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center font-bold text-brand-navy">
                H
              </div>
              <span className="font-bold text-lg text-white">Hillfort International</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Providing world-class education through a rigorous hybrid Nigerian and British curriculum, fostering moral integrity and academic excellence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/academics" className="hover:text-brand-gold transition-colors">Our Curriculum</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-gold transition-colors">Admissions Process</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Campuses</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Main Campus: Victoria Island, Lagos, Nigeria<br />
              Secondary Annex: Abuja, FCT
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Email: admissions@hillfort.edu.ng<br />
              Phone: +234 (0) 123 456 7890
            </p>
          </div>
        </div>
        <div className="bg-slate-900 py-4 text-center text-xs text-slate-500 border-t border-slate-800">
          © {new Date().getFullYear()} Hillfort International School. All rights reserved.
        </div>
      </footer>
    </div>
  );
};