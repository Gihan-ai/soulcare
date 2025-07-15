import React from "react";
const CalendarDays = ({ selectedDate, setSelectedDate }) => {
  const days = [
    { date: '05', day: 'Mon', isToday: false },
    { date: '06', day: 'Tue', isToday: false },
    { date: '07', day: 'Thu', isToday: false },
    { date: '08', day: 'Wed', isToday: true },
    { date: '09', day: 'Fri', isToday: false }
  ];

  return (
    <div className="flex justify-between mb-6">
      <div className="text-sm text-gray-500">GMT+5</div>
      <div className="flex space-x-8">
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => setSelectedDate(day.date)}
            className={`text-center p-2 rounded-lg transition-colors ${
              day.isToday || selectedDate === day.date
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="text-lg font-semibold">{day.date}</div>
            <div className="text-xs">{day.day}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
export default CalendarDays