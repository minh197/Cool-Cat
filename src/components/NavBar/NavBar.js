import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo1.svg';

export default function NavBar() {
  return (
    <div className='flex'>
        <nav className="flex items-center justify-between flex-wrap m-1 max-w-8xl 	">
        <div className='flex items-center text-black'>
            <img className='fill- h-9 w-9 ' width="60" height="60"  src={Logo} alt="logo"></img>
            <Link to ='/' className='tracking-tight text-[34px] ml-2 font-thin font-serif'>Cool Cats</Link>   
        </div>
        <div className="w-full block  lg:flex lg:items-center lg:w-auto mr-44 xl:r-[37rem] ">
            <div className="text-sm lg:flex-grow mr-32">  
                <Link to='/viewcats' className='block lg:inline-block text-[34px] font-thin lg:mr-72 font-serif sm:mt-8 sm:ml-12 sm:mb-8   '>View Cats</Link>
                <Link to='/creatememes' className='block  lg:inline-block text-[34px] font-thin sm:m-1 font-serif sm:ml-12 '>Create Memes</Link>
            </div>
        </div>
   </nav>
    </div>
  
  )
}
