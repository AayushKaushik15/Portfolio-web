import React from 'react'
import {HiArrowNarrowRight, HiDownload } from "react-icons/hi"
import { FaAngleDown } from "react-icons/fa";


import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='bg-[#0E1111] h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2]'>
        {/* container */}

      
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
            <p className='text-pink-600 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aayush kaushik</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally 
            designing) exceptional digital experiences. Currently, I'm focused on
            building responsive full-stack web application</p>
            <div className='flex'>
            <Link to="about" smooth={true}  duration={500}>
            <button className='text-white group border-2 rounded p-2 sm:px-6 py-3 my-2  flex items-center hover:bg-pink-700 hover:border-pink-700 mx-3'>
            View work
            <span  className='group-hover:rotate-90 duration-300 '>
                <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
            </Link>

            <button className='flex rounded shadow-lg items-center justify-between group border-2 border-pink-700 px-1 sm:px-6 my-2 bg-pink-700 hover:bg-white hover:text-black hover:border-white'>
              Resume <HiDownload className="ml-3 text-[20px] group-hover:translate-y-[5px] duration-[0.2s]"/>
            </button>
            
            
            </div>
        </div>
    </div>
  )
}

export default Home