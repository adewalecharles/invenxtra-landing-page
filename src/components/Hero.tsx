import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-muted/30 to-white">
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-muted px-4 py-1.5 rounded-full text-brand text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              All-in-one inventory, POS & Business OS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Run Your Entire Business From <br />
              <span className="text-brand">One Platform</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Inventory, POS, workforce, finance, and AI insights—everything you need to manage, sell and grow your business in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="btn-primary py-4 px-10 text-lg">
                Get Started Free
              </button>
              <button className="btn-secondary py-4 px-10 text-lg">
                Book a Demo
              </button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['No credit card required', 'Setup in minutes', 'Cancel anytime'].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
              <div className="bg-gray-50 rounded-2xl w-full aspect-[4/3] flex items-center justify-center border border-gray-100">
                <div className="text-center p-8">
                   <div className="w-24 h-24 bg-brand-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                     <svg className="w-12 h-12 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Dashboard</h3>
                   <p className="text-gray-500 text-sm">Real-time insights for your business</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements to mimic a dashboard better */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block w-48">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">New Sale</p>
                  <p className="text-lg font-bold text-gray-900">$2,450.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
