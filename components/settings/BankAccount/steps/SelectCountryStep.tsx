// components/settings/SelectCountryStep.tsx
import React from "react";

interface SelectCountryStepProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  onNext: () => void;
}

const SelectCountryStep: React.FC<SelectCountryStepProps> = ({
  selectedCountry,
  onCountryChange,
  onNext,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Country</h2>
      <select
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">Select a country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        {/* Add more countries as needed */}
      </select>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onNext}
          disabled={!selectedCountry}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectCountryStep;
