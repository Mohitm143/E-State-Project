import React from 'react'

const About = () => {
  return (
    <div id='About'className='min-h-screen py-10'>
        <div >
            <h1 className='font-extrabold text-3xl flex justify-center items-center '>About  <span className='underline text-3xl text-zinc-700 font-light '>OurBrand</span></h1>
            <p className='text-zinc-500 flex justify-center items-center text-xs'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='flex  justify-between '>
            <div className=' flex items-center h-120 m-15 '>
                <img src='https://i.pinimg.com/736x/a8/97/90/a8979013f0c3fcd7e65aee39008242e3.jpg' className='  rounded object-cover h-full w-full '></img>
            </div>
            <div className='p-20'>
                {data}
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dignissimos corrupti<br/> ullam cumque doloremque expedita alias eaque. Voluptatem officiis natus, cum itaque <br/>reprehenderit distinctio expedita animi exercitationem. Nisi, explicabo consequatur</p>
                <button className='bg-blue-500 py-2 px-5 mt-3 hover:cursor-pointer active:scale-110 '>Learn More </button>
            </div>
        </div>
    </div>
  )
}

export default About
const arr = [
  {
    num: "10+",
    Title: "Years Experience",
  },

  {
    num: "12+",
    Title: "Projects Completed",
  },

  {
    num: "200+",
    Title: "Project Completed",
  },

  {
    num: "25+",
    Title: "Projects On-going",
  }
]
const data = arr.map((elem)=>{
return(
    <div  key={elem.num}className='flex '>
        <div>
            <h1 className='text-4xl font-bold mb-1'>{elem.num}</h1>
            <p className='text-xl '>{elem.Title}</p>
        </div>

    </div>
)
})