import React, { useEffect } from 'react';
import { Search, Book, MessageCircle, PlayCircle, LifeBuoy, FileText } from 'lucide-react';

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { title: 'Getting Started', icon: PlayCircle, articles: ['Account Setup', 'Connecting your POS', 'First Inventory Import'] },
    { title: 'Inventory Management', icon: Book, articles: ['Tracking Stock levels', 'Multi-warehouse setup', 'Low stock alerts'] },
    { title: 'POS & Sales', icon: MessageCircle, articles: ['Processing Payments', 'Setting up Receipts', 'Offline Mode'] },
    { title: 'AI Insights', icon: LifeBuoy, articles: ['Understanding Smart Reports', 'Forecasting Sales', 'Optimizing Stock'] },
    { title: 'Billing & Account', icon: FileText, articles: ['Managing Subscription', 'Adding Team Members', 'Update Payment Method'] },
  ];

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, and tutorials..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <cat.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.articles.map((article, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:text-brand flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-brand font-semibold hover:underline">View all articles</button>
            </div>
          ))}
        </div>

        <div className="bg-brand rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-brand-light mb-8 opacity-90">Our support team is available 24/7 to help you with any questions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Chat with us</button>
            <button className="bg-brand-dark text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">Email Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
