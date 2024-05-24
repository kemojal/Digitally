import React, { useState } from "react";
import { X, HelpCircle, ChevronDown } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";

const NewProductModal2 = ({ isOpen, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState({
    general: false,
    pricing: true,
    media: true,
    files: true,
    variant: true,
    settings: true,
    confirmationModal: true,
    emailReceipt: true,
  });

  const toggleCollapse = (section) => {
    setIsCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <div className="fixed right-0 top-0 bottom-0 w-[600px] bg-white p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Product</h2>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center mb-4">
          <p className="text-gray-600">Add a new product to your store ·</p>
          <a href="#" className="text-indigo-600 ml-2 flex items-center">
            Help <HelpCircle className="ml-1 h-4 w-4" />
          </a>
        </div>
        {/* General section */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("general")}
          >
            <h3 className="text-lg font-semibold">General</h3>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isCollapsed.general ? "rotate-180" : ""
              }`}
            />
          </div>
          {!isCollapsed.general && (
            <div className="mt-2 bg-gray-100 p-4">
              {/* General form fields */}
            </div>
          )}
        </div>
        {/* Other sections */}
      </div>
    </Dialog>
  );
};

export default NewProductModal2;