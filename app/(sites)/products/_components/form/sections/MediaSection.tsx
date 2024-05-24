import React from "react";
import DetailContainer from "../DetailContainer";

const MediaSection = () => {
  const handleDrop = (e) => {
    e.preventDefault();
    // Handle file drop logic here
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <DetailContainer title="Media">
      <div
        className="border-2 border-dashed border-gray-300 rounded-md p-8 flex flex-col items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <svg
          className="w-8 h-8 text-gray-400 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className="text-gray-500 text-center mb-2 text-xs">
          Drop your images here, or{" "}
          <label className="text-indigo-500 cursor-pointer">
            click to browse
          </label>
          . 1600 x 1200 (4:3) recommended, up to 10MB each.
        </p>
      </div>
      <p className="text-gray-500 text-center text-xs mt-2">
        Add up to 10 images to your product. Used to represent your product
        during checkout, in email, social sharing and more.
      </p>
    </DetailContainer>
  );
};

export default MediaSection;
