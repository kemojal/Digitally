import React, { useState } from 'react';

interface EmailListFormProps {
  onSubmit: (emailList: any) => void;
  initialValues?: any;
}

const EmailListForm: React.FC<EmailListFormProps> = ({ onSubmit, initialValues }) => {
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
      {/* Add form fields for email list details */}
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default EmailListForm;