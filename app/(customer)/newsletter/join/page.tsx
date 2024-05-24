"use client";
import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const JoinNewsletterPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Join Our Newsletter</title>
        <meta
          name="description"
          content="Subscribe to our newsletter to get the latest updates."
        />
      </Head>
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center fixed top-0 left-0 w-full h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <RetroGrid bg-red-500 />

            <div>
              {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                Retro Grid
              </span> */}
              <div>
                <div className="w-10 h-10 rounded-full bg-gray-300">
                  {/* <img
              className="mx-auto h-12 w-auto"
              src="/logo.png"
              alt="Company Logo"
            /> */}
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 flex flex-col">
                  <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Join
                  </span>
                  <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Our Newsletter
                  </span>
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Subscribe to get the latest updates and offers.
                </p>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {submitted ? "Thank You!" : "Join Now"}
                  </Button>
                </div>
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
                    Your info is safe with us.
                  </div>
                </div>
              </form>
              {submitted && (
                <div className="mt-4 text-center text-green-500">
                  Thank you for subscribing to our newsletter!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNewsletterPage;
