'use client'
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import React from 'react';

const CheckoutPage: React.FC = () => {
  const handleSubmit = (data: any) => {
    // Handle checkout submission logic here
    console.log(data);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CheckoutPage;
