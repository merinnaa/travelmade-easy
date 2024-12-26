import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
const Header = () => {
  return (
    
      <header>
       <div className="w-full h-[84px] px-[100px] py-4 bg-[#696969] justify-between items-center inline-flex">
    <div className="justify-center items-center gap-2.5 flex">
      
      <div className="justify-center items-center gap-2.5 flex">
      <Logo/>
    
      </div>
    </div>
    <Nav  />

    <div className="justify-start items-center gap-[18px] flex">
        <div className="h-[52px] px-5 py-4 bg-[#626262] rounded-[40px] justify-center items-center gap-2.5 flex">
            <button className="text-white text-base font-medium font-['Montserrat']">Log in</button>
        </div>
        <div className="h-[52px] px-5 py-4 bg-black rounded-[40px] justify-center items-center gap-2.5 flex">
            <button className="text-white text-base font-medium font-['Montserrat']">Sign up</button>
        </div>
    </div>
</div>
      </header>
    
  )
}

export default Header
