import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <NavLink to="/Explore" className="text-white text-[15px] font-semibold font-['Montserrat']">Explore</NavLink>
      <NavLink to="/Explore" className="text-white text-[15px] font-semibold font-['Montserrat']">Itinerary Planner</NavLink>
      <NavLink to="/Review" className="text-white text-[15px] font-semibold font-['Montserrat']">Review</NavLink>
      {/* <NavLink to="/">Explore</NavLink> */}
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

