import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { addToWaitlist } from '../lib/firebase';
import { useAnalytics } from '../hooks/useAnalytics';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    trackEvent('waitlist_submission_start', { email_domain: email.split('@')[1] });

    try {
      await addToWaitlist(email);
      setStatus('success');
      trackEvent('waitlist_submission_success', { email_domain: email.split('@')[1] });
      setEmail('');
    } catch (error) {
      console.error("Firebase Error:", error);
      setStatus('error');
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-desi-parchment relative overflow-hidden">
      <div className="desi-pattern opacity-[0.06]"></div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-desi-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto desi-card p-12 text-center border-desi-red/10 bg-white shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-desi-red/10 border border-desi-red/20 flex items-center justify-center mx-auto mb-8 text-desi-red">
              <Sparkles size={40} />
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-forest">
              Join the <span className="text-desi-red">Future</span> <br /> of Travel.
            </h2>
            <p className="text-xl text-forest/60 mb-12 max-w-2xl mx-auto">
              Be the first to experience the AI-powered travel assistant. Limited early access slots available.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-white/50">Check your inbox for a special welcome from Rah-e-Ravaan.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sky hover:underline text-sm font-medium"
                >
                  Join with another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-forest/10 rounded-full px-8 py-4 text-forest focus:outline-none focus:border-desi-red/50 transition-colors text-lg"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary bg-desi-red hover:bg-desi-maroon flex items-center justify-center min-w-[200px] text-lg disabled:opacity-50 text-white"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin mr-2" size={20} />
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </form>
            )}
            
            <p className="mt-8 text-white/30 text-sm">
              By joining, you agree to our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and will receive occasional updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
