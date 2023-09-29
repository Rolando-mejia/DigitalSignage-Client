import React from 'react';

const Field = ({ label, tip, error, children }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-2xl font-bold text-white mb-10">{label}</label>}
      {children}
      {tip && <div className="text-sm text-gray-300 mt-1">{tip}</div>}
      {error && <div className="text-md text-red-400 mt-1">{error}</div>}
    </div>
  );
};

export default Field;
