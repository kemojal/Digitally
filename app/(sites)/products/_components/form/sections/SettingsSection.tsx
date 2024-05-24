import React, { useState } from "react";
import DetailContainer from "../DetailContainer";
import YesNoSwitch from "../YesNoSwitch";

const SettingsSection = () => {
  const [generateLicenseKeys, setGenerateLicenseKeys] = useState(false);
  const [displayOnStorefront, setDisplayOnStorefront] = useState(true);

  const handleLicenseKeyToggle = () => {
    setGenerateLicenseKeys(!generateLicenseKeys);
  };

  const handleStorefrontToggle = () => {
    setDisplayOnStorefront(!displayOnStorefront);
  };
  return (
    <DetailContainer title="Settings">
      <YesNoSwitch
        label="Generate license keys"
        checked={generateLicenseKeys}
        onCheckedChange={handleLicenseKeyToggle}
        description=" Issue each customer a unique license key after purchase"
      />

      <YesNoSwitch
        label="Display product on storefront"
        checked={displayOnStorefront}
        onCheckedChange={handleStorefrontToggle}
        description="Show this product on your Digitally storefront"
      />
    </DetailContainer>
  );
};

export default SettingsSection;
