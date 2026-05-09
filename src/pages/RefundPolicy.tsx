import React, { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Refund Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-lg">
            At Invenxtra, we want you to be completely satisfied with our platform. This Refund Policy outlines the terms and conditions for refunds on our subscription services.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Subscription Refunds</h2>
            <p>
              We offer a 14-day money-back guarantee for all new monthly and annual subscriptions. If you are not satisfied with Invenxtra within the first 14 days of your initial purchase, you are eligible for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility for Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refund requests must be made within 14 days of the initial subscription date.</li>
              <li>Refunds are only applicable to the first payment of a new subscription.</li>
              <li>Renewal payments (monthly or annual) are generally non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Non-Refundable Items</h2>
            <p>
              Certain services and fees are non-refundable, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Setup or onboarding fees (if applicable).</li>
              <li>Custom development or integration services.</li>
              <li>SMS or third-party API usage fees consumed during the subscription period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
            <p>
              To request a refund, please contact our support team at <span className="font-semibold text-brand">support@invenxtra.com</span> with your account details and the reason for your request. Refunds will be processed within 5-10 business days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Account Cancellation</h2>
            <p>
              You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the platform until the end of your current billing period. No further charges will be made.
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

export default RefundPolicy;
