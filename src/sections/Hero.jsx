import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, MapPin, Sparkles } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

const Hero = () => {
  const { trackEvent } = useAnalytics();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-desi-parchment">
      <div className="margin-pattern-left"></div>
      {/* Background Decorative Print */}
      <div className="desi-pattern opacity-[0.05]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 translate-x-1/2 z-0"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Spacious Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 bg-white shadow-sm border border-desi-saffron/20 rounded-full text-desi-red font-bold text-xs uppercase tracking-widest">
              <Sparkles size={14} />
              <span>GO-TO ITINERARY PLANNER</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-forest leading-[1.1] mb-8">
              Discover <br />
              <span className="text-gradient-desi">& Explore Pakistan</span>
            </h1>

            <p className="text-xl text-forest/70 mb-12 leading-relaxed max-w-xl font-medium">
              One-for-all travel enthusiasts platform coming soon!
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="#vision"
                onClick={() => trackEvent('cta_click', { label: 'Explore Vision' })}
                className="flex items-center justify-center space-x-4 text-forest hover:text-desi-red transition-all font-bold group"
              >
                <div className="w-14 h-14 rounded-full border-2 border-forest/10 flex items-center justify-center group-hover:border-desi-red/30 group-hover:bg-desi-red/5 transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
                <span>Our Vision</span>
              </a>
            </div>

            {/* Subtle Desi Motif */}
            <div className="mt-16 opacity-10 grayscale">
              <svg width="200" height="40" viewBox="0 0 200 40" fill="currentColor">
                <path d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20" stroke="currentColor" fill="none" strokeWidth="2" />
                <circle cx="25" cy="20" r="3" />
                <circle cx="75" cy="20" r="3" />
                <circle cx="125" cy="20" r="3" />
                <circle cx="175" cy="20" r="3" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Ornate Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="ornate-frame">
              <img
                src="/src/assets/hero_bg.png"
                alt="Northern Pakistan Landscape"
                className="w-full h-[500px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-desi-saffron text-white p-6 rounded-sm shadow-xl rotate-[-5deg] font-decorative">
                <p className="text-xs uppercase tracking-tighter opacity-80 mb-1">Authentic</p>
                <p className="text-xl font-bold leading-tight">Northern <br /> Heritage</p>
              </div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-desi-saffron/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-desi-red/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
