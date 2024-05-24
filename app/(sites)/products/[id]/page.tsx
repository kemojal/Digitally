'use client';
import ProductList from '@/components/products/ProductList';
import React, { useState } from 'react';

const productData = {
  id: 1,
  title: 'The Great Novel',
  description: 'A captivating story about love and adventure.',
  price: 9.99,
  image: 'novel.jpg',
};
// Assuming you have a function to fetch the products from an API or database
const fetchProducts = async () => {
  // Fetch products and return them
};

const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState(productData);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const products = await fetchProducts();
  //     setProducts(products);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Product detail</h1>
      {/* <ProductPage product={product} /> */}
    </div>
  );
};

export default ProductDetailPage;
