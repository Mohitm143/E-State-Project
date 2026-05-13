import React, { useState,useRef} from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
const Projects = () => {
  const slider = useRef(null)
  const  nextSlider = ()=>{
    slider.current.scrollLeft -=300
  }
  const  prevSlider = ()=>{
    slider.current.scrollLeft +=300
  }

  return (
    <div id="Projects" className='min-h-screen py-10'>
        <h1 className='font-extrabold text-3xl flex justify-center items-center'>Projects<span className='underline text-3xl text-zinc-700 font-light '> Completed </span></h1>
        <p className='text-zinc-500 flex justify-center items-center text-xs'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
       <div className='flex items-center justify-end px-50 mt-10 gap-4'>
        <button  onClick={nextSlider}className='bg-gray-300 p-2 rounded active:scale-90 '><GrLinkPrevious size='18' /></button>
        <button  onClick={prevSlider}className='bg-gray-300 p-2 rounded active:scale-90 '><GrLinkNext   size='18' /></button>
        </div>
        <div className=' px-10  h-full w-full'>
            <div   ref={slider}  className='flex mt-10 gap-3 overflow-x-auto '>
                {Property}
            </div>
        </div>
    </div>
  )
}

export default Projects
const Propertiesdata = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    title: "Modern Villa",
    price: "$250,000",
    location: "New York",
  },

  {
    id: 2,
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    title: "Luxury Apartment",
    price: "$180,000",
    location: "California",
  },

  {
    id: 3,
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    title: "Beach House",
    price: "$320,000",
    location: "Miami",
  },

  {
    id: 4,
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Family Home",
    price: "$150,000",
    location: "Texas",
  },

  {
    id: 5,
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    title: "Luxury Penthouse",
    price: "$450,000",
    location: "Chicago",
  },

  {
    id: 6,
    img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    title: "Classic Mansion",
    price: "$600,000",
    location: "Los Angeles",
  },

  {
    id: 7,
    img: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
    title: "Smart Home",
    price: "$270,000",
    location: "Seattle",
  },

  {
    id: 8,
    img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    title: "Countryside House",
    price: "$130,000",
    location: "Colorado",
  }
]
const Property = Propertiesdata.map((elem) => {
  return (
    <div
      key={elem.id}
      className='min-w-[400px] bg-white rounded-xl overflow-hidden shadow-lg'
    >

      <img
        src={elem.img}
        alt={elem.title}
        className='h-[350px] w-full object-contain'
      />

      <div className='p-4'>

        <h1 className='text-xl font-bold'>
          {elem.title}
        </h1>

        <div className='flex items-center justify-between mt-2'>

          <h2 className='text-blue-600 font-semibold'>
            {elem.price}
          </h2>

          <span className='text-zinc-500 text-sm'>
            {elem.location}
          </span>

        </div>

      </div>

    </div>
  )
})