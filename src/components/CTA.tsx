import { ShoppingBag } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-container !py-12">
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
          <button className="bg-white text-brand px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-muted transition-all shadow-lg">
            Get Started Free
          </button>
          <button className="bg-brand-dark/30 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
