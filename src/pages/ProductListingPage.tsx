import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/ui/pagination';

const ProductListingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Input type="text" placeholder="Search products..." className="w-full max-w-xs" />
        <Button className="ml-4">Filter</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Product Card */}
        {[...Array(8)].map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover" />
            <CardContent>
              <h3 className="text-lg font-bold">Product Title</h3>
              <p className="text-sm text-gray-500">$99.99</p>
              <p className="text-sm text-red-500">Discount: 10%</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination className="mt-8" />
    </div>
  );
};

export default ProductListingPage;
