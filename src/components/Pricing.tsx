import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      desc: 'Perfect for small business',
      features: [
        'Inventory management',
        'POS system',
        'Up to 2 Users',
        'Basic report',
        'Email support'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Growth',
      price: '79',
      desc: 'For growing business',
      features: [
        'Everything in Starter',
        'Workforce Management',
        'Purchase Orders',
        'Expense & Budgeting',
        'Advanced Reports',
        'Priority Support',
        'Shifts & Attendance'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Scale',
      price: '149',
      desc: 'For large businesses',
      features: [
        'Everything in Growth',
        'AI Smart Recommendations',
        'Multi-Location Management',
        'Advanced Reconciliation',
        'Custom Roles & Permission',
        'Dedicated Account Manager',
        '24/7 Support'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Pricing plans</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the perfect plan for your business. upgrade or downgrade anytime.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white p-10 rounded-3xl border ${plan.highlighted ? 'border-brand ring-4 ring-brand/10' : 'border-gray-100'} flex flex-col h-full`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 font-medium">Month</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Billed annually</p>
              </div>
              
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-start text-sm">
                    <Check className="w-5 h-5 text-brand shrink-0" />
                    <span className="text-gray-600 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlighted 
                ? 'bg-brand text-white hover:bg-brand-dark' 
                : 'bg-white text-brand border border-brand hover:bg-brand-muted'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
