import React, { useState, useEffect } from "react";
import { Play, Pause, Plus, Minus } from "lucide-react"; // Make sure to install lucide-react

const Timer = () => {
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
    setTime(prev => Math.max(0, prev + delta));
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

        <button 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsRunning(true)}
        >
          Start timer
        </button>
      </div>
    </div>
  );
};

export default Timer;

