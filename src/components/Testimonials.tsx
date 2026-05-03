import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Invenxtra has completely transformed the way we manage our inventory, everything is now in one place!",
      author: "Arjun Mehta",
      role: "Retail store owner",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u=arjun"
    },
    {
      quote: "The POS is super fast and easy to use. The reports and AI insights help us make better decisions every day.",
      author: "Priya Sharma",
      role: "Boutique owner",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
      quote: "Workforce management and attendance tracking have saved us so much time and manual work.",
      author: "Rohan Verma",
      role: "Operation manager",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u=rohan"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">What our customers say</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Loved By Thousands Of Businesses</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
              <p className="text-gray-600 leading-relaxed mb-8 italic">"{t.quote}"</p>
              
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500 mb-2">{t.role}</p>
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-2.5 rounded-full ${i === 0 ? 'w-8 bg-gray-400' : 'w-2.5 bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
