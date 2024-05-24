import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import React from "react";

const YesNoSwitch = ({ label, checked, onCheckedChange, description  }: { label: string, checked: boolean, onCheckedChange: (value: boolean) => void, description?: string }) => {
  return (
    <div className="my-4 space-y-2">
        <label className="block mt-4 flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <Switch className="mt-1" 
        checked={checked}
        onCheckedChange={onCheckedChange}/>
    </label>
    <p className="text-muted-foreground text-xs">{ description}</p>
    </div>
  );
};

export default YesNoSwitch;
