import React from "react";

export interface AffiliateProps {
  id: number;
  logo: string;
  name: string;
  url: string;
  category: string;
  commissionRate: number;
  status: string;
}

interface AffiliateListProps {
  affiliates: AffiliateProps[];
  onRowClick: (affiliate: AffiliateProps) => void;
}

const AffiliateList: React.FC<AffiliateListProps> = ({
  affiliates,
  onRowClick,
}) => {
  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-4">Affiliates</h2> */}
      {/* <ul>
        {affiliates.map((affiliate) => (
          <li key={affiliate.id}>
            {affiliate.name} - Commission Rate: {affiliate.commissionRate}%
          </li>
        ))}
      </ul> */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">URL</th>
            <th className="py-2 px-4 border-b">Commission</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {affiliates.map((affiliate) => (
            <tr
              key={affiliate.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onRowClick(affiliate)}
            >
              <td className="py-2 px-4 border-b flex items-center">
                {/* <img
                  src={affiliate.logo}
                  alt={affiliate.name}
                  className="h-8 w-8 mr-2"
                /> */}
                <div className="w-6 h-6 mr-2 rounded-full bg-gray-300"></div>
                {affiliate.name}
              </td>
              <td className="py-2 px-4 border-b">
                <a
                  href={affiliate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {affiliate.url}
                </a>
              </td>
              <td className="py-2 px-4 border-b">
                {affiliate.commissionRate}%
              </td>
              <td className="py-2 px-4 border-b">{affiliate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AffiliateList;
