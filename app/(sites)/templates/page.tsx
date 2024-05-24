import { Button } from "@/components/ui/button";
import { templates } from "@/data/templates";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ExternalLink,
  Eye,
} from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const TemplatesPage: NextPage = () => {
  return (
    <div className="container mx-auto py-8 z-50  min-h-screen ">
      <div className="flex  text-xs font-medium text-green-500 mb-8">
        <Link
          href={"/products"}
          className="cursor-pointer hover:text-gray-700 flex items-center"
        >
          <span>
            <ArrowLeftIcon className="h-4 w-4" />
          </span>
          <span>products</span>
        </Link>

        <span>
          <ChevronLeftIcon className="h-4 w-4" />
        </span>
        <Link href="/" className="cursor-pointer hover:text-gray-700">
          <span>templates</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Select a Template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {templates.map((template) => (
          <div
            key={template.id}
            // href={`/templates/${template.id}`}
            className="group block   transition-shadow duration-300  cursor-pointer transform hover:-translate-y-1  transition-transform duration-300 p-2.5 lg:px-5  bg-white"
          >
            <div className="relative w-full h-[230px] bg-gray-50 rounded flex justify-center justify-center  overflow-hidden  bg-gray-50 px-2 pt-2 rounded-t-xl   ">
              <div className=" rounded-t-xl overflow-hidden   flex items-end justify-center">
                <Image
                  // src={`/product/${template.image}`}
                  // src={`/product/bg_1.png`}
                  src={"/bg_2.png"}
                  alt={template.name}
                  className=" w-full h-full object-cover border-[1px]  rounded-t-xl"
                  width={200}
                  height={200}
                />
              </div>
              <div className="absolute hidden group-hover:block transition-all hover:-translate-y-1 flex items-center justify-center w-full h-full z-10">
                <div className="w-full h-full  flex items-center justify-center">
                  <Button className="  rounded-full text-sm flex items-center justify-center h-8 text-[#077272] hover:text-white hover:bg-[#065656] bg-white border-[1px] border-[#077272] ">
                    <span>
                      <Eye className="h-4 w-4" />
                    </span>
                    <span className="text-xs ml-1 mr-3">preview</span>
                    <span>
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white dark:from-background" />
            </div>
            <div className="relative z-20 mt-[-10px]">
              <h3 className="text-lg font-medium  mt-[-10px]">{template.name}</h3>
              <p className="text-gray-600 line-clamp-3 overflow-hidden mb-4 text-sm line-height-md min-h-[2.5rem] max-h-[2.5rem] ">
                {template.description}
              </p>
              {/* <p className="text-gray-800 font-semibold text-lg mb-4">
              {template.price > 0 ? `Price: $${template.price}` : "Free"}
            </p> */}
              {/* <div className="flex items-center mb-6">
              {template.owner.avatar ? (
                <img
                  src={template.owner.avatar}
                  alt={template.owner.name}
                  className="w-10 h-10 rounded-full mr-3 shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-gray-400 font-bold">
                    {template.owner.name.charAt(0)}
                  </span>
                </div>
              )}
              <p className="text-gray-700 font-medium">{template.owner.name}</p>
            </div> */}
              {/* <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
              <h3 className="text-lg font-semibold mb-2">
                {template.cta.title}
              </h3>
              <p className="text-gray-600 mb-4">{template.cta.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                {template.cta.ctaButtonText}
              </button>
            </div> */}
            </div>
            <Link
              className="justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-xl px-8 w-full bg-transparent border-[1px] border-gray-300 flex items-center gap-2 hover:text-white"
              href={`/templates/${template.id}`}
            >
              Use template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
