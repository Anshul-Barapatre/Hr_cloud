import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
    <h1 className="text-2xl text-blue-500 font-bold m-3">
      Hr Cloud.
    </h1>

    <div className='space-x-8 tex lg:font-bold text-blue-900'>
      <Link to='/'>Home</Link>
      <Link to='/Services'>Services</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/About'>AboutUs</Link>
      
   
    </div>
   
    </nav>
  )
};

export default Navbar;
