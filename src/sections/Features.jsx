import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Map, Calendar, Users, GraduationCap, Navigation } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "AI Conversational Planning",
      desc: "Just say where you want to go. Our AI understands preferences and constraints in real-time.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-sky"
    },
    {
      title: "Smart Itineraries",
      desc: "Dynamic generation of day-by-day plans with estimated costs and local attractions.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-natural"
    },
    {
      title: "Smart Transport Pooling",
      desc: "Book shared transport with real-time capacity. Lower costs, higher connectivity.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-sky"
    },
    {
      title: "Location-Aware Guidance",
      desc: "The assistant travels with you, suggesting nearby spots and events as you move.",
      icon: <Navigation className="w-6 h-6" />,
      color: "bg-natural"
    }
  ];

  return (
    <section id="features" className="py-24 bg-desi-parchment relative overflow-hidden">
      <div className="margin-pattern-right"></div>
      <div className="desi-pattern opacity-[0.04]"></div>
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-forest">
              More than just a <br />
              <span className="text-desi-red">Guide</span>
            </h2>
            <p className="text-lg text-forest/60">
              We've built a comprehensive ecosystem for navigating the complex terrains and rich cultures of Northern Pakistan.
            </p>
          </div>
          <div className="pb-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-desi-saffron/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-forest/20 to-transparent"></div>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-desi-red flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <p className="text-xs text-forest/40 mt-2 font-medium">Waitlist growing fast</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card bg-white hover:bg-white/90 transition-all duration-300 group cursor-default shadow-md"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:rotate-6 transition-transform text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-forest">{feature.title}</h3>
              <p className="text-forest/60 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
