import { ShoppingBag } from 'lucide-react';

export default function CTA() {
   const TEST_API_URL = import.meta.env.VITE_TEST_API_URL;
  const LIVE_API_URL = import.meta.env.VITE_LIVE_API_URL;
  const APP_ENV = import.meta.env.VITE_APP_ENV;
  return (
    <section className="section-container py-12">
      <div className="bg-brand rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        {/* Background blobs for depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <div className="bg-white/20 p-3 rounded-2xl">
              <ShoppingBag className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Take Your Business to the Next Level?
            </h2>
          </div>
          <p className="text-brand-muted text-lg">
            Join invenxtra today and experience the power of an all-in-one business platform
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
          <button 
            onClick={() =>
              window.location.href =
                `${['development', 'staging'].includes(APP_ENV)
                  ? TEST_API_URL
                  : LIVE_API_URL}/onboarding`
            }
            className="bg-white text-brand px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-muted transition-all shadow-lg"
          >
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
            className="bg-brand-dark/30 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
