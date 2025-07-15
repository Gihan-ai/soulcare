import React, { useState } from "react";
import { Coffee } from "lucide-react"; // ✅ Add this if using lucide-react

const MainAppointment = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [selectedWeek, setSelectedWeek] = useState('May 07 - 2024');
  const [selectedDate, setSelectedDate] = useState('08');

  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'];

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
        icon: Coffee // ✅ Must be imported
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

  // Temporary rendering to avoid empty component
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Main Appointment</h2>
      <p className="text-sm text-gray-600">Selected Date: {selectedDate}, Week: {selectedWeek}</p>
      <p className="text-sm text-gray-600 mt-2">Active Tab: {activeTab}</p>
    </div>
  );
};

export default MainAppointment;

