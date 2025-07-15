import React from 'react'
import { useState } from 'react';
import { Search, Grid, Calendar, FileText, Settings, MessageCircle, LogOut } from 'lucide-react';
import SlideNavbar from '../componets/SlideNavbar';

const PatientDetails = () => {
  const [selectedPatient, setSelectedPatient] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const patients = Array(9).fill(null).map((_, index) => ({
    id: index,
    name: 'John Carter',
    image: '/api/placeholder/60/60',
    age: '24 years old',
    address: 'A65, peradeniya',
    contact: '071-9498122',
    depressionLevel: 'Normal',
    lastChecked: 'Dr Everly on 21 April 2021 Prescription',
    observation: 'High fever and cough at normal hemoglobin levels.',
    prescription: 'Paracetamol - 2 times a day\nDiazepam - Day and Night before meal\nWhiskey'
  }));

  const sidebarItems = [
    { icon: Grid, active: true },
    { icon: Calendar, active: false },
    { icon: FileText, active: false },
    { icon: Settings, active: false },
    { icon: MessageCircle, active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      {/* <div className="w-20 bg-blue-900 flex flex-col items-center py-6 space-y-6">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              item.active 
                ? 'bg-blue-800 text-white' 
                : 'text-blue-300 hover:bg-blue-800 hover:text-white'
            }`}
          >
            <item.icon size={24} />
          </div>
        ))}
        <div className="mt-auto">
          <div className="p-3 rounded-lg cursor-pointer text-blue-300 hover:bg-blue-800 hover:text-white transition-colors">
            <LogOut size={24} />
          </div>
        </div>
      </div> */}
      <SlideNavbar/>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        {/* <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-700">SoulCare</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <Search size={20} className="text-gray-600" />
            </div>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">S</span>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">J</span>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
          </div>
        </div> */}

        {/* Content Area */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Patient Details</h1>
          
          <div className="flex gap-6">
            {/* Patient List */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-200 rounded-lg border-none outline-none text-gray-700"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>

              {/* Patient Grid */}
              <div className="grid grid-cols-3 gap-4">
                {patients.map((patient) => (
                  <div
                    key={patient.id}
                    onClick={() => setSelectedPatient(patient.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedPatient === patient.id
                        ? 'bg-teal-100 border-2 border-teal-400'
                        : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 overflow-hidden">
                        <img
                          src={patient.image}
                          alt={patient.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-xl" style={{display: 'none'}}>
                          JC
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-teal-600 font-semibold">{patient.name.split(' ')[0]}</div>
                        <div className="text-teal-600 font-semibold">{patient.name.split(' ')[1]}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Details Panel */}
            <div className="w-96 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={patients[selectedPatient].image}
                    alt={patients[selectedPatient].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-xl" style={{display: 'none'}}>
                    JC
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{patients[selectedPatient].name}</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Age</span>
                  <span className="text-gray-800">{patients[selectedPatient].age}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Address</span>
                  <span className="text-gray-800">{patients[selectedPatient].address}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Contact No.</span>
                  <span className="text-gray-800">{patients[selectedPatient].contact}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Depression level</span>
                  <span className="text-gray-800">{patients[selectedPatient].depressionLevel}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Last Checked</span>
                  <span className="text-gray-800 text-sm">{patients[selectedPatient].lastChecked}</span>
                </div>

                <div>
                  <div className="text-gray-600 font-medium mb-2">Observation</div>
                  <p className="text-gray-800 text-sm">{patients[selectedPatient].observation}</p>
                </div>

                <div>
                  <div className="text-gray-600 font-medium mb-2">Prescription</div>
                  <div className="text-gray-800 text-sm whitespace-pre-line">
                    {patients[selectedPatient].prescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PatientDetails;
