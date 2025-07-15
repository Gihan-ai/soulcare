import React from 'react';

const CalendarHeader = ({ selectedWeek, setSelectedWeek }) => {
  const weekOptions = [
    "May 05 - May 09",
    "May 07 - May 11",
    "May 12 - May 16"
  ];

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-sm text-gray-500 mb-1">Dashboard</div>
        <h1 className="text-2xl font-bold text-gray-800">My Appointment ....</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
          {selectedWeek}
        </div>
        <select 
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
        >
          {weekOptions.map(week => (
            <option key={week} value={week}>{week}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CalendarHeader;