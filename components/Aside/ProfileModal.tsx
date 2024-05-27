"use client";
import React from "react";
import Link from "next/link";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 left-4 bg-white rounded-md shadow-lg py-2 w-[232px] p-4 border-[1px]">
      <Link
        href="/settings/profile"
        className="block px-4 py-2 hover:bg-gray-600"
      >
        K-stored
      </Link>
      <Link
        href="/settings/profile"
        className="block px-4 py-2 hover:bg-gray-600"
      >
        Settings
      </Link>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
        onClick={() => {
          // Handle Logout
          onClose();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileModal;
