import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const TEST_API_URL = import.meta.env.VITE_TEST_API_URL;
  const LIVE_API_URL = import.meta.env.VITE_LIVE_API_URL;
  const APP_ENV = import.meta.env.VITE_APP_ENV;

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Showcase', href: '/#showcase' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Inventxtra logo" className="h-50 w-50 rounded-xl object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() =>
                window.location.href =
                  `${['development', 'staging'].includes(APP_ENV)
                    ? TEST_API_URL
                    : LIVE_API_URL}/login`
              }
              className="text-sm font-semibold text-gray-700 hover:text-brand px-4 py-2"
            >
              Login
            </button>

            <button
              onClick={() =>
                window.location.href =
                  `${['development', 'staging'].includes(APP_ENV)
                    ? TEST_API_URL
                    : LIVE_API_URL}/onboarding`
              }
              className="bg-brand text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-all"
            >
              Get Started Free
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-bottom border-gray-100 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-brand"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-center py-2 font-semibold text-gray-700">Login</button>
            <button className="w-full bg-brand text-white py-3 rounded-lg font-semibold">Get Started Free</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
