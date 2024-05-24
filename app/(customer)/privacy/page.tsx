import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-sm max-w-3xl w-full">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 leading-7 mb-4">
          This privacy policy sets out how [Your Company Name] uses and protects
          any information that you give [Your Company Name] when you use this
          website.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
        <p className="text-gray-700 leading-7 mb-4">
          We may collect the following information: name, contact information
          including email address, demographic information such as postcode,
          preferences, and interests.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <p className="text-gray-700 leading-7 mb-4">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
        <footer className="text-center text-gray-500 mt-8">
          &copy; 2023 [Your Company Name]. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPage;
