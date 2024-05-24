import React from "react";
import DetailContainer from "../DetailContainer";

const ConfirmationModalSection = () => {
  return (
    <DetailContainer title="Confirmation Modal">
      <p className="text-gray-600">
        After purchase, customers will see a confirmation modal that includes a
        thank you message and a button to access your content.
      </p>
    </DetailContainer>
  );
};

export default ConfirmationModalSection;
