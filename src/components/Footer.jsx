import React from 'react';
import { Plane, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-desi-parchment pt-20 pb-10 border-t border-forest/5 relative overflow-hidden">
      <div className="desi-pattern opacity-[0.05]"></div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center mb-6">
            <img 
              src="/logo.svg" 
              alt="Rah-e-Ravaan Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
            <p className="text-forest/50 leading-relaxed mb-6">
              Revolutionizing tourism in Pakistan through AI-powered conversational intelligence and community-driven transport.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center hover:bg-desi-red/20 transition-colors text-forest/70 hover:text-desi-red">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center hover:bg-desi-red/20 transition-colors text-forest/70 hover:text-desi-red">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center hover:bg-desi-red/20 transition-colors text-forest/70 hover:text-desi-red">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-forest">Platform</h4>
            <ul className="space-y-4 text-forest/50">
              <li><a href="#features" className="hover:text-desi-red transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-desi-red transition-colors">Shared Transport</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-forest">Company</h4>
            <ul className="space-y-4 text-forest/50">
              <li><a href="#vision" className="hover:text-desi-red transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-desi-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-desi-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-desi-red transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-forest">Contact</h4>
            <ul className="space-y-4 text-forest/50">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-desi-red" />
                <span>hello@raheravaan.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-desi-red" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-desi-red" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest/30 font-medium">
          <p>© 2026 Rah-e-Ravaan. Built for Pakistan.</p>
          <div className="flex space-x-8">
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-desi-red fill-desi-red" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Heart = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default Footer;
