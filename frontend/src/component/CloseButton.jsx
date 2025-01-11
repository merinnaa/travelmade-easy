import React from 'react'
import close from '../asset/images/close.png'
const CloseButton = ({ onClick, className=''}) => {
  return (
    <button
    onClick={onClick}
    className={`h-[37px] p-3 bg-[#a3cdd9] rounded-[40px] flex justify-center items-center overflow-hidden ${className}`}
    aria-label='Close'
    >
      <img 
      src={close}
      alt='Close'
      className='h-full w-auto'
      />
    </button>
  )
}

export default CloseButton
