import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const YesNoInput = ({ label }: { label: string }) => {
  return (
    <label className="block mt-4 flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <Checkbox className="mt-1" />
    </label>
  );
};

export default YesNoInput;
