import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"


const Hero = () => {
  return (
    <motion.div  
     
    id="Home" className='min-h-screen  relative   '>
        
        < img src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg' className='absolute object-cover h-full w-full -z-10 contrast-70 brightness-80'></img>
        <Navbar/>
        <motion.div initial={{ opacity: 0 ,y:100}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ duration: 1 }} >
        <h1
          
          className='flex items-center justify-center text-white text-6xl mt-60 font-extrabold'>Explor Home that fits your dreams</h1>
        <div className='flex  items-center justify-center gap-5 mt-10'>
            <a href='#Projects' className='rounded border-2 border-white px-5 py-2 hover:bg-blue-400 text-black cursor-pointer'>Projects</a>
            <a href='#Contact'className='rounded border-2 border-white px-5 py-2 hover:bg-blue-400 text-black cursor-pointer'>ContactUs</a>
        </div>
        </motion.div>
    </motion.div>
  )
}

export default Hero