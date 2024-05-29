import React from 'react';

interface AnalyticsTableProps {
  data: any[];
  columns: { key: string; label: string }[];
}

const AnalyticsTable: React.FC<AnalyticsTableProps> = ({ data, columns }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2 text-left">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
