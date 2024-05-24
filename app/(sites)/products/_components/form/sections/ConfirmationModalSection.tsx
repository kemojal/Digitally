import React from "react";
import DetailContainer from "../DetailContainer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ConfirmationModalSection = () => {
  return (
    <DetailContainer title="Confirmation Modal">
      <p className="text-gray-600">
        After purchase, customers will see a confirmation modal that includes a
        thank you message and a button to access your content.
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <Input
            type="text"
            placeholder="Thank you for your order"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <small className="text-gray-500">
            Customize the title in the purchase confirmation modal
          </small>
        </div>

        <div>
          <label className="block text-gray-700">Message</label>
          <Textarea
            placeholder="Woohoo! Your payment was successful, and your order is complete. A receipt is on its way to your inbox."
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></Textarea>
          <small className="text-gray-500">
            Customize the message in the purchase confirmation modal
          </small>
        </div>

        <div>
          <label className="block text-gray-700">Button text</label>
          <Input
            type="text"
            placeholder="View Order"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <small className="text-gray-500">
            Customize the button text in the purchase confirmation modal. 36
            chars max.
          </small>
        </div>

        <div>
          <label className="block text-gray-700">Button link</label>
          <Input
            type="text"
            placeholder="digitally.com/orders"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </DetailContainer>
  );
};

export default ConfirmationModalSection;
