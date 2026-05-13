import React from 'react'
import { IoBusinessSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 bg-transparent'>
        <div className='flex items-center justify-between gap-2'>
            < IoBusinessSharp size={22}/>
            <h1 className='text-xl'>E-State</h1>
        </div>
        <div >
            <ul className='flex items-center justify-between gap-x-10 list-none'>
                <li>
                    <a href="#Home"  className=' hover:text-blue-800'>Home</a>
                </li>
                <li>
                    <a href="#About" className=' hover:text-blue-800'>About</a>
                </li>
                <li>
                    <a href="#Projects" className=' hover:text-blue-800'>Project</a>
                </li>
                <li>
                    <a href="#Testimonial" className=' hover:text-blue-800'>Testomonial</a>
                </li>
            </ul>
        </div>
        <div>
            <a href='#Contact'className='hidden md:block rounded-full bg-white text-black px-5 py-2 active:scale-110'>Sign Up</a>
        </div>
    </div>
  )
}

export default Navbar