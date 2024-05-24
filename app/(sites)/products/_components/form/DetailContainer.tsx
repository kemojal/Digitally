import { CircleCheck } from "lucide-react";
import React from "react";

interface DetailContainerProps {
  children: React.ReactNode;
  title: string;
}
const DetailContainer = ({ children, title }: DetailContainerProps) => {
  return (
    <details className="my-1">
      <summary className=" bg-[#f1f1f3] px-4 py-2 rounded-md text-sm font-medium text-muted-foreground">
        <div className="w-full flex justify-between items-center">
          <span>{title}</span>
          <span>
            <CircleCheck className="w-4 h-4 " />
          </span>
        </div>
      </summary>
      <div className="mt-2 text-sm p-2">{children}</div>
    </details>
  );
};

export default DetailContainer;
