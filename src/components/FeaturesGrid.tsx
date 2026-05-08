import { 
  Package, Boxes, Factory, ShoppingCart, 
  Users, Monitor, Store, ClipboardList,
  Clock, Calculator, RefreshCw, BarChart3,
  BrainCircuit, MapPin, Plus
} from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    { title: 'Inventory Management', desc: 'Real-time STOCK tracking, multi-warehouse, low stock alert & more', icon: Package, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Stock Count', desc: 'Accurate stock counting with cycle count and instant update.', icon: Boxes, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { title: 'Raw Materials', desc: 'Track materials and ingredients for better production control.', icon: Factory, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { title: 'Purchase Orders', desc: 'Create, manage and track purchase orders effortlessly.', icon: ShoppingCart, color: 'text-sky-500', bg: 'bg-sky-50' },
    { title: 'Supplier Management', desc: 'Manage suppliers, track performance and build stronger relationship.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'POS System', desc: 'Fast, intuitive POS with barcode, receipts and multiple payment options.', icon: Monitor, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Storefront', desc: 'Launch your online store and reach customers beyond your location.', icon: Store, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Workforce Management', desc: 'Manage employees, roles, permission and overall workforce.', icon: ClipboardList, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { title: 'Shifts & Attendance', desc: 'Schedule shifts and track attendance in real-time from anywhere.', icon: Clock, color: 'text-sky-600', bg: 'bg-sky-50' },
    { title: 'Expense & Budgeting', desc: 'Track expenses, set budgets and keep your finances in control.', icon: Calculator, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Reconciliation', desc: 'Reconcile payments, sales and accounts with ease.', icon: RefreshCw, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'Reports & Analytics', desc: 'Powerful reports and visual analytics to grow smarter.', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'AI Smart Recommendation', desc: 'AI powered suggestions to optimize stock and sales.', icon: BrainCircuit, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Multi-Location', desc: 'Manage multiple locations and consolidate your business.', icon: MapPin, color: 'text-sky-600', bg: 'bg-sky-50' },
    {title: 'Logistics & Delivery', desc: 'Integrated logistics and delivery management for seamless operations.', icon: ShoppingCart, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'And Much More', desc: 'Discover many more features built to scale your business.', icon: Plus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">All-in-one features</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Everything You Need To Run Your Business</h2>
          <p className="text-lg text-gray-500">Powerful tools to simplify operations, boost productivity and increase profits.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 bg-white transition-all">
              <div className={`${feature.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
