import React from 'react';

const Screen = ({children}) => {
  return (
    <div className="pt-20 items-start justify-center text-white text-2xl font-bold px-0 pl-[270px] pr-[20px] h-screen w-screen">
      {children}
    </div>
  );
};

export default Screen;