// components/settings/BankAccountSettingsStep.tsx
import { Button } from "@/components/ui/button";
import React from "react";

interface BankAccountSettingsStepProps {
  country: string;
  onDisconnect: () => void;
}

const BankAccountSettingsStep: React.FC<BankAccountSettingsStepProps> = ({
  country,
  onDisconnect,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Bank Account Settings</h2>
      <p>Country: {country}</p>
      <div className="flex justify-between mt-4 flex-wrap flex-col space-y-2">
        <Button
          className="bg-green-500 text-white py-2 px-4 rounded "
          onClick={() =>
            (window.location.href = "https://stripe.com/connect_account")
          } // Replace with actual Stripe link
        >
          Set up your bank account
        </Button>
        <Button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onDisconnect}
        >
          Disconnect your bank account
        </Button>
      </div>
    </div>
  );
};

export default BankAccountSettingsStep;
