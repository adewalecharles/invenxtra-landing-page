import { Store, Settings2, BarChart4 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Setup Your Business',
      desc: 'Create your account, add your business details and set up in minutes.',
      icon: Store,
      number: '1'
    },
    {
      title: 'Manage Operations',
      desc: 'Use all the powerful tools to manage inventory, sales, workforce and finances.',
      icon: Settings2,
      number: '2'
    },
    {
      title: 'Grow with insights',
      desc: 'Make smarter decisions with real-time analytics and AI-powered recommendations.',
      icon: BarChart4,
      number: '3'
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">How it works</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Get Started in 3 Simple Steps</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-brand flex items-center justify-center mb-8 relative">
                <step.icon className="w-10 h-10 text-brand" />
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
