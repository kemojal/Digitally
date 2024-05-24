import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-sm max-w-3xl w-full">
        <h1 className="text-3xl font-semibold mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 leading-7 mb-4">
          Welcome to our website. If you continue to browse and use this
          website, you are agreeing to comply with and be bound by the following
          terms and conditions of use, which together with our privacy policy
          govern [Your Company Name]'s relationship with you in relation to this
          website.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
        <p className="text-gray-700 leading-7 mb-4">
          The content of the pages of this website is for your general
          information and use only. It is subject to change without notice.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Your use of this website and any dispute arising out of such use of
          the website is subject to the laws of [Your Country/State].
        </p>
        <footer className="text-center text-gray-500 mt-8">
          &copy; 2023 [Your Company Name]. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;
