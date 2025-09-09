
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

export const BecomeMemberPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 animate-fade-in">
      <Card className="max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-center mb-2">Become an F1® Member</h1>
        <p className="text-gray-400 text-center mb-6">Get exclusive access to content, analysis, and more.</p>
        <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                    label="First Name" 
                    id="firstName"
                    name="firstName" 
                    type="text" 
                    placeholder="Lewis" 
                    required
                />
                 <Input 
                    label="Last Name" 
                    id="lastName"
                    name="lastName" 
                    type="text" 
                    placeholder="Hamilton" 
                    required
                />
            </div>
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
                placeholder="Create a strong password" 
                required
            />
            <Input 
                label="Confirm Password" 
                id="confirmPassword"
                name="confirmPassword" 
                type="password" 
                placeholder="Re-enter your password" 
                required
            />
            <Button type="submit">Create Account</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Already a member?{' '}
          <Link to="/login" className="font-bold text-white hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};
