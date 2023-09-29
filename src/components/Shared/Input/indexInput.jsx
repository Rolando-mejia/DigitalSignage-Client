import React from 'react';

const Input = ({ icon, placeholder, type="text" }) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
