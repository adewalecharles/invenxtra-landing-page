import { Command, Triangle, Hexagon, Zap, Shield, Sparkles } from 'lucide-react';

export default function TrustedBy() {
  const partners = [
    { name: 'TechMart', icon: Command },
    { name: 'StyleHub', icon: Hexagon },
    { name: 'FreshBasket', icon: Triangle },
    { name: 'UrbanFoods', icon: Zap },
    { name: 'BuildRight', icon: Shield },
    { name: 'PharmaPlus', icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="section-container">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
          Trusted by 100+ businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-3">
              <partner.icon className="w-8 h-8 text-gray-900" />
              <span className="text-lg font-bold text-gray-900">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
