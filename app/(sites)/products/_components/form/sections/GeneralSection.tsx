import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import DetailContainer from "../DetailContainer";

const GeneralSection = () => {
  return (
    <DetailContainer title="General">
      <label className="block">
        <span className="text-gray-700">
          Name <span className="text-red-500">*</span>
        </span>
        <Input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter product name"
          required
        />
        <small className="text-muted-foreground text-xs mt-2 leading-3">
          Give your product a short and clear name. 50-60 characters is the
          recommended length for search engines.
        </small>
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Description</span>
        <Textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={3}
          placeholder="Enter product description"
        ></Textarea>
        <small className="text-muted-foreground text-xs mt-2 leading-3">
          Give your product a short and clear description. 120-160 characters is
          the recommended length for search engines.
        </small>
      </label>
    </DetailContainer>
  );
};

export default GeneralSection;
