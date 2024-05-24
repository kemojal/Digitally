'use client';
import React, { useState } from 'react';
import ProductList from '@/components/products/ProductList';
import FilterModal from '@/components/products/FilterModal';
import { Search, Filter, SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const productsData = [
  {
    id: 1,
    title: 'The Great Novel',
    description: 'A captivating story about love and adventure.',
    price: 9.99,
    tags: ['Book', 'Adventure', 'Love'],
    totalRevenue: 499.5,
    totalSales: 50,
    image: 'novel.jpg',
  },
  {
    id: 2,
    title: 'Web Development Masterclass',
    description: 'Learn to build modern web applications from scratch.',
    price: 49.99,
    tags: ['Course', 'Development', 'Web'],
    totalRevenue: 2499.5,
    totalSales: 50,
    image: 'webdev.jpg',
  },
  {
    id: 3,
    title: 'Productivity App',
    description: 'A powerful app to boost your productivity.',
    price: 24.99,
    tags: ['App', 'Productivity', 'Tool'],
    totalRevenue: 1249.5,
    totalSales: 50,
    image: 'prodapp.png',
  },
  {
    id: 4,
    title: 'Relaxing Music Album',
    description: 'A collection of soothing instrumental tracks.',
    price: 6.99,
    tags: ['Music', 'Relaxing', 'Instrumental'],
    totalRevenue: 349.5,
    totalSales: 50,
    image: 'music.jpg',
  },
  {
    id: 5,
    title: 'Cooking Video Course',
    description: 'Learn to cook delicious meals like a pro.',
    price: 29.99,
    tags: ['Course', 'Cooking', 'Food'],
    totalRevenue: 1499.5,
    totalSales: 50,
    image: 'cooking.jpg',
  },
];


const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({
    minPrice: 0,
    maxPrice: 100,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleApplyFilters = (filters: {
    minPrice: number;
    maxPrice: number;
  }) => {
    setFilters(filters);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.price.toString().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    )
    .filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );


    const handleCancelFilters = (filters: {
     
    }) => {
      setFilters(
        {
          minPrice: 0,
          maxPrice: 100,
        }
      );
    };
   
  return (
    <div className="container mx-auto py-8 ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center  w-full p-2">
          <div className="flex items-center bg-gray-100 rounded-md w-[90%] p-2">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent focus:outline-none"
          />
          </div>
          <div className="flex items-center gap-1 justify-end">
          <Button
            className="p-2 ml-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <Filter className="h-5 w-5" />
          </Button>
          <Button
          variant="outline"
            onClick={handleCancelFilters}
            className=" bg-transparent  rounded-md hover:bg-transparent"
          >
           <span>
             <SearchX className='w-10 h-10'/>
             </span>
          </Button>
          </div>
        </div>
      </div>
      <ProductList products={filteredProducts} />
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
      />
    </div>
  );
};

export default ProductsPage;
