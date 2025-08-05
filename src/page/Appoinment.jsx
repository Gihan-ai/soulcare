import React from 'react'
import  { useState, useEffect } from 'react';
import { 
  User,
  Clock,
  Play,
  Pause,
  Plus,
  Minus,
  Coffee,
  Video,
  MapPin,
  MoreVertical
} from 'lucide-react';
import SlideNavbar from '../componets/SlideNavbar';
import HeaderNavbar from '../componets/HeaderNavbar';



// Sidebar Component


// Calendar Header Component
const CalendarHeader = ({ selectedWeek, setSelectedWeek }) => {
  const weekOptions = [
    "May 05 - May 9",
    "May 07 - 2024",
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

// Calendar Days Component
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

// Appointment Card Component
const AppointmentCard = ({ appointment }) => {
  const getCardColor = (type) => {
    switch(type) {
      case 'session': return 'bg-red-200 border-red-300';
      case 'health': return 'bg-green-200 border-green-300';
      case 'break': return 'bg-blue-200 border-blue-300';
      case 'meeting': return 'bg-yellow-200 border-yellow-300';
      default: return 'bg-gray-200 border-gray-300';
    }
  };

  const getTextColor = (type) => {
    switch(type) {
      case 'session': return 'text-red-800';
      case 'health': return 'text-green-800';
      case 'break': return 'text-blue-800';
      case 'meeting': return 'text-yellow-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <div className={`p-3 rounded-lg border-l-4 ${getCardColor(appointment.type)} ${getTextColor(appointment.type)}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium text-sm mb-1">{appointment.title}</div>
          <div className="flex items-center space-x-2 text-xs">
            {appointment.location && (
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{appointment.location}</span>
              </div>
            )}
            {appointment.platform && (
              <div className="flex items-center">
                <Video className="w-3 h-3 mr-1" />
                <span>{appointment.platform}</span>
              </div>
            )}
            {appointment.duration && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>{appointment.duration}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {appointment.attendees && appointment.attendees.map((attendee, index) => (
            <div key={index} className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs text-white">
              {attendee}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Timer Component
const TimerFocus = () => {
  const [time, setTime] = useState(3600); // 1 hour in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  const adjustTime = (delta) => {
    setTime(Math.max(0, time + delta));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Timer focus</h3>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-gray-800 mb-4">
          {formatTime(time)}
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button 
            onClick={() => adjustTime(-300)}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className={`p-3 rounded-lg ${isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => adjustTime(300)}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Start timer
        </button>
      </div>
    </div>
  );
};

// Notes Component
const NotesSection = () => {
  return (
    <div className="bg-blue-400 rounded-xl p-6 text-white mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Note</h3>
        <MoreVertical className="w-5 h-5" />
      </div>
    </div>
  );
};

// Depression Level Component
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

// Quote Component
const MotivationalQuote = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <div className="text-gray-800 text-sm leading-relaxed italic">
        "Take charge of your well being your future self will thank you."
      </div>
    </div>
  );
};

// Main Appointment Component
const Chat = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [selectedWeek, setSelectedWeek] = useState('May 07 - 2024');
  const [selectedDate, setSelectedDate] = useState('08');

  const timeSlots = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM'
  ];

  const appointments = {
    '9:00 AM': [
      { 
        title: 'session', 
        type: 'session', 
        platform: 'Zoom', 
        duration: '1h', 
        attendees: ['+2'] 
      }
    ],
    '9:00 AM_2': [
      { 
        title: 'chathura', 
        type: 'health', 
        location: 'Health Center', 
        duration: '15 min' 
      },
      { 
        title: 'sihum', 
        type: 'health', 
        location: 'Xfun', 
        duration: '1h' 
      }
    ],
    '10:00 AM': [
      { 
        title: 'session', 
        type: 'meeting', 
        platform: 'Zoom', 
        duration: '2h', 
        attendees: ['+2'] 
      },
      { 
        title: 'session', 
        type: 'session', 
        platform: 'Zoom', 
        duration: '1h', 
        attendees: ['+2'] 
      }
    ],
    '11:00 AM': [
      { 
        title: 'Coffee break', 
        type: 'break', 
        duration: '30 min', 
        icon: Coffee 
      },
      { 
        title: 'Madhawa', 
        type: 'health', 
        location: 'Park', 
        duration: '1h' 
      },
      { 
        title: 'session', 
        type: 'session', 
        platform: 'Zoom', 
        duration: '1h', 
        attendees: ['+2'] 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SlideNavbar/>
      <div className="flex-1 flex flex-col">
         
        <HeaderNavbar/>
        <div className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Calendar Area */}
            <div className="col-span-8">
              <CalendarHeader 
                selectedWeek={selectedWeek} 
                setSelectedWeek={setSelectedWeek} 
              />
              
              <CalendarDays 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
              />
              
              {/* Time Slots and Appointments */}
              <div className="space-y-4">
                {timeSlots.map((timeSlot) => (
                  <div key={timeSlot} className="flex">
                    <div className="w-20 text-sm text-gray-500 font-medium pt-2">
                      {timeSlot}
                    </div>
                    <div className="flex-1 grid grid-cols-5 gap-4">
                      {/* Show appointments for this time slot */}
                      {appointments[timeSlot] && (
                        <div className="space-y-2">
                          {appointments[timeSlot].map((appointment, index) => (
                            <AppointmentCard key={index} appointment={appointment} />
                          ))}
                        </div>
                      )}
                      {appointments[`${timeSlot}_2`] && (
                        <div className="space-y-2">
                          {appointments[`${timeSlot}_2`].map((appointment, index) => (
                            <AppointmentCard key={index} appointment={appointment} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="col-span-4 space-y-6">
              <TimerFocus />
              <NotesSection />
              <DepressionLevel />
              <MotivationalQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Chat;

