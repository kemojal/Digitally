// components/settings/ProfileForm.tsx
"use client";

import React, { useState } from "react";

const ProfileForm: React.FC = () => {
  const [websites, setWebsites] = useState([""]);
  const [socialMedia, setSocialMedia] = useState([""]);
  const [websiteVisitors, setWebsiteVisitors] = useState("");
  const [emailSubscribers, setEmailSubscribers] = useState("");

  const handleAddWebsite = () => {
    setWebsites([...websites, ""]);
  };

  const handleRemoveWebsite = (index: number) => {
    const newWebsites = websites.filter((_, i) => i !== index);
    setWebsites(newWebsites);
  };

  const handleWebsiteChange = (index: number, value: string) => {
    const newWebsites = websites.map((website, i) =>
      i === index ? value : website
    );
    setWebsites(newWebsites);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, ""]);
  };

  const handleRemoveSocialMedia = (index: number) => {
    const newSocialMedia = socialMedia.filter((_, i) => i !== index);
    setSocialMedia(newSocialMedia);
  };

  const handleSocialMediaChange = (index: number, value: string) => {
    const newSocialMedia = socialMedia.map((social, i) =>
      i === index ? value : social
    );
    setSocialMedia(newSocialMedia);
  };

  return (
    <form className="space-y-8">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
        <div>
          <h2 className="text-lg font-semibold">Complete your profile</h2>
          <p className="text-sm text-gray-500">
            Submit your profile to activate your affiliate account.
          </p>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit profile for approval
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio *</label>
        <p className="text-sm text-gray-500">
          Let store owners know who you are and how you promote affiliate
          products. Be detailed, and include your websites, social profiles,
          audience size, engagement rates, etc. Your bio will be sent to store
          owners when applying for their program.
        </p>
        <textarea
          className="mt-2 border border-gray-300 rounded-lg w-full p-2"
          placeholder="Tell us a bit about yourself and your audience, minimum 50 characters"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Website(s) *
        </label>
        <p className="text-sm text-gray-500">
          List any websites you’ll be using to promote products
        </p>
        {websites.map((website, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="url"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={website}
              onChange={(e) => handleWebsiteChange(index, e.target.value)}
            />
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => handleRemoveWebsite(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-2 text-blue-500"
          onClick={handleAddWebsite}
        >
          Add another website
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Social media *
        </label>
        <p className="text-sm text-gray-500">
          List any social media profiles you use
        </p>
        {socialMedia.map((social, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="url"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={social}
              onChange={(e) => handleSocialMediaChange(index, e.target.value)}
            />
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => handleRemoveSocialMedia(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-2 text-blue-500"
          onClick={handleAddSocialMedia}
        >
          Add another social media profile
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Website visitors *
        </label>
        <p className="text-sm text-gray-500">
          How many monthly visitors do your websites receive?
        </p>
        <select
          value={websiteVisitors}
          onChange={(e) => setWebsiteVisitors(e.target.value)}
          className="mt-2 border border-gray-300 rounded-lg w-full p-2"
        >
          <option value="">Select...</option>
          <option value="0-1k">0-1k</option>
          <option value="1k-10k">1k-10k</option>
          <option value="10k-50k">10k-50k</option>
          <option value="50k-100k">50k-100k</option>
          <option value="100k+">100k+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email subscribers *
        </label>
        <p className="text-sm text-gray-500">
          How many email subscribers do you have?
        </p>
        <select
          value={emailSubscribers}
          onChange={(e) => setEmailSubscribers(e.target.value)}
          className="mt-2 border border-gray-300 rounded-lg w-full p-2"
        >
          <option value="">Select...</option>
          <option value="0-500">0-500</option>
          <option value="500-1k">500-1k</option>
          <option value="1k-5k">1k-5k</option>
          <option value="5k-10k">5k-10k</option>
          <option value="10k+">10k+</option>
        </select>
      </div>
    </form>
  );
};

export default ProfileForm;
