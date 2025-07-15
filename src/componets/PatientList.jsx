import React from 'react';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'Stacy Mitchell', time: '2:30 AM', status: 'waiting', avatar: 'SM' },
    { id: 2, name: 'Amy Durham', time: '5:30 AM', status: 'consultation', avatar: 'AD' },
    { id: 3, name: 'Demi Joan', time: '1:00 AM', status: 'completed', avatar: 'DJ' },
    { id: 4, name: 'Susan Myers', time: '9:30 AM', status: 'waiting', avatar: 'SM' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'waiting': return 'bg-yellow-100 text-yellow-800';
      case 'consultation': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Patient List</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {patients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {patient.avatar}
              </div>
              <div>
                <div className="font-medium text-gray-800">{patient.name}</div>
                <div className="text-sm text-gray-500">Appointment</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                {patient.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
