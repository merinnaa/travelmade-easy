import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
// import { useAuth } from "react-router-dom";

const Nav = () => {

  // const [user, signout] = useAuth()
  return (
    <>
      <NavLink to="/Explore" className="text-white text-[15px] font-semibold font-['Montserrat']">Explore</NavLink>
      <NavLink to="/Explore" className="text-white text-[15px] font-semibold font-['Montserrat']">Itinerary Planner</NavLink>
      <NavLink to="/Review" className="text-white text-[15px] font-semibold font-['Montserrat']">Review</NavLink>
       {/* { user ? (
<>
<span> welcome: {user.name}</span>
<button onClick={signout} className="text-white text-base font-medium font-['Montserrat']">
  Sign Out
</button>
</>
       ) : (
        <>
        <div className="justify-start items-center gap-[18px] flex">
        <div className="h-[52px] px-5 py-4 bg-[#626262] rounded-[40px] justify-center items-center gap-2.5 flex">
            <NavLink to="/login" className="text-white text-base font-medium font-['Montserrat']">Log in</NavLink>
        </div>
        <div className="h-[52px] px-5 py-4 bg-black rounded-[40px] justify-center items-center gap-2.5 flex">
            <div to="/signup" className="text-white text-base font-medium font-['Montserrat']">Sign up</div>
        </div>
    </div>
        </>
       )} */}
    </>
  )
}

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleNavbar = () => {
//     console.log("toggle navbar");
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//     <nav>
//       <div>
//         <NavLinks />
//       </div>
//       <div>
//         <button onClick={toggleNavbar}>{isOpen ? < X /> : (<menu/>)} </button>
//       </div>
//     </nav>
//     </>
//   )
// }

export default Nav

