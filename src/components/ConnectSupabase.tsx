import React, { useState } from 'react';
import { DatabaseIcon } from 'lucide-react';

const ConnectSupabase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg max-w-md">
      <div className="flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <DatabaseIcon size={20} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Connect to Supabase</h3>
          <p className="mt-1 text-sm text-gray-600">
            Please click the "Connect to Supabase" button in the top right corner to set up your database for tracking coin flips.
          </p>
          <div className="mt-3 flex space-x-2">
            <button
              onClick={handleDismiss}
              className="text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSupabase;