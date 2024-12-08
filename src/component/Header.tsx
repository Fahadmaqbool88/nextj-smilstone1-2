"use client";

// import React, {useState} from 'react';
import Link from 'next/link'

// import { FaShoppingCart } from 'react-icons/fa'
// import { HiMenuAlt3 } from 'react-icons/hi';
// import { HiX } from 'react-icons/hi';

let Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = ()=>{
//     setIsMenuOpen(!isMenuOpen);
//   };

//   let closeMenu = () =>{
//     setIsMenuOpen(false);
//   };
  return (
    
      
    <header className= ' alam bg-blue-500 text-white'>
        <h1 className='text-2xl font-bold'>Watch World</h1>
        <nav className= ' samoon hidden md:flex gap-10 text-white font-bold justify-center items-center w-700'>
            <Link href="/" >Home</Link>
            <Link href="/about"  >About</Link>
            <Link href="/watches" >Watches</Link>
            <Link href="/contact" >Contact</Link>
        </nav>
            {/* <FaShoppingCart className='text-white text-xl'/> */}

        {/* <div className='md:hidden flex items-center'> */}
            {/* <HiMenuAlt3  className='text-white text-3xl cursor-pointer' onClick={toggleMenu} /> */}
        {/* </div> */}
       
        
    </header>
  )
}

export default Header
