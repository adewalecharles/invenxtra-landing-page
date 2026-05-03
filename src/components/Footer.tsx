import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', "What's New", 'Integrations']
    },
    {
      title: 'Solutions',
      links: ['Retail Stores', 'Wholesalers', 'E-commerce', 'Warehouses', 'Restaurants']
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Partners']
    },
    {
      title: 'Support',
      links: ['Help center', 'Contact Us', 'System Status']
    },
    {
      title: 'Legal',
      links: ['Refund Policy', 'Terms of Services', 'Privacy Policy']
    }
  ];

  return (
    <footer className="bg-[#020817] text-gray-400 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-6 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand w-8 h-8 rounded-lg flex items-center justify-center">
                <ShoppingBag className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">invenxtra</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              All-in-one inventory, pos and business management platform to help you manage,sell and grow
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-brand transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-brand transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {currentYear} Invenxtra. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for business worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
