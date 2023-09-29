import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-10">
    <div className="w-16 h-16 relative">
      <div
        className="w-full h-full border-4 border-t-4 border-blue-500 rounded-full animate-spin"
        style={{
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
        }}
      ></div>
    </div>
  </div>
  )
}

export default Loader