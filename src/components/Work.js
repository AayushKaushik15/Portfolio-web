import React from 'react'
import Working from "../assets/projects/workImg.jpeg"
import food from "../assets/projects/food.jpg"
import netflix from "../assets/projects/netflix.jpg"
import { FaCode } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";

const Work = () => {
  return (
    <div name="work" className='bg-[#0e1111] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Projects</p>
                <p className='py-5'>Check out some of the recent projects</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${food})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center block'>
                            CrunchByte
                        </span>
                        <ul className='flex items-center'>
                            <li className='bg-gray-600 px-[8px] border-2 border-white rounded m-1 '>React</li>
                            <li className='bg-gray-600 px-[8px] border-2 border-white rounded m-1'>Redux</li>
                            <li className='bg-gray-600 px-[8px] border-2 border-white rounded m-1'>Routers</li>
                        </ul>
                        <div className='pt-8 text-center flex'>
                            <a href="/" >
                                <button className='text-center flex items-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <FaCode className='ml-[4px]'/></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg flex items-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo <MdOutlineWebAsset className="ml-[4px]"/></button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style={{backgroundImage: `url(${netflix})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center block'>
                            Netflix Clone
                        </span>
                        
                        <div className='pt-8 text-center flex'>
                            <a href="/" >
                                <button className='text-center flex items-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <FaCode className='ml-[4px]'/></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg flex items-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo <MdOutlineWebAsset className="ml-[4px]"/></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${netflix})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center block'>
                            Netflix Clone
                        </span>
                        <div className='pt-8 text-center flex'>
                            <a href="/" >
                                <button className='text-center flex items-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <FaCode className='ml-[4px]'/></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg flex items-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo <MdOutlineWebAsset className="ml-[4px]"/></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work