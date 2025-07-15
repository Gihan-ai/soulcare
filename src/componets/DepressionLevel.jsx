import React from "react";
import { Map, User } from "lucide-react"; 

const DepressionLevel = () => {
  const levels = [
    { label: 'Low', color: 'bg-green-200', active: true },
    { label: 'Medium', color: 'bg-yellow-200', active: false },
    { label: 'High', color: 'bg-red-200', active: false }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Depression Level</h3>
      
      <div className="space-y-3 mb-4">
        {levels.map((level, index) => (
          <div key={level.label} className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded ${level.color} ${level.active ? 'ring-2 ring-blue-500' : ''}`}></div>
            <span className="text-sm text-gray-600">{level.label}</span>
          </div>
        ))}
      </div>
      
      <div className="relative">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default DepressionLevel;
