import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import heroImg from '../images/hero_img.svg';

export default function Hero() {
    const TEST_API_URL = import.meta.env.VITE_TEST_API_URL;
  const LIVE_API_URL = import.meta.env.VITE_LIVE_API_URL;
  const APP_ENV = import.meta.env.VITE_APP_ENV;

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-brand-muted/40 to-white">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,_rgba(0,102,255,0.16),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.06),_transparent_12%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_8px_at_10%_20%,_rgba(59,130,246,0.05),_transparent_0),radial-gradient(circle_8px_at_80%_15%,_rgba(59,130,246,0.05),_transparent_0),radial-gradient(circle_8px_at_60%_80%,_rgba(59,130,246,0.04),_transparent_0)] bg-repeat" style={{ backgroundSize: '100px 100px' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-brand-muted px-4 py-1.5 rounded-full text-brand text-xs font-bold uppercase tracking-[0.22em] mb-4">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              All-in-one inventory, POS & Business OS
            </div>

            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Run Your Entire Business From <br />
                <span className="text-brand">One Platform</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-8">
                Inventory, POS, workforce, finance, and AI insights; everything you need to manage, sell and grow your business in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
              onClick={() =>
                window.location.href =
                  `${['development', 'staging'].includes(APP_ENV)
                    ? TEST_API_URL
                    : LIVE_API_URL}/onboarding`
              }
              className="btn-primary py-4 px-10 text-base sm:text-lg rounded-full">
                Get Started
              </button>
              <button
                onClick={() => {
                  const subject = encodeURIComponent('Request to Book an Invenxtra Demo');

                  const body = encodeURIComponent(
                    `Hi Invenxtra Team,

              I would like to schedule a demo of the Invenxtra platform to better understand its features and capabilities.

              Please let me know the available dates and next steps.

              Best regards,`
                  );

                  window.location.href = `mailto:shyprince1@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="btn-secondary py-4 px-10 text-base sm:text-lg rounded-full"
              >
                Book a Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center flex-wrap text-sm font-semibold text-gray-500">
              {['No credit card required', 'Setup in minutes', 'Cancel anytime'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             className="relative lg:ml-16 hidden md:block"
          >
            <img src={heroImg} alt="Inventxtra dashboard hero" className="w-full h-100 object-cover rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
