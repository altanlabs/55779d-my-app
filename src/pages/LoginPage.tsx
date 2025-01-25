import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8">
        <CardContent>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required className="w-full" />
            <Input type="password" placeholder="Password" required className="w-full" />
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
