import { AffiliateProps } from "@/components/affiliates/AffiliateList";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface AffiliateModalProps {
  affiliate: AffiliateProps | null;
  onClose: () => void;
}

const AffiliateModal: React.FC<AffiliateModalProps> = ({
  affiliate,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const router  = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!affiliate) return null;


  const handleBecomeAffiliate = () => {
    router.push('/settings/profile');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50">
      <div
        className="w-full md:w-1/3 h-full bg-white p-4 overflow-y-auto p-8"
        ref={modalRef}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 mr-2 rounded-full bg-gray-300">
              {/* <img
                src={affiliate.logo}
                alt={affiliate.name}
                className="h-16 w-16 mb-4"
              /> */}
            </div>
            <h2 className="text-xl font-medium">{affiliate.name}</h2>
          </div>
          <button className="text-gray-600" onClick={onClose}>
            x
          </button>
        </div>
        <div className="py-4 ">
          <div className="flex justify-between items-center">
            <a
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {affiliate.url}
            </a>

            <Button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleBecomeAffiliate}>
              Become an Affiliate
            </Button>
          </div>
          <div className="py-4 text-sm">
            <h2>About</h2>
            <p>
              daisyUI store provides professional templates made with Tailwind
              CSS and daisyUI. Developers need to create websites faster.
              daisyUI templates provide a starting point to build a page quickly
              using a pre-made template, while having the powerful theming and
              components from daisyUI and the customization power of Tailwind
              CSS.
            </p>
            <div className="flex justify-between items-center py-4">
              <span>Category:</span>
              <span>{affiliate.category}</span>
            </div>

            <div className="flex justify-between items-center py-4">
              <span>Commission Rate:</span>
              <span>{affiliate.commissionRate}%</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span>Status:</span>
              <span>{affiliate.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateModal;
