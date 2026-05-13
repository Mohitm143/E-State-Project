import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'className='min-h-screen py-10'>
        <div >
            <h1 className='font-extrabold text-3xl flex justify-center items-center '>Contact Us </h1>
            <p className='text-zinc-500 flex justify-center items-center text-xs'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex gap-20 items-center justify-center mt-20  '>
        <div >
            <h3 className='mb-1 font-bold'>Your Name</h3>
            <input type='name' placeholder='Enter your Name ' className='border-2 pr-18 pl-2 py-2 outline-none '>
            </input>
        </div>
        <div>
            <h3 className='mb-1 font-bold'>Your Email</h3>
            <input type='Email' placeholder='Enter your Email 'className='border-2 pr-18 pl-2 py-2 outline-none '>
            </input>
        </div>
        </div>
        <div className='flex  flex-col items-center justify-center mt-10 '>
            <h3 className=' flex items-center font-bold text-xl '> Your Message</h3>
            <input type='textarea' placeholder='Write your Message' className='pr-100 pl-2 pt-3 pb-60 border-2 outline-none '></input>
        </div>
        <div className=' flex items-center justify-center mt-3 '>
        <button className='  px-5 py-2  bg-blue-500 text-white  rounded-2xl hover:scale-110 cursor-pointer'>submit</button>
        </div>
        
    </div>
  )
}

export default Contact