import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

interface CheckoutFormProps {
  onSubmit: (data: any) => void;
  initialValues?: any;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for shipping and billing information */}
      <PaymentForm />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
