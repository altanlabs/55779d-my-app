import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OrderHistoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="space-y-4">
        {/* Example Order */}
        {[...Array(5)].map((_, index) => (
          <Card key={index} className="flex justify-between items-center">
            <CardContent className="flex-1">
              <h3 className="text-lg font-bold">Order #{index + 1}</h3>
              <p className="text-sm text-gray-500">Date: 2024-01-01</p>
              <p className="text-sm text-gray-500">Total: $99.99</p>
              <p className="text-sm text-red-500">Discount: 10%</p>
            </CardContent>
            <Button variant="outline">View Details</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
