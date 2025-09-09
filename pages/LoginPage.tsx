
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

export const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 animate-fade-in">
      <Card className="max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center mb-2">F1® Member Login</h1>
        <p className="text-gray-400 text-center mb-6">Access your exclusive content.</p>
        <form className="space-y-4">
          <Input 
            label="Email Address" 
            id="email"
            name="email" 
            type="email" 
            placeholder="you@example.com" 
            required
          />
          <Input 
            label="Password" 
            id="password"
            name="password" 
            type="password" 
            placeholder="••••••••" 
            required
          />
          <div className="text-right text-sm">
            <a href="#" className="font-medium text-f1-red hover:underline">Forgot password?</a>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Not a member yet?{' '}
          <Link to="/become-member" className="font-bold text-white hover:underline">
            Become a Member
          </Link>
        </p>
      </Card>
    </div>
  );
};
