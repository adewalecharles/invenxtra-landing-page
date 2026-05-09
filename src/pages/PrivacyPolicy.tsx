import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-lg">
            Your privacy is important to us. This Privacy Policy explains how Invenxtra collects, uses, and protects your information when you use our inventory and business management platform.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number, and business details.</li>
              <li><strong>Business Data:</strong> Inventory records, sales transactions, supplier information, and employee data.</li>
              <li><strong>Usage Information:</strong> Data about how you interact with our platform, including device information and IP addresses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our services.</li>
              <li>To process transactions and send related information.</li>
              <li>To provide AI-driven insights and recommendations for your business.</li>
              <li>To send technical notices, updates, and support messages.</li>
              <li>To respond to your comments and questions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal or business data to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us provide the service (e.g., payment processors, hosting providers).</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of Invenxtra and its users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI Processing</h2>
            <p>
              Invenxtra uses AI to analyze your business data to provide smart insights. This processing is performed on our secure servers, and your data remains private and is not used to train models for other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time through your account settings or by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p>
              We use cookies to enhance your experience and gather information about visitors and visits to our website.
            </p>
          </section>

          <p className="pt-8 text-sm italic">
            Last Updated: May 9, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
