import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const Helplink = ({
description,
actionTitle, 
actionLink
}: {description: string, actionTitle: string, actionLink: string}) => {
  return (
    <h6 className="text-sm my-4">
      {description}
      <Link
        href={actionLink}
        className="flex gap-1 items-center text-blue-500 cursor-pointer"
      >
        {actionTitle}
        <span>
          <ExternalLink className="w-4 h-4" />
        </span>
      </Link>
    </h6>
  );
};

export default Helplink;
