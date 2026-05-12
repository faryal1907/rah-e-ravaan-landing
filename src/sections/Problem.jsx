import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: <Search className="text-sky" />,
      title: "Fragmented Planning",
      desc: "Switching between dozen apps for transport, hotels, and spots."
    },
    {
      icon: <Clock className="text-accent" />,
      title: "Time Consuming",
      desc: "Spending days researching routes that an AI can plan in seconds."
    },
    {
      icon: <MapPin className="text-natural" />,
      title: "Limited Discovery",
      desc: "Missing out on hidden gems because they aren't on static maps."
    },
    {
      icon: <DollarSign className="text-sky" />,
      title: "High Costs",
      desc: "Solo travel is expensive without smart transport pooling; groups uncoordinated."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      <div className="ornate-frame-alt"></div>
      <div className="desi-pattern"></div>
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-desi-saffron/5 rounded-full blur-[100px]"></div>
      

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-forest">
            Travel shouldn't be <span className="text-desi-red">this complex.</span>
          </h2>
          <p className="text-lg text-forest/60">
            Current tourism tools in Northern Pakistan are static and disconnected. Planning high-altitude trips requires precision that existing apps just don't offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card bg-desi-parchment border-forest/5 hover:border-desi-red/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-forest">{point.title}</h3>
              <p className="text-forest/50 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
