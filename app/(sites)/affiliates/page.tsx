'use client';
import AffiliateList from '@/components/affiliates/AffiliateList';
import React, { useState } from 'react';

const affiliatesData = [
  {
    id: 1,
    name: 'John Doe',
    commissionRate: 10.0,
  },
  {
    id: 2,
    name: 'Jane Smith',
    commissionRate: 15.0,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    commissionRate: 12.5,
  },
  {
    id: 4,
    name: 'Emily Davis',
    commissionRate: 8.0,
  },
  {
    id: 5,
    name: 'David Wilson',
    commissionRate: 10.0,
  },
];
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Affiliates</h1>
      <AffiliateList affiliates={affiliates} />
    </div>
  );
};

export default AffiliatesPage;
