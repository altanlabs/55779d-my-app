import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img src="https://via.placeholder.com/300" alt="Product" className="w-full md:w-1/2 object-cover" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Product Title</h2>
          <p className="text-lg text-gray-700 mb-4">$99.99</p>
          <p className="text-sm text-red-500 mb-4">Discount: 10%</p>
          <p className="text-gray-600 mb-6">This is a detailed description of the product. It includes all the features and benefits that the product offers.</p>
          <Button className="w-full md:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
