// components/settings/BankAccountSettingsModal.tsx
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import SelectCountryStep from "./steps/SelectCountryStep";
import BankAccountSettingsStep from "./steps/BankAccountSettingsStep";
import ConfirmDisconnectModal from "./_components/ConfirmDisconnectModal";
import { useToast } from "@/components/ui/use-toast";
import Helplink from "./_components/Helplink";

interface BankAccountSettingsModalProps {
  onClose: () => void;
}

const BankAccountSettingsModal: React.FC<BankAccountSettingsModalProps> = ({
  onClose,
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [showToast, setShowToast] = useState(false);

  const { toast } = useToast();

  const handleNextStep = () => {
    if (selectedCountry) {
      setCurrentStep(2);
    }
  };

  const handleDisconnect = () => {
    setShowConfirmModal(false);
    // setShowToast(true);
    toast({
      // title: "Scheduled: Catch up",
      description: " Payout method disconnected",
    });

    onClose();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    onClose(); // Close the modal after form submission
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="absolute w-1/4 right-0 h-full bg-white p-6">
        <div className="flex justify-between items-center border-b-[1px] border-gray-50">
          <h2 className="text-sm font-medium mb-4">Bank Account Settings</h2>
          <Button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 w-6 h-6 rounded-xl hover:text-white text-sm"
          >
            x
          </Button>
        </div>

        <Helplink
          description=" Connect your bank account to receive payouts"
          actionTitle="Help"
          actionLink="help/getting-started/getting-paid"
        />
        {/* <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Account Number
            </label>
            <Input
              type="text"
              id="accountNumber"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="routingNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Routing Number
            </label>
            <Input
              type="text"
              id="routingNumber"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              className="bg-gray-200 text-gray-800 py-2 px-4 mr-2 rounded hover:text-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Connect your bank account
            </Button>
          </div>
        </form> */}
        <div className="py-8">
          {currentStep === 1 && (
            <SelectCountryStep
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <BankAccountSettingsStep
              country={selectedCountry}
              onDisconnect={() => setShowConfirmModal(true)}
            />
          )}
        </div>
      </div>

      {showConfirmModal && (
        <ConfirmDisconnectModal
          onConfirm={handleDisconnect}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}

      {/* {showToast && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded z-50">
          Payout method disconnected
        </div>
      )} */}
    </div>
  );
};

export default BankAccountSettingsModal;
