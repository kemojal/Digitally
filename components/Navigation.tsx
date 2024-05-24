"use client";
import React from "react";
import { Search, Bell, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navigation: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="bg-white xl:ml-64 lg:ml-48 flex  border-b-[1px] border-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <h1 className="text-xl font-bold mb-4">Products</h1>
          </div>

          <div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Search button with only an icon background */}
              <Button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <Search className="h-6 w-6 text-gray-600" />
              </Button>

              {/* Bell notification with only an icon transparent background */}
              <Button className="p-2 rounded-full hover:bg-gray-200">
                <Bell className="h-6 w-6 text-gray-600" />
              </Button>

              {/* Add button with only a plus icon with a purple background */}
              <Button
                className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 "
                onClick={() => {
                  router.push("/templates");
                }}
              >
                <Plus className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
