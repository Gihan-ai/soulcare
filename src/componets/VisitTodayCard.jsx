import React from 'react';
import { TrendingUp, TrendingDown, User } from 'lucide-react'; // Ensure you have this library installed

const VisitsTodayCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6  text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute right-4 top-4 w-20 h-20 bg-white bg-opacity-20 rounded-full -mr-10 -mt-10"></div>
      
      <div className="relative">
        <div className="text-sm opacity-90 mb-2">Visits for Today</div>
        <div className="text-4xl font-bold mb-4">104</div>
        
        <div className="flex space-x-6">
          <div>
            <div className="text-2xl font-semibold">40</div>
            <div className="text-xs opacity-90">New Patients</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span className="text-xs">51%</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold">64</div>
            <div className="text-xs opacity-90">Old Patients</div>
            <div className="flex items-center mt-1">
              <TrendingDown className="w-3 h-3 mr-1" />
              <span className="text-xs">36%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Doctor illustration placeholder */}
      <div className="absolute right-4 bottom-4 w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <User className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

export default VisitsTodayCard;
