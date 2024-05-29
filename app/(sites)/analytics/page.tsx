'use client';
import AnalyticsChart from '@/components/Analytics/AnalyticsChart';
import AnalyticsTable from '@/components/Analytics/AnalyticsTable';
import React, { useState } from 'react';

const salesDataS = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [1200, 1500, 2000, 1800, 2200, 1900, 2300],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};
const customerDataS = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
  { id: 5, name: 'David Wilson', email: 'david@example.com' },
];

const productDataS = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
  datasets: [
    {
      label: 'Sales',
      data: [250, 300, 400, 200, 350],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};
// Assuming you have functions to fetch the analytics data from an API or database
const fetchSalesData = async () => {
  // Fetch sales data and return it
};

const fetchCustomerData = async () => {
  // Fetch customer data and return it
};

const fetchProductData = async () => {
  // Fetch product data and return it
};

const AnalyticsPage: React.FC = () => {
  const [salesData, setSalesData] = useState(salesDataS);
  const [customerData, setCustomerData] = useState(customerDataS);
  const [productData, setProductData] = useState(productDataS);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const sales = await fetchSalesData();
  //     const customers = await fetchCustomerData();
  //     const products = await fetchProductData();
  //     setSalesData(sales);
  //     setCustomerData(customers);
  //     setProductData(products);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-3xl font-bold mb-4">Analytics</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Sales Data</h2>
          {salesData && <AnalyticsChart data={salesData} />}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Customer Data</h2>
          {customerData && (
            <AnalyticsTable
              data={customerData}
              columns={
                [
                  /* Add columns */
                ]
              }
            />
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Product Data</h2>
          {productData && <AnalyticsChart data={productData} />}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
