// import React from 'react'
// import logo from "../assets/logo.png";
// import { Bell, Settings, UserCircle2, Search } from "lucide-react";
// import counsellor from "../assets/counsellor.jpg";
// const HeaderNavbar = () => {
//   return (
//     <div className="px-20 py-1">
//     <header className="flex items-center justify-between py-1 px-1 rounded-lg  shadow-sm  bg-sky-100 ">
//       {/* Left: Logo and greeting */}
//       <div className="flex items-center space-x-4">
//         <img src={logo} alt="SoulCare Log" className="h-20 w-20 rounded-md" />
      
//       </div>
      

//       {/* Right: Icons */}
//       <div className="flex items-center space-x-4">
//         <button className="relative text-gray-600 hover:text-blue-600 rounded-full bg-skyCustom-500  p-2">
//           <Search className="w-5 h-5" />
//         </button>
//         <button className="relative text-gray-600 hover:text-blue-600 rounded-full bg-blueCustom-100 p-2">
//           <Bell className="w-5 h-5" />
//           <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
//         </button>
//         <button className="text-gray-600 hover:text-blue-600 rounded-full bg-teal-500 p-2">
//           <Settings className="w-5 h-5" />
//         </button>
//         <button>
//            <img src={counsellor} alt="councellor" className='w-8 rounded-full' />
//         </button>
//       </div>
   
//     </header>
//     </div>
    
    
//   )
// }

// export default HeaderNavbar


// import React from 'react';
// import logo from "../assets/logo.png";
// import { Bell, Settings, UserCircle2, Search } from "lucide-react";
// import counsellor from "../assets/counsellor.jpg";

// const HeaderNavbar = () => {
//   return (
//     <div className="bg-white border-b border-gray-200">
//       <header className="flex items-center justify-between py-4 px-8">
//         {/* Left: Logo and SoulCare text */}
//         <div className="flex items-center space-x-3">
//            <div className="flex items-center space-x-4">
//         <img src={logo} alt="SoulCare Log" className="h-20 w-20 rounded-md" />
//             <div className="w-4 h-4 bg-white rounded-sm"></div>
//           </div>
//         </div>
        
//         {/* Right: Action buttons */}
//         <div className="flex items-center space-x-3">
//           {/* Search Button */}
//           <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//             <Search className="w-5 h-5 text-gray-600" />
//           </button>
          
//           {/* Settings Button */}
//           <button className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
//             <Settings className="w-5 h-5 text-white" />
//           </button>
          
//           {/* Notifications Button */}
//           <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
//             <Bell className="w-5 h-5 text-white" />
//           </button>
          
//           {/* Profile Button */}
//           <button className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors overflow-hidden">
//             <img 
//               src={counsellor} 
//               alt="Profile" 
//               className="w-full h-full object-cover rounded-full"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'flex';
//               }}
//             />
//             <div className="w-full h-full bg-orange-400 rounded-full items-center justify-center text-white font-medium text-sm hidden">
//               A
//             </div>
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default HeaderNavbar;


import React from 'react';
import logo from "../assets/logo.png";
import { Bell, Settings, UserCircle2, Search } from "lucide-react";
import counsellor from "../assets/counsellor.jpg";

const HeaderNavbar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-2 bg-white rounded-xl shadow-sm mx-4 px-6">
          {/* Left: Logo and SoulCare text */}
          <div className="flex items-center space-x-3">
             <div className="flex items-center space-x-4">
          <img src={logo} alt="SoulCare Log" className="h-14 w-14 rounded-md" />
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
          </div>
          
          {/* Right: Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
            
            {/* Settings Button */}
            <button className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
              <Settings className="w-4 h-4 text-white" />
            </button>
            
            {/* Notifications Button */}
            <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Bell className="w-4 h-4 text-white" />
            </button>
            
            {/* Profile Button */}
            <button className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors overflow-hidden">
              <img 
                src={counsellor} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-orange-400 rounded-full items-center justify-center text-white font-medium text-xs hidden">
                A
              </div>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderNavbar;
