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
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
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
