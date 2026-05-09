import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-lg font-medium text-gray-800">
            Welcome to Invenxtra. By using our platform, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              Invenxtra provides an all-in-one inventory, POS, and business management platform. By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of the Service</h2>
            <p>
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account and password. Invenxtra cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription and Payments</h2>
            <p>
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (monthly or annually). A valid payment method is required to process the payment for your subscription.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Ownership and Rights</h2>
            <p>
              You retain all rights and ownership of the data you upload or enter into Invenxtra. By using the platform, you grant Invenxtra a license to host, store, and process your data solely for the purpose of providing the service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI and Smart Insights</h2>
            <p>
              Invenxtra utilizes Artificial Intelligence to provide smart recommendations and business insights. While we strive for accuracy, these insights are provided for informational purposes only. You are responsible for making final business decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
            <p>
              You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Invenxtra shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
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

export default TermsOfService;
