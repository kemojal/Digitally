'use client';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRightIcon,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
const DynamicMarkdown = dynamic(() => import('markdown-parser-react'), {
  ssr: false,
});

let defaultData = {
  title: 'Wavy - Framer Creative Portfolio',
  description: `Jumpstart your design journey with "Wavy"

    Wavy is the perfect Framer template designed exclusively for designers and creative professionals. With its sleek, minimalist aesthetic, Wavy provides an elegant canvas to showcase your most compelling work. Whether you’re building your first portfolio or refreshing your personal brand, this template molds to your creative spirit.
    
    ## Features:
    
    - **Clean, One-Page Layout**: Keep your audience focused with a streamlined design that puts your work front and center.
      
    - **Smooth Micro Interactions**: Enhance your site’s feel with subtle animations that engage users without overwhelming them.
      
    - **Easy-to-Use CMS**: Effortlessly add and update projects with an intuitive content management system designed for quick edits and updates.
      
    - **Responsive Design**: Ensure your portfolio looks stunning on any device, from desktop to mobile.
    
    Wavy is more than just a template—it's a starting point for your creative expression. Set up quickly, update easily, and let your design do the talking!
    `,
  price: 9.99,
  image: 'novel.jpg',
  owner: {
    name: 'Kemo Jallow',
    avatar: null,
  },
  cta: {
    title: 'Want this for free?',
    description: 'Enter the email address we should send it to below.',
    ctaButtonText: 'Submit order',
  },
};
interface TemplateEditorProps {
  initialData: any;
  onDataChange: (newData: any) => void;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({
  initialData = defaultData,
  onDataChange,
}) => {
  const [data, setData] = useState(initialData);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCtaChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      cta: {
        ...prevData.cta,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    onDataChange(data);
    // Add logic to save or publish the template data here
  };

  return (
    <div className="w-full  min-h-screen">
      <div className="grid grid-cols-5 grid-rows-1 gap-4 h-full">
        <div className=" min-h-screen p-4 divide-y divide-gray-100">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1">
              Title
            </label>
            <Input
              id="title"
              name="title"
              value={data?.title ? data.title : ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={data?.description ? data?.description : ''}
              onChange={handleChange}
              rows={5}
              className="w-full"
            />
          </div>
          {/* Add more input fields for other data properties */}
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold mb-1">
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number" // assuming price is a number
              value={data?.price ? data.price : ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-semibold mb-1">
              Image (Upload)
            </label>
            {/* Assuming you have an input type file for image upload */}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // allowing only image files
              onChange={(e) => {
                // Assuming you handle image upload logic separately and update state accordingly
                const file = e.target.files[0];
                // Handle file upload logic, like uploading to server and updating state
              }}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ctaTitle" className="block font-semibold mb-1">
              CTA Title
            </label>
            <Input
              id="ctaTitle"
              name="cta.title"
              value={data?.cta?.title ? data.cta.title : ''}
              onChange={handleCtaChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ctaDescription"
              className="block font-semibold mb-1"
            >
              CTA Description
            </label>
            <Textarea
              id="ctaDescription"
              name="cta.description"
              value={data?.cta?.description ? data.cta.description : ''}
              onChange={handleCtaChange}
              rows={3} // adjust rows as needed
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ctaButtonText" className="block font-semibold mb-1">
              CTA Button Text
            </label>
            <Input
              id="ctaButtonText"
              name="cta.ctaButtonText"
              value={data?.cta?.ctaButtonText ? data.cta.ctaButtonText : ''}
              onChange={handleCtaChange}
              className="w-full"
            />
          </div>

          <div className="mt-4 w-full flex gap-1 ">
            <Button onClick={handleSave} className="w-full">
              Save
            </Button>
            <Button
              onClick={handleSave}
              className="w-10 bg-transparent text-gray-500 border-gray-200 border-[1px]"
            >
              <span>
                <ChevronLeft />
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full min-h-screen col-span-4">
          <div className="bg-[#F7F7F8] flex flex-col md:w-1/2 space-y-8 p-6 md:p-12">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                K
              </div>
              <span className="font-medium text-[#121217]">
                {data?.owner?.name}
              </span>
            </div>
            <div className="space-y-8 mx-auto max-w-[512px]">
              <div className="flex flex-col md:flex-row items-center">
                <div className="text-3xl font-semibold w-full">
                  {data.title}
                </div>
                <div className="ml-auto text-xl font-medium text-green-600">{`$${data.price}`}</div>
              </div>
              <div className="w-full h-[250px] bg-white rounded-lg flex items-center justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="max-h-full max-w-full rounded"
                />
              </div>
              <div className="prose max-w-none text-sm leading-7 relative">
                <div
                  className={`z-[1px]  ${
                    showFullDescription ? 'line-clamp-none' : 'line-clamp-6'
                  }`}
                >
                  <DynamicMarkdown
                    content={
                      showFullDescription
                        ? data?.description
                        : data.description.split('\n').slice(0, 3).join('\n')
                    }
                    // options={parseOptions}
                  />
                </div>

                <div
                  className={`pointer-events-none  flex items-end pb-2  z-50 transition duration-150 ease-out hover:ease-in ${
                    showFullDescription
                      ? 'bg-transparent'
                      : ' absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-[#F7F7F8] to-transparent '
                  }`}
                >
                  <div className="relative">
                    <button
                      onClick={toggleDescription}
                      className="text-gray-500 hover:underline mt-2 block z-50 cursor-pointer pointer-events-auto"
                    >
                      <div className="flex gap-1 items-center">
                        {showFullDescription ? (
                          <>
                            See less <ChevronUp className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            See more <ChevronDown className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white md:w-1/2 flex justify-center p-8 md:px-16 lg:pt-28">
            <div className="w-full space-y-8 max-w-lg">
              <h2 className="text-2xl font-semibold mb-1">{data.cta.title}</h2>
              <p className="text-base mb-5">{data.cta.description}</p>
              <Input placeholder="e.g johndoe@email.com" />
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white flex items-center gap-2"
              >
                <AnimatedShinyText className="text-white w-auto flex items-center gap-2">
                  ✨{data.cta.ctaButtonText}
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Button>
              <div className="flex items-center justify-center rounded-b bg-gray-50 text-center text-xs text-gray-500 mt-4 rounded p-2 py-4">
                <div className="flex items-center">
                  <svg
                    className="mr-1 h-3 w-3 fill-current text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 7.75C8.5 5.94398 9.88381 4.5 12 4.5C14.1162 4.5 15.5 5.94398 15.5 7.75V9H8.5V7.75ZM7 9V7.75C7 5.05602 9.11619 3 12 3C14.8838 3 17 5.05602 17 7.75V9C18.105 9 19 9.895 19 11V19C19 20.105 18.105 21 17 21H7C5.895 21 5 20.105 5 19V11C5 9.895 5.895 9 7 9ZM13.0607 14.8107C12.9656 14.9057 12.8611 14.9853 12.75 15.0495V17.09C12.75 17.5042 12.4142 17.84 12 17.84C11.5858 17.84 11.25 17.5042 11.25 17.09V15.0495C11.1389 14.9853 11.0344 14.9057 10.9393 14.8107C10.3536 14.2249 10.3536 13.2751 10.9393 12.6893C11.5251 12.1036 12.4749 12.1036 13.0607 12.6893C13.6464 13.2751 13.6464 14.2249 13.0607 14.8107Z"
                      fill="#D3D3D6"
                    ></path>
                  </svg>
                  Payments are secure and encrypted
                </div>
              </div>
              <footer className="text-center text-sm text-gray-500 mt-8">
                Powered by Digitaly
                <div className="mt-4">
                  <Link
                    href="/terms"
                    className="text-blue-500 hover:underline mx-2"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-blue-500 hover:underline mx-2"
                  >
                    Privacy
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <Button onClick={handleSave}>Save</Button>
      </div> */}
    </div>
  );
};

export default TemplateEditor;
