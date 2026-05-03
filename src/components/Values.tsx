import { LayoutGrid, Globe, TrendingUp } from 'lucide-react';

export default function Values() {
  const values = [
    {
      title: 'Manage Everything',
      desc: 'Inventory, suppliers, workforce, purchases, finances and more – all in one place.',
      icon: LayoutGrid,
      color: 'bg-brand'
    },
    {
      title: 'Sell Anywhere',
      desc: 'Powerful POS and online storefront to sell in-store, online, or on the go.',
      icon: Globe,
      color: 'bg-indigo-600'
    },
    {
      title: 'Grow Faster',
      desc: 'Make smarter decisions with real-time analytics and AI powered insights.',
      icon: TrendingUp,
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div key={item.title} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-8`}>
                <item.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
