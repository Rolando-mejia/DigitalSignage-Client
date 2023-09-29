import React from 'react';

const Input = ({ icon, placeholder, value, type="text", onChange, name }) => {
  return (
    <div className="relative grid gap-24 mb-10 md:grid">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        name={name}
        type={type}
        className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg py-2 px-4 text-3xl focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
