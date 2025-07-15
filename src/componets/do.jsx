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