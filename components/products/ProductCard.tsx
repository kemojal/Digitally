import React from 'react';
import Link from 'next/link';
import { DollarSign, ShoppingCart } from 'lucide-react';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  totalRevenue: number;
  totalSales: number;
  // Add other product properties as needed
}

export interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 flex flex-col h-full">
      <div className="relative w-full h-[150px] bg-gray-100 rounded overflow-hidden flex-shrink-0">
        {/* Add product image or placeholder */}
      </div>
      <div className="flex flex-col flex-grow mt-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
        <p className="font-bold text-lg mb-4">${product.price}</p>
        <div className="flex space-x-2 flex-wrap mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1 line-clamp-1 max-w-[150px] truncate"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">${product.totalRevenue.toFixed(2)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">{product.totalSales} sales</span>
          </div>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
