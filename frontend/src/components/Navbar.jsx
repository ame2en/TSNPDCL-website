import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' '>
      <div className='text-white text-sm w-full bg-gradient-to-r from-[#081321] to-[#204E87] flex items-center justify-between px-10 py-3'> 
        <div>Supply Related complaints 18004250028 (or) 1912.(24/7)</div>
        <div>GSTIN : 36AABCN2875L3Z1</div>
      </div>
      <div className='pl-6 text-center w-full flex justify-center'>
        <img src={logo} alt="" className='h-32 w-[1500px]'/>
      </div>
      <div className='w-full bg-gradient-to-r from-[#081321] to-[#204E87] text-white py-2' >
        <nav className=' flex flex-row justify-end gap-12 px-8 '>
            <NavLink to="/" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Home</NavLink>
            <NavLink to="/aboutus" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>About Us </NavLink>
            <NavLink to="/cosumer" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Consumer Info</NavLink>
            <NavLink to="/tariffs" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Tariffs & Regulations</NavLink>
            <NavLink to="/donwloads" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Downloads</NavLink>
            <NavLink to="/consumer portal" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Consumer Forms</NavLink>
            <NavLink to="/mediaportal" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Media Portal</NavLink>
            <NavLink to="/employee" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Employee Portal</NavLink>
            <NavLink to="/careers" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Careers</NavLink>
            <NavLink to="/contactus" className={({isActive})=>`${isActive ? " font-semibold" : "font-normal"}`}>Contact Us</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;


