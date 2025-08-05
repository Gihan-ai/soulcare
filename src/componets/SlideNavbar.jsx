import React, { useState, useEffect } from 'react';
import { Menu, Home, FileText, User, LogOut, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import blogicon from "../assets/blogicon.jpg";

const SlideNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    { icon: Home, path: '/', active: activeIndex === 0 },
    { icon: FileText, path: '/Blog', active: activeIndex === 1 },
    // { icon: null, path: '/Blog', active: activeIndex === 2, isCustomIcon: true }, // Custom blog icon
    { icon: User, path: '/PatientDetails', active: activeIndex === 2 },
    { icon: Menu, path: '/Appoinment', active: activeIndex === 3 },
    { icon: MessageCircle, path: '/Chat', active: activeIndex === 4 }
  ];

  // Update active index based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItemIndex = sidebarItems.findIndex(item => item.path === currentPath);
    if (currentItemIndex !== -1) {
      setActiveIndex(currentItemIndex);
    }
  }, [location.pathname]);

  const handleNavigation = (path, index) => {
    setActiveIndex(index);
    navigate(path);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
    // navigate('/login'); // uncomment if you want to redirect to login
  };

  return (
    <>
      {/* Fixed Sidebar */}
      <div 
        className="fixed left-0 top-0 w-20 h-full flex flex-col items-center py-6 z-50" 
        style={{ backgroundColor: '#144A74' }}
      >
        {/* Navigation Items */}
        <div className="flex flex-col items-center space-y-6">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.path, index)}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeIndex === index
                  ? 'text-white shadow-lg'
                  : 'text-blue-200 hover:text-white hover:shadow-md'
              }`}
              style={{
                backgroundColor: activeIndex === index ? '#0F3A5F' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.backgroundColor = '#0F3A5F';
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.isCustomIcon ? (
                <img src={blogicon} alt="blog" width={24} height={24} className="rounded" />
              ) : (
                <item.icon size={24} />
              )}
            </div>
          ))}
        </div>

        {/* Logout Button - Fixed at bottom */}
        <div className="mt-auto">
          <div
            onClick={handleLogout}
            className="p-3 rounded-lg cursor-pointer text-blue-200 hover:text-white transition-colors duration-300 hover:shadow-md"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F3A5F'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <LogOut size={24} className="rotate-180" />
          </div>
        </div>
      </div>

      {/* Spacer div to prevent content from hiding behind the fixed navbar */}
      <div className="w-20"></div>
    </>
  );
};

export default SlideNavbar;
