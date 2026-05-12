import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Shield } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="desi-pattern"></div>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/09/ca/d9/09cad9ad83b39168c90d553d2e1799af.jpg"
                alt="Northern Pakistan Culture and Heritage"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Funky Yellow Post-it */}
            <div className="absolute -top-6 -left-6 bg-desi-saffron text-white p-6 rounded-sm shadow-xl rotate-[3deg] font-decorative z-20">
              <p className="text-xs uppercase tracking-tighter opacity-80 mb-1">Timeless</p>
              <p className="text-xl font-bold leading-tight">Ancient <br /> Cultures</p>
            </div>
          </motion.div>

          <div className="desi-card border-desi-red/10 shadow-desi-red/5">
            <h2 className="text-4xl md:text-5xl font-decorative font-bold mb-8 text-desi-red italic">Why we exist.</h2>
            <p className="text-xl text-forest/70 leading-relaxed mb-12">
              Rah-e-Ravaan is a movement to make the breathtaking peaks and ancient cultures of Northern Pakistan accessible to everyone; sustainably, intelligently, and collectively.
            </p>

            <div className="space-y-8">
              <div className="flex space-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-desi-red/10 border border-desi-red/20 flex items-center justify-center text-desi-red">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-forest">Empowering Local Communities</h4>
                  <p className="text-forest/50 leading-relaxed">By connecting travelers directly with local guides and shared transport, we ensure tourism benefits the people on the ground.</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-desi-saffron/10 border border-desi-saffron/20 flex items-center justify-center text-desi-saffron">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-forest">Global Standards, Local Context</h4>
                  <p className="text-forest/50 leading-relaxed">We bring world-class AI technology to the unique terrain and cultural nuances of Pakistan tourism.</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-desi-indigo/10 border border-desi-indigo/20 flex items-center justify-center text-desi-indigo">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-forest">Safety & Verification</h4>
                  <p className="text-forest/50 leading-relaxed">Our admin-verified providers and community-driven reviews ensure a safe experience for every traveler.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
