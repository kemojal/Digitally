import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [paymentData, setPaymentData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing logic here
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Payment Information</h3>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for payment details */}
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;