"use client";

import Payouts from "@/components/settings/Payouts";
import ProfileForm from "@/components/settings/ProfileForm";
import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Profile" | "Payouts">("Profile");

  return (
    <div className="container mx-auto py-8 text-sm">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="border-b mb-4">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "Profile"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("Profile")}
          >
            Profile
          </button>
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "Payouts"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("Payouts")}
          >
            Payouts
          </button>
        </nav>
      </div>
      {activeTab === "Profile" ? <ProfileForm /> : <Payouts />}
    </div>
  );
};

export default ProfilePage;
