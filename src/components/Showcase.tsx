import { motion } from 'motion/react';

export default function Showcase() {
  const showcases = [
    { title: 'Smart Inventory', desc: 'Real-time tracking, low stock alerts, batch & expiry management and more.', tag: 'Inventory' },
    { title: 'Advanced POS', desc: 'Lightning-fast POS, multiple payment, offline mode and beautiful receipts.', tag: 'POS' },
    { title: 'Workforce Hub', desc: 'Effortless shift scheduling, attendance tracking and employee management.', tag: 'Workforce' },
    { title: 'Finance Suite', desc: 'Track expenses, create budgets, reconcile accounts and keep finances healthy.', tag: 'Finance' },
    { title: 'AI Insights', desc: 'AI recommendations, demand forecasting and profit insights to grow your business.', tag: 'AI' }
  ];

  return (
    <section id="showcase" className="py-16 bg-surface">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Powerful, Simple, Intelligent</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">See Invenxtra in Action</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {showcases.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="aspect-[4/5] bg-gray-50 flex items-end justify-center p-4">
                 {/* Visual placeholder for feature app screen */}
                 <div className="w-full bg-white rounded-t-xl border-x border-t border-gray-100 h-2/3 p-3 shadow-inner">
                   <div className="w-full h-4 bg-gray-50 rounded mb-2" />
                   <div className="grid grid-cols-2 gap-2">
                     <div className="h-12 bg-brand-muted/50 rounded" />
                     <div className="h-12 bg-gray-50 rounded" />
                   </div>
                 </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
