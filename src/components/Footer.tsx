import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/footer_logo.png';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: "What's New", href: '#' },
        { name: 'Integrations', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Retail Stores', href: '#' },
        { name: 'Wholesalers', href: '#' },
        { name: 'E-commerce', href: '#' },
        { name: 'Warehouses', href: '#' },
        { name: 'Restaurants', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help center', href: '/help-center' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'System Status', href: '/system-status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Refund Policy', href: '/refund-policy' },
        { name: 'Terms of Services', href: '/terms-of-service' },
        { name: 'Privacy Policy', href: '/privacy-policy' }
      ]
    }
  ];

  return (
    <footer className="bg-[#020817] text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="bg-brand w-8 h-8 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Inventxtra logo" className="h-50 w-50 rounded-xl object-contain" />
              </Link>
              <Link to="/" className="text-xl font-bold text-white tracking-tight">invenxtra</Link>
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
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-sm hover:text-brand transition-colors">{link.name}</Link>
                    ) : (
                      <a href={link.href} className="text-sm hover:text-brand transition-colors">{link.name}</a>
                    )}
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
