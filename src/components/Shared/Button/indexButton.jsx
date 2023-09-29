import React from 'react'

/**
 * 
 * @param {children} 
 * Variant de tipo primary, secondary, cancel,third, danger
 * @returns 
 */
const Button = ({children, variant="primary", loading, onClick, ...rest}) => {
  
    const primary = 'w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
    const danger = 'w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
    const secondary = 'w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'

    return (
    <button
    onClick={onClick}
    className={variant== 'secondary'? secondary : variant == 'danger'? danger : primary }
    > 
        {children}
    </button>
  )
}

export default Button