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
  
    
     </>
   )
 } 


export default Nav

