import React from 'react';
import ApperIcon from '@/components/ApperIcon';

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center p-8">
        <div className="mb-6">
          <ApperIcon 
            name="ChefHat" 
            className="w-16 h-16 text-primary mx-auto mb-4" 
          />
          <h1 className="text-4xl font-display font-bold text-secondary mb-2">
            FoodHub
          </h1>
          <p className="text-lg font-body text-gray-600">
            Order Food Online
          </p>
        </div>
        
        <div className="bg-surface p-6 rounded-lg shadow-card">
          <h2 className="text-xl font-display font-semibold text-secondary mb-4">
            Welcome to FoodHub
          </h2>
          <p className="font-body text-gray-600">
            Your favorite food delivery platform is ready to serve you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;