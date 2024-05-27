"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GeneralSection from "./form/sections/GeneralSection";
import PricingSection from "./form/sections/PricingSection";
import EmailReceiptSection from "./form/sections/EmailReceiptSection";
import ConfirmationModalSection from "./form/sections/ConfirmationModalSection";
import SettingsSection from "./form/sections/SettingsSection";
import VariantSection from "./form/sections/VariantSection";
import FilesSection from "./form/sections/FilesSection";
import MediaSection from "./form/sections/MediaSection";
import ConfirmCloseModal from "./ConfirmCloseModal";

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleFormChange = () => {
    setIsFormDirty(true);
  };

  const handleAttemptClose = () => {
    setIsConfirmOpen(true);
    // if (isFormDirty) {
    //   setIsConfirmOpen(true);
    // } else {
    //   onClose();
    // }
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleAttemptClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50">
      <div className="w-full md:w-1/3  h-full bg-green-100 relative">
        <div
          ref={modalRef}
          className="bg-white w-full  h-[calc(100vh-64px)] p-4 overflow-y-auto overflow-x-hidden"
        >
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-xl font-bold">Add Product</h2>
            <Button className="text-gray-600" onClick={handleAttemptClose}>
              x
            </Button>
          </div>
          <div>
            <p>
              Add a new product to your store ·{" "}
              <a href="#" className="text-blue-500 flex items-center">
                Help <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </p>
            <form className="flex flex-col gap-0" onChange={handleFormChange}>
              {/* General Section */}
              <GeneralSection />
              {/* Pricing Section */}
              <PricingSection />
              {/* Media Section */}
              <MediaSection />
              {/* Files Section */}
              <FilesSection />
              {/* Variant Section */}
              <VariantSection />
              {/* Settings Section */}
              <SettingsSection />
              {/* Confirmation Modal Section */}
              <ConfirmationModalSection />
              {/* Email Receipt Section */}
              <EmailReceiptSection />
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 flex justify-between items-center space-x-2">
          <Button variant="outline" className="" onClick={onClose}>
            Save as draft
          </Button>
          <Button className="w-3/4">Publish product </Button>
        </div>
      </div>

      <ConfirmCloseModal
        isOpen={isConfirmOpen}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmClose}
      />
    </div>
  );
};

export default NewProductModal;
