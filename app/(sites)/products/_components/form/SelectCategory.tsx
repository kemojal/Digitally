import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SelectCategory = ({ options }) => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
      {options.map((option) => (
        <option key={option.value} >
          
          <SelectItem value={option.value} >{option.label}</SelectItem>
        </option>
      ))}
        {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
