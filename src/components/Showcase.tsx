import { motion } from 'motion/react';

export default function Showcase() {
  const showcases = [
    { 
      title: 'Smart Inventory', 
      desc: 'Real-time tracking, low stock alerts, batch & expiry management and more.', 
      tag: 'Inventory',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      title: 'Advanced POS', 
      desc: 'Lightning-fast POS, multiple payment, offline mode and beautiful receipts.', 
      tag: 'POS',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      title: 'Workforce Hub', 
      desc: 'Effortless shift scheduling, attendance tracking and employee management.', 
      tag: 'Workforce',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      title: 'Finance Suite', 
      desc: 'Track expenses, create budgets, reconcile accounts and keep finances healthy.', 
      tag: 'Finance',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      title: 'AI Insights', 
      desc: 'AI recommendations, demand forecasting and profit insights to grow your business.', 
      tag: 'AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    }
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
              <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2">{item.tag}</div>
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
