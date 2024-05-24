"use client";
import React, { useState } from "react";
import ProductList from "@/components/products/ProductList";
import FilterModal from "@/components/products/FilterModal";
import { Search, Filter, SearchX, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewProductModal from "./_components/NewProductModal";
import NewProductModal2 from "./_components/NewProductModal2";

// const productsData = [
//   {
//     id: 1,
//     title: 'The Great Novel',
//     description: 'A captivating story about love and adventure.',
//     price: 9.99,
//     tags: ['Book', 'Adventure', 'Love'],
//     totalRevenue: 499.5,
//     totalSales: 50,
//     image: 'novel.jpg',
//   },
//   {
//     id: 2,
//     title: 'Web Development Masterclass',
//     description: 'Learn to build modern web applications from scratch.',
//     price: 49.99,
//     tags: ['Course', 'Development', 'Web'],
//     totalRevenue: 2499.5,
//     totalSales: 50,
//     image: 'webdev.jpg',
//   },
//   {
//     id: 3,
//     title: 'Productivity App',
//     description: 'A powerful app to boost your productivity.',
//     price: 24.99,
//     tags: ['App', 'Productivity', 'Tool'],
//     totalRevenue: 1249.5,
//     totalSales: 50,
//     image: 'prodapp.png',
//   },
//   {
//     id: 4,
//     title: 'Relaxing Music Album',
//     description: 'A collection of soothing instrumental tracks.',
//     price: 6.99,
//     tags: ['Music', 'Relaxing', 'Instrumental'],
//     totalRevenue: 349.5,
//     totalSales: 50,
//     image: 'music.jpg',
//   },
//   {
//     id: 5,
//     title: 'Cooking Video Course',
//     description: 'Learn to cook delicious meals like a pro.',
//     price: 29.99,
//     tags: ['Course', 'Cooking', 'Food'],
//     totalRevenue: 1499.5,
//     totalSales: 50,
//     image: 'cooking.jpg',
//   },
// ];

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

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

  const handleCancelFilters = (filters: {}) => {
    setFilters({
      minPrice: 0,
      maxPrice: 100,
    });
  };

  return (
    <>
      {filteredProducts.length > 0 && products.length > 0 ? (
        <div className="container mx-auto py-8  w-full h-full">
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
                    <SearchX className="w-10 h-10" />
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
      ) : (
        <div className="text-center py-8  w-full h-full flex items-center flex-col justify-center">
          <h2 className="text-2xl font-bold">Create your first product</h2>
          <p className="text-gray-600 mt-2 text-xs text-muted-foreground max-w-lg">
            Adding products to your store is easy peasy. Create products in
            minutes and start making sales.
          </p>
          <Button
            className="mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={() => setIsNewProductModalOpen(true)}
          >
            + New Product
          </Button>
        </div>
        // <div className="text-center">
        //   <h2 className="text-2xl font-bold mb-4">Create your first product</h2>
        //   <p className="text-gray-600 mb-8">
        //     Adding products to your store is easy peasy. Create products in
        //     minutes and start making sales.
        //   </p>
        //   <Button
        //     variant="default"
        //     className="bg-indigo-600 hover:bg-indigo-700"
        //     onClick={() => setIsNewProductModalOpen(true)}
        //   >
        //     <PlusCircle className="mr-2 h-5 w-5" />
        //     New Product
        //   </Button>
        // </div>
      )}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
      />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onClose={() => setIsNewProductModalOpen(false)}
      />
      {/* <NewProductModal2
        isOpen={isNewProductModalOpen}
        onClose={() => setIsNewProductModalOpen(false)}
      /> */}
    </>
  );
};

export default ProductsPage;
