import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DiscountManagementPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Manage Discounts</h2>
      <div className="space-y-4">
        {/* Example Discount Rule */}
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="flex items-center justify-between">
            <CardContent className="flex-1">
              <h3 className="text-lg font-bold">Discount Rule {index + 1}</h3>
              <p className="text-sm text-gray-500">10% off on all products</p>
            </CardContent>
            <div className="flex items-center space-x-2">
              <Button variant="outline">Edit</Button>
              <Button variant="outline">Remove</Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Add New Discount</h3>
        <Input type="text" placeholder="Discount Name" className="mb-2" />
        <Input type="text" placeholder="Discount Details" className="mb-2" />
        <Button>Add Discount</Button>
      </div>
    </div>
  );
};

export default DiscountManagementPage;
