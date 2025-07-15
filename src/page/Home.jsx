// import React from 'react'
// import VisitsTodayCard from '../componets/VisitTodayCard'
// import PatientList from '../componets/PatientList'

// const Home = () => {
  // return (
  //   <div>
  //     <VisitsTodayCard/>
  //     <PatientList/>
  //      <h1 className="text-lg font-medium text-gray-700">
  //         Good Morning <span className="font-bold text-blue-800">gihan!</span>
  //       </h1>
  //   </div>
  // )


  //import React, { useState } from 'react';
import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Activity,
   Settings,
  Search,
  Bell,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  User,
  Home as HomeIcon, // ✅ renamed to avoid conflict
} from 'lucide-react';
import HeaderNavbar from '../componets/HeaderNavbar';
import SlideNavbar from '../componets/SlideNavbar';

// Header Component
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-800">SoulCare</span>
        </div>
        <div className="text-gray-600">
          Good Morning <span className="font-semibold text-gray-800">gihan!</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MessageCircle className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
};


// Stats Card Component
const StatsCard = ({ title, value, change, isPositive, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div
          className={`flex items-center space-x-1 text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
      <div className="text-gray-600 text-sm">{title}</div>
    </div>
  );
};

// Visits Today Card Component
const VisitsTodayCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden">
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

      <div className="absolute right-4 bottom-4 w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <User className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

// Patient List Component
const PatientList = () => {
  const patients = [
    { id: 1, name: 'Stacy Mitchell', time: '2:30 AM', status: 'waiting', avatar: 'SM' },
    { id: 2, name: 'Amy Durham', time: '5:30 AM', status: 'consultation', avatar: 'AD' },
    { id: 3, name: 'Demi Joan', time: '1:00 AM', status: 'completed', avatar: 'DJ' },
    { id: 4, name: 'Susan Myers', time: '9:30 AM', status: 'waiting', avatar: 'SM' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800';
      case 'consultation':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <div
            key={patient.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
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
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  patient.status
                )}`}
              >
                {patient.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Motivational Quote Card Component
const MotivationalCard = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-6 text-white">
      <div className="text-sm opacity-90 mb-2">May 09 - May 15</div>
      <div className="text-right mb-4">
        <div className="text-2xl font-bold">24h</div>
      </div>
      <div className="text-sm leading-relaxed">
        Your knowledge and experience have the power to change lives—share them and inspire others on their journey to healing.
      </div>
    </div>
  );
};

// Doctor Image Card Component
const DoctorImageCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div className="relative flex items-center justify-center h-48">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <User className="w-16 h-16 text-white" />
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SlideNavbar/>
      <div className="flex-1 flex flex-col">
        <HeaderNavbar />

        <div className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Main content area */}
            <div className="col-span-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <StatsCard
                  title="Total Patients"
                  value="1,234"
                  change="+12%"
                  isPositive={true}
                  icon={Users}
                  color="bg-blue-500"
                />
                <StatsCard
                  title="Appointments"
                  value="89"
                  change="+5%"
                  isPositive={true}
                  icon={Calendar}
                  color="bg-green-500"
                />
                <StatsCard
                  title="Consultations"
                  value="156"
                  change="-3%"
                  isPositive={false}
                  icon={Activity}
                  color="bg-purple-500"
                />
                <StatsCard
                  title="Revenue"
                  value="$12.5k"
                  change="+8%"
                  isPositive={true}
                  icon={TrendingUp}
                  color="bg-orange-500"
                />
              </div>

              {/* Visits Today Card */}
              <div className="mb-6">
                <VisitsTodayCard />
              </div>

              {/* Patient List */}
              <PatientList />
            </div>

            {/* Right sidebar */}
            <div className="col-span-4 space-y-6">
              <MotivationalCard />
              <DoctorImageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



