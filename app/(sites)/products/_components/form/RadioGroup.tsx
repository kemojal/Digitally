import { Label } from "@/components/ui/label";
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import React from "react";

interface RadioGroupProps {
  defaultValue: string;
  onValueChange: (value: string) => void;
  radioOptions: OptionProps[];
}
interface OptionProps {
  value: string;
  label: string;
}
const RadioGroup = ({ defaultValue, onValueChange, radioOptions }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className="grid grid-cols-2 gap-4"
    >
      {radioOptions.map((option: OptionProps) => (
        <div className="flex items-center space-x-2" key={option.value}>
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroupPrimitive>
  );
};

export default RadioGroup;
