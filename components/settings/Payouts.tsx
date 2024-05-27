// components/settings/Payouts.tsx
"use client";
// components/settings/Payouts.tsx
import React, { useState } from "react";
import BankAccountSettingsModal from "@/components/settings/BankAccount/BankAccountSettingsModal";
import PayPalSettingsModal from "@/components/settings/PayPalSettingsModal";
import { Button } from "../ui/button";

const Payouts: React.FC = () => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showPayPalModal, setShowPayPalModal] = useState(false);

  return (
    <div className="container mx-auto py-8 px-0">
      {/* <h1 className="text-3xl font-bold mb-4">Payouts</h1> */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          {/* <h2 className="text-lg font-semibold mr-2">Payout settings</h2> */}
          <p className="text-sm text-gray-500">
            Manage payout settings for your account
          </p>
        </div>
        {/* Add your payout settings components here if needed */}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-semibold mr-2">Payout methods</h2>
          <p className="text-sm text-gray-500">
            Select a default payout method
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="p-4 border rounded-xl cursor-pointer hover:border-blue-500 flex items-center justify-between w-1/2 text-sm"
            onClick={() => setShowBankModal(true)}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">Bank Account</h3>
              <p className="text-sm text-gray-500 mb-4">
                Connect your bank account
              </p>
            </div>
            <Button
              variant={"outline"}
              size={"sm"}
              className=" hover:bg-blue-500  py-2 px-4 rounded-xl hover:text-white"
            >
              Connect
            </Button>
          </div>
          <div
            className="p-4 border rounded-xl cursor-pointer hover:border-blue-500 flex items-center justify-between w-1/2 text-sm"
            onClick={() => setShowPayPalModal(true)}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">PayPal</h3>
              <p className="text-sm text-gray-500 mb-4">
                Connect your PayPal account
              </p>
            </div>
            <Button
              variant={"outline"}
              size={"sm"}
              className=" hover:bg-blue-500  py-2 px-4 rounded-xl hover:text-white"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
      {showBankModal && (
        <BankAccountSettingsModal onClose={() => setShowBankModal(false)} />
      )}
      {showPayPalModal && (
        <PayPalSettingsModal onClose={() => setShowPayPalModal(false)} />
      )}
    </div>
  );
};

export default Payouts;
