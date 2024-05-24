import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed z-50 flex flex-col items-center justify-center w-screen h-screen gap-2 bg-white ">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default PageLoader;
