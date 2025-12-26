import React from 'react';

export const LegalContent: React.FC<{ type: 'privacy' | 'terms' | 'refund' }> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refund: 'Refund Policy'
  };

  const content = {
    privacy: (
      <>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">1. Information Collection</h3>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create an account, subscribe to our service, or request support. This includes your name, email address, payment information, and any manuscript files you upload for analysis. We may also automatically collect certain technical data about your device and usage of our website to improve our services.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">2. Use of Information</h3>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you. Specifically, your manuscript files are processed solely for the purpose of generating formatting reports and analysis. We do not claim ownership of your intellectual property, nor do we share, sell, or distribute your manuscript content to third parties, except as necessary to provide the service (e.g., cloud storage providers) or as required by law.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">3. Data Security</h3>
        <p className="mb-4">
          We implement industry-standard security measures, including encryption in transit and at rest, to protect your personal information and manuscript files. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </>
    ),
    terms: (
      <>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">1. Acceptance of Terms</h3>
        <p className="mb-4">
          By accessing or using Publish Perfect Pal, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">2. Service Description and Disclaimer</h3>
        <p className="mb-4">
          Publish Perfect Pal provides tools to assist authors in formatting their books for Amazon Kindle Direct Publishing (KDP). The service is provided on an "as is" and "as available" basis. While we strive for accuracy, we do not guarantee that your files will be accepted by Amazon KDP, as their policies and technical requirements are subject to change without notice. We are not affiliated with Amazon.com, Inc. or its affiliates.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">3. Limitation of Liability</h3>
        <p className="mb-4">
          To the fullest extent permitted by law, Publish Perfect Pal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
        </p>
      </>
    ),
    refund: (
      <>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">1. Free Trial and Cancellations</h3>
        <p className="mb-4">
          We offer a free 3-day trial for you to evaluate Publish Perfect Pal. You may cancel your subscription at any time before the trial ends to avoid being charged. Cancellations can be made directly through your account settings.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">2. Refund Policy</h3>
        <p className="mb-4">
          Due to the digital nature of our product and the immediate availability of our tools, <strong>all sales are final</strong>. We do not offer refunds for monthly subscriptions, yearly subscriptions, or lifetime bundles once payment has been processed. Please use the free 3-day trial to fully evaluate the product before purchasing.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">3. Billing Disputes</h3>
        <p className="mb-4">
          If you believe you have been charged in error (for example, a double charge or a charge after cancellation was confirmed), please contact support immediately so we can rectify the issue.
        </p>
      </>
    )
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">{titles[type]}</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-6">
          Last updated: January 2025
        </p>
        <p className="mb-4 italic text-slate-500">
          The following document outlines the {titles[type].toLowerCase()} for Publish Perfect Pal.
        </p>
        {content[type]}
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8">Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this {titles[type]}, please contact us.
        </p>
      </div>
    </div>
  );
};