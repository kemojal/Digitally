import React from "react";
import DetailContainer from "../DetailContainer";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const EmailReceiptSection = () => {
  return (
    <DetailContainer title="Email Receipt">
      <p className="text-gray-600">
        After purchase, customers will receive an email receipt that includes a
        button to access your content.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Thank you note</label>
          <Textarea
            placeholder=""
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></Textarea>
          <small className="text-gray-500">
            Add a personalized thank you note above the button in email receipts
          </small>
        </div>

        {/* <div>
          <label className="block text-gray-700">View Order</label>
          <Input
            type="text"
            placeholder="Thank you for your order"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <small className="text-gray-500">
            Customize the button text in the email receipt. 36 chars max.
          </small>
        </div> */}

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
          <small className="text-gray-500">
            Customize the button link in the email receipt{" "}
            <Link href={""}>Help</Link>
          </small>
        </div>
      </div>
    </DetailContainer>
  );
};

export default EmailReceiptSection;
