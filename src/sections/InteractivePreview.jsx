import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin } from 'lucide-react';

const InteractivePreview = () => {
  return (
    <section id="preview" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="desi-pattern opacity-[0.05]"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-forest">Experience the vision</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="desi-card min-h-[500px] flex flex-col border-forest/5 shadow-2xl"
          >
            <div className="flex-1 space-y-6 overflow-y-auto pr-2">
              {/* AI Message */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-6 max-w-[80%] border border-forest/5 shadow-sm">
                  <p className="text-desi-red font-bold text-xs uppercase mb-2 flex items-center">
                    <Sparkles size={12} className="mr-1" /> Rah-e-Ravaan AI
                  </p>
                  <p className="text-forest/80 font-medium">Assalam-o-Alaikum! Where would you like to explore in Northern Pakistan today?</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-desi-red/10 rounded-2xl p-6 max-w-[80%] border border-desi-red/20">
                  <p className="text-desi-red font-medium">I want to plan a 3-day budget trip to Hunza for this weekend.</p>
                </div>
              </div>

              {/* AI Itinerary Response */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-6 max-w-[80%] border border-forest/5 shadow-sm">
                  <p className="text-desi-red font-bold text-xs uppercase mb-2 flex items-center">
                    <Sparkles size={12} className="mr-1" /> Rah-e-Ravaan AI
                  </p>
                  <p className="mb-4 text-forest/80">Great choice! Hunza is beautiful this time of year. Here is a suggested itinerary for 30,000 PKR:</p>
                  
                  <div className="bg-desi-parchment/50 rounded-xl p-5 border border-desi-saffron/10">
                    <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-forest/5">
                      <MapPin size={18} className="text-desi-red" />
                      <span className="font-bold text-forest">3-Day Hunza Express</span>
                    </div>
                    <div className="space-y-4 text-sm text-forest/70">
                      <p><span className="text-desi-red font-bold">Day 1:</span> Arrival in Gilgit, drive to Karimabad, visit Altit Fort.</p>
                      <p><span className="text-desi-red font-bold">Day 2:</span> Attabad Lake boating & Passu Cones photography.</p>
                      <p><span className="text-desi-red font-bold">Day 3:</span> Local breakfast, shopping in Karimabad Bazaar, return flight.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="mt-8 pt-8 border-t border-forest/5 flex space-x-4">
              <div className="flex-1 bg-desi-parchment rounded-full px-4 sm:px-8 py-3 sm:py-4 border border-forest/10 text-forest/40 italic text-sm sm:text-base">
                Ask about the Karakoram Highway...
              </div>
              <button className="w-14 h-14 rounded-full bg-desi-red text-white flex items-center justify-center shadow-lg shadow-desi-red/20 hover:scale-105 transition-all">
                <Send size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
