// components/PreviewModal.tsx
import { FC, ReactNode } from "react";
import Image from "next/image";
import ModalDialogue from "@/components/ModalDialogue";

interface PreviewModalProps {
  triggerButton: ReactNode;
  template: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    owner: {
      name: string;
      avatar: string | null;
    };
    cta: {
      title: string;
      description: string;
      ctaButtonText: string;
    };
  };
  footerButton?: ReactNode;
}

const PreviewModal: FC<PreviewModalProps> = ({
  triggerButton,
  footerButton,
  template,
}) => {
  return (
    <ModalDialogue
      triggerButton={triggerButton}
      title={template.name}
      description={template?.description}
      footerButton={footerButton}
    >
      <div className="flex flex-col w-full h-full ">
        <h2 id="dialog-title" className="text-2xl font-bold mb-4">
          {template?.name}
        </h2>
        <div className="relative w-full h-[300px] mb-4">
          <Image
            src={`/${template?.image}`}
            alt={template?.name}
            layout="fill"
            objectFit="cover"
            className="rounded w-full"
          />
        </div>
        <p className="mb-4">{template.description}</p>
        <p className="text-gray-800 font-semibold text-lg mb-4">
          {template.price > 0 ? `Price: $${template.price}` : "Free"}
        </p>
        <div className="flex items-center mb-6">
          {template.owner.avatar ? (
            <img
              src={template.owner.avatar}
              alt={template.owner.name}
              className="w-10 h-10 rounded-full mr-3 shadow-sm"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <span className="text-gray-400 font-bold">
                {template.owner.name.charAt(0)}
              </span>
            </div>
          )}
          <p className="text-gray-700 font-medium">{template.owner.name}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-2">{template.cta.title}</h3>
          <p className="text-gray-600 mb-4">{template.cta.description}</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
            {template.cta.ctaButtonText}
          </button>
        </div>
      </div>
    </ModalDialogue>
  );
};

export default PreviewModal;
