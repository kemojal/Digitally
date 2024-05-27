// components/settings/PayPalSettingsModal.tsx
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Helplink from "./BankAccount/_components/Helplink";

interface PayPalSettingsModalProps {
  onClose: () => void;
}

const PayPalSettingsModal: React.FC<PayPalSettingsModalProps> = ({
  onClose,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    onClose(); // Close the modal after form submission
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="absolute w-2/6 right-0 h-full bg-white p-6">
        <div className="flex justify-between items-center border-b-[1px] border-gray-50">
          <h2 className="text-sm font-medium mb-4">PayPal Settings</h2>
          <Button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 w-6 h-6 rounded-xl hover:text-white text-sm"
          >
            x
          </Button>
        </div>

        <Helplink
          description=" Connect your PayPal account to receive payouts"
          actionTitle="Help"
          actionLink="help/getting-started/getting-paid"
        />
        <form onSubmit={handleSubmit} className="py-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              PayPal Email
            </label>
            <Input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              className="bg-gray-200 text-gray-800 py-2 px-4 mr-2 rounded hover:text-white text-sm"
              onClick={onClose}
            >
              cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded text-sm"
            >
              Connect your Paypal account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayPalSettingsModal;
