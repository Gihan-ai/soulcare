import React from 'react'
import logo from "../assets/logo.png";
import { Bell, Settings, UserCircle2, Search } from "lucide-react";
import counsellor from "../assets/counsellor.jpg";
const HeaderNavbar = () => {
  return (
    <div className="px-20 py-1">
    <header className="flex items-center justify-between py-1 px-1 rounded-lg  shadow-sm  bg-sky-100 ">
      {/* Left: Logo and greeting */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="SoulCare Log" className="h-20 w-20 rounded-md" />
      
      </div>
      

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-blue-600 rounded-full bg-skyCustom-500  p-2">
          <Search className="w-5 h-5" />
        </button>
        <button className="relative text-gray-600 hover:text-blue-600 rounded-full bg-blueCustom-100 p-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="text-gray-600 hover:text-blue-600 rounded-full bg-teal-500 p-2">
          <Settings className="w-5 h-5" />
        </button>
        <button>
           <img src={counsellor} alt="councellor" className='w-8 rounded-full' />
        </button>
      </div>
   
    </header>
    </div>
    
    
  )
}

export default HeaderNavbar
