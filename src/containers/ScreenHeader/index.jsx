import React from 'react'

const ScreenHeader = ({title, children}) => {
  return (
    <div className='flex justify-between items-center h-[0%] w-[100%] mb-11 mt-0 text-3xl'>
        <h3>{title}</h3>
        {children}
    </div>
  )
}

export default ScreenHeader