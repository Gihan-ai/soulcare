// import React from 'react';
// import { Menu, X, Home, Settings, User } from "lucide-react";
// import { useNavigate } from 'react-router-dom';
// import blogicon from "../assets/blogicon.jpg";

// const SlideNavbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-10 px-1 py-2 flex min-h-screen"> 
//       <div className="w-20 flex min-h-screen mx-1 py-1 px-1 shadow-sm bg-blue-900 rounded-lg"> 
//         <ul className="p-8 space-y-3">
          
//           <li 
//             onClick={() => navigate('/')} 
//             className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
//           >
//             <Home size={20} />
//             <span>Home</span>
//           </li>

//           <li 
//             onClick={() => navigate('/Appoinment')} 
//             className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
//           >
//             <Settings size={20} />
//             <span>Appoinment</span>
//           </li>

//           <li 
//           onClick={() => navigate('/Blog')} 
//           className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
//             <img src={blogicon} alt="councellor" width={35} />
//           </li>

//             <li 
//             onClick={() => navigate('/PatientDetails')} 
//             className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
//           >
//             <User size={20} />
//             <span>Patient</span>
//           </li>

//           <li 
//             onClick={() => navigate('/Chat')} 
//             className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
//           >
//             <Menu size={20} />
//             <span>Massage</span>
//           </li>

          

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SlideNavbar;

// -----------------------------------v2----------------------------------------------------

//  import React from 'react';
// import { Grid, Calendar, FileText, Settings, MessageCircle, LogOut } from 'lucide-react';

// const SlideNavbar = () => {
//   const sidebarItems = [
//     { icon: Grid, active: true },
//     { icon: Calendar, active: false },
//     { icon: FileText, active: false },
//     { icon: Settings, active: false },
//     { icon: MessageCircle, active: false },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-900">
//       {/* Sidebar */}
//       <div className="w-20 bg-blue-900 flex flex-col items-center py-6 space-y-6">
//         {sidebarItems.map((item, index) => (
//           <div
//             key={index}
//             className={`p-3 rounded-lg cursor-pointer transition-colors ${
//               item.active
//                 ? 'bg-blue-800 text-white'
//                 : 'text-blue-300 hover:bg-blue-800 hover:text-white'
//             }`}
//           >
//             <item.icon size={24} />
//           </div>
//         ))}

//         <div className="mt-auto">
//           <div className="p-3 rounded-lg cursor-pointer text-blue-300 hover:bg-blue-800 hover:text-white transition-colors">
//             <LogOut size={24} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideNavbar;



import React, { useState } from 'react';
import { Menu, Home, FileText, User, LogOut,MessageCircle} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import blogicon from "../assets/blogicon.jpg";

const SlideNavbar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    { icon: Home, path: '/', active: activeIndex === 0 },
    { icon:FileText , path: '/Blog', active: activeIndex === 1 },
    //  { icon: null, path: '/Blog', active: activeIndex === 2, isCustomIcon: true },picture add
    { icon: User, path: '/PatientDetails', active: activeIndex === 3 },
    { icon: Menu, path: '/Appoinment', active: activeIndex === 4 },
    {icon: MessageCircle,path:'/Chat',active: activeIndex ===5 }
  ];

  const handleNavigation = (path, index) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-20 bg-blue-900 flex flex-col items-center py-6 space-y-6">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path, index)}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-blue-800 text-white'
                : 'text-blue-300 hover:bg-blue-800 hover:text-white'
            }`}
          >
            {item.isCustomIcon ? (
              <img src={blogicon} alt="blog" width={24} height={24} className="rounded" />
            ) : (
              <item.icon size={24} />
            )}
          </div>
        ))}

        <div className="mt-auto">
          <div className="p-3 rounded-lg cursor-pointer text-blue-300 hover:bg-blue-800 hover:text-white transition-colors">
            <LogOut size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;
