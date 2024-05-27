"use client";
import AffiliateList, { AffiliateProps } from "@/components/affiliates/AffiliateList";
import React, { useState } from "react";
import AffiliateModal from "./_components/AffiliateModal";

const affiliatesData = [
  {
    id: 1,
    logo: "logo1.png",
    name: "Samb",
    url: "samb.lemonsqueezy.com",
    category: "Business",
    commissionRate: 10.0,
    status: "Active",
  },
  {
    id: 2,
    logo: "logo2.png",
    name: "Buunto",
    url: "buunto.lemonsqueezy.com",
    category: "Design",
    commissionRate: 15.0,
    status: "Inactive",
  },
  {
    id: 3,
    logo: "logo3.png",
    name: "daisyUI ",
    url: "daisyui.lemonsqueezy.com",
    category: "Education",
    commissionRate: 12.5,
    status: "Active",
  },
  {
    id: 4,
    logo: "logo4.png",
    name: " SaveDay",
    url: "http://emilydavis.com",
    category: "Health & Fitness",
    commissionRate: 8.0,
    status: "Pending",
  },
  {
    id: 5,
    logo: "logo5.png",
    name: "David Wilson",
    url: "http://davidwilson.com",
    category: "SaaS",
    commissionRate: 10.0,
    status: "Active",
  },
];

const categories = [
  "3D",
  "Audio",
  "Business",
  "Design",
  "Art",
  "Education",
  "Fiction",
  "Film & Video",
  "SaaS",
  "Health & Fitness",
  "Gaming",
  "Music & Sound",
  "Photography",
  "Self improvement",
  "Software Development",
  "Publishing",
];
const statuses = ["All programs", "Active", "Inactive", "Pending"];

// Assuming you have a function to fetch the affiliates from an API or database
const fetchAffiliates = async () => {
  // Fetch affiliates and return them
};



const AffiliatesPage: React.FC = () => {
  const [affiliates, setAffiliates] = useState(affiliatesData);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const affiliates = await fetchAffiliates();
  //     setAffiliates(affiliates);
  //   };
  //   fetchData();
  // }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All programs");


  const [selectedAffiliate, setSelectedAffiliate] = useState<AffiliateProps | null>(null);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const filteredAffiliates = affiliates.filter((affiliate) => {
    return (
      (selectedCategory === "All" || affiliate.category === selectedCategory) &&
      (selectedStatus === "All programs" ||
        affiliate.status === selectedStatus) &&
      affiliate.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });


  const handleRowClick = (affiliate: AffiliateProps) => {
    setSelectedAffiliate(affiliate);
  };

  const handleCloseModal = () => {
    setSelectedAffiliate(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Affiliates</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by program name"
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg py-2 px-4 w-80"
          />
          <svg
            className="absolute top-2 right-3 h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM21 21l-4.35-4.35"
            />
          </svg>
        </div>
        <div className="flex space-x-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
      <AffiliateList affiliates={filteredAffiliates} onRowClick={handleRowClick}/>

      {selectedAffiliate && (
        <AffiliateModal affiliate={selectedAffiliate} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AffiliatesPage;
