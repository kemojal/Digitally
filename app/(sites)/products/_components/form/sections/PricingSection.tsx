import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import RadioGroup from "../RadioGroup";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SelectCategory from "../SelectCategory";
import YesNoInput from "../YesNoInput";
import DetailContainer from "../DetailContainer";

const PricingSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const radioOptions = [
    { value: "singlePayment", label: "Single Payment" },
    { value: "subscription", label: "Subscription" },
    { value: "leadMagnet", label: "Lead Magnet" },
    { value: "payWhatYouWant", label: "Pay What You Want" },
  ];

  const renderInputs = () => {
    switch (selectedOption) {
      case "singlePayment":
        return (
          <div>
            <label className="block mt-4">
              <span className="text-gray-700">Pricing Model</span>
              <SelectCategory
                options={[
                  { label: "Standard Pricing", value: "0" },
                  { label: "Package Pricing", value: "1" },
                ]}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Price (required)</span>
              <Input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Tax Category</span>
              <SelectCategory
                options={[
                  { label: "Digital Goods or Services", value: "0" },
                  { label: "E-book", value: "1" },
                  { label: "SaaS", value: "3" },
                ]}
              />
            </label>
          </div>
        );
      case "subscription":
        return (
          <div className="text-sm">
            <label className="block mt-4">
              <span className="text-gray-700">Pricing Model</span>
              <SelectCategory
                options={[
                  { label: "Standard Pricing", value: "0" },
                  { label: "Package Pricing", value: "1" },
                  { label: "Graduated Pricing", value: "3" },
                  { label: "Volume Pricing", value: "4" },
                ]}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Price per Unit (required)</span>
              <Input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>

            <label className="block mt-4">
              <span className="text-gray-700">Repeat Payment Every</span>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="e.g., 30 days, 3 months"
              />
            </label>
            <YesNoInput label="Usage is Metered?" />
            <YesNoInput label="Subscription Includes a Setup Fee?" />

            <YesNoInput label="Subscription has Free Trial?" />
            <label className="block mt-4">
              <span className="text-gray-700">Tax Category</span>
              <SelectCategory
                options={[
                  { label: "Digital Goods or Services", value: "0" },
                  { label: "E-book", value: "1" },
                  { label: "SaaS", value: "3" },
                ]}
              />
            </label>
          </div>
        );
      case "leadMagnet":
        return (
          <div>
            <label className="block mt-4">
              <span className="text-gray-700">Price (required)</span>
              <Input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Tax Category</span>
              <SelectCategory
                options={[
                  { label: "Digital Goods or Services", value: "0" },
                  { label: "E-book", value: "1" },
                  { label: "SaaS", value: "3" },
                ]}
              />
            </label>
          </div>
        );
      case "payWhatYouWant":
        return (
          <div>
            <div className="py-4 space-y-2">
              <span className="text-gray-700">Price</span>
              <div className="flex items-center justify-between gap-4">
                <label className="block flex items-center gap-2 py-2">
                  <span className="text-gray-700">Min</span>
                  <Input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block flex items-center gap-2">
                  <span className="text-gray-700">Max.</span>
                  <Input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
              </div>
            </div>

            <label className="block mt-4">
              <span className="text-gray-700">Tax Category</span>
              <SelectCategory
                options={[
                  { label: "Digital Goods or Services", value: "0" },
                  { label: "E-book", value: "1" },
                  { label: "SaaS", value: "3" },
                ]}
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DetailContainer title="Pricing">
      <div className="py-4">
        <RadioGroup
          defaultValue="singlePayment"
          onValueChange={setSelectedOption}
          radioOptions={radioOptions}
        />
      </div>
      {renderInputs()}
    </DetailContainer>
  );
};

export default PricingSection;
