import React from "react";
import { 
  Clock,
  Video,
  MapPin,
  
} from 'lucide-react';



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
export default AppointmentCard;

