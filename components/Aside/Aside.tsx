"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProfileModal from "./ProfileModal";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/analytics",
    label: "Dashboard",
    icon: (
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/products",
    label: "Products",
    icon: (
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    href: "/orders",
    label: "Orders",
    icon: (
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h18M3 7h18M3 11h18m-9 4h9m-9 4h9"
        />
      </svg>
    ),
  },
  {
    href: "/emails",
    label: "Emails",
    icon: (
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 12H8m0 0l4-4m-4 4l4 4m-4-4h12m0 0V8m0 8v-4"
        />
      </svg>
    ),
  },
  {
    href: "/affiliates",
    label: "Affiliates",
    icon: (
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8m-6-2h.01M17 21h.01m-6-6h.01M5 5h.01M12 12h.01M19 19h.01"
        />
      </svg>
    ),
  },
];

const Aside: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const pathname = usePathname();

  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <aside className="bg-white text-gray-800 lg:w-48 xl:w-64 h-screen fixed left-0 top-0 overflow-y-auto border-r-[1px] border-gray-50">
      <div className="flex flex-col items-center space-y-4 ">
        <div className="flex  w-full px-4 py-2">
          <Link href="/" className="text-xl font-bold">
            Digitaly
          </Link>
        </div>
        <nav className="py-6">
          <ul>
            {links.map(({ href, label, icon }) => (
              <li
                key={href}
                className="px-4 py-2 hover:bg-gray-100 active:bg-blue-200"
              >
                <Link href={href} className="flex items-center">
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 w-full p-4 flex items-center border-t-[1px] border-gray-100">
        <div
          className="w-10 h-10 rounded-full bg-green-500 cursor pointer"
          onClick={handleProfileClick}
        >
          {/* <img
          src="/path/to/avatar.jpg" // Replace with actual path to the avatar image
          alt="Profile"
          className="h-10 w-10 rounded-full cursor-pointer"
          onClick={handleProfileClick}
        /> */}
          <span className="w-full h-full flex items-center justify-center text-white">
            K
          </span>
        </div>
      </div>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </aside>
  );
};

export default Aside;
