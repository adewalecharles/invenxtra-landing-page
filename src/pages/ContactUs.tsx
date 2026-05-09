import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Invenxtra Contact: ${formData.topic} from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Topic: ${formData.topic}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@invenxtra.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-12">
              Have questions about Invenxtra? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">General Inquiries: hello@invenxtra.com</p>
                  <p className="text-gray-600">Support: support@invenxtra.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+234 (815) 3796851</p>
                  <p className="text-sm text-gray-400">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Office</h3>
                  <p className="text-gray-600">12 Ogungbamila street, off ilaje road, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white" 
                  placeholder="john@company.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Topic</label>
                <select 
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Sales & Pricing</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none bg-white" 
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
