import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CartCheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Cart Item */}
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="flex items-center">
            <img src="https://via.placeholder.com/100" alt="Product" className="w-24 h-24 object-cover" />
            <CardContent className="flex-1">
              <h3 className="text-lg font-bold">Product Title</h3>
              <p className="text-sm text-gray-500">$99.99</p>
              <p className="text-sm text-red-500">Discount: 10%</p>
              <div className="flex items-center mt-2">
                <Input type="number" defaultValue={1} className="w-16 mr-2" />
                <Button variant="outline">Remove</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Subtotal: $299.97</h3>
        <h3 className="text-xl font-bold">Total: $269.97</h3>
        <Button className="mt-4 w-full md:w-auto">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default CartCheckoutPage;
