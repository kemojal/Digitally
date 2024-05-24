import React, { useState } from 'react';

interface AffiliateFormProps {
  onSubmit: (affiliate: any) => void;
  initialValues?: any;
}

const AffiliateForm: React.FC<AffiliateFormProps> = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="commissionRate" className="block text-gray-700 font-bold mb-2">
          Commission Rate (%)
        </label>
        <input
          type="number"
          id="commissionRate"
          name="commissionRate"
          value={formData.commissionRate || ''}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AffiliateForm;