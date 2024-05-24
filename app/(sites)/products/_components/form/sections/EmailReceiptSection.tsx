import React from "react";
import DetailContainer from "../DetailContainer";

const EmailReceiptSection = () => {
  return (
    <DetailContainer title="Email Receipt">
      <p className="text-gray-600">
        After purchase, customers will receive an email receipt that includes a
        button to access your content.
      </p>
    </DetailContainer>
  );
};

export default EmailReceiptSection;
