import React from 'react';

interface Affiliate {
  id: number;
  name: string;
  commissionRate: number;
  // Add other affiliate properties as needed
}

interface AffiliateListProps {
  affiliates: Affiliate[];
}

const AffiliateList: React.FC<AffiliateListProps> = ({ affiliates }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Affiliates</h2>
      <ul>
        {affiliates.map((affiliate) => (
          <li key={affiliate.id}>
            {affiliate.name} - Commission Rate: {affiliate.commissionRate}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffiliateList;
