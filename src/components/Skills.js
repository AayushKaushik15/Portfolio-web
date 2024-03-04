import React from 'react'
import { skillsData } from '../constants/data'
// import HTML from "../assets/html.png"
// import CSS from "../assets/css.png"
// import ReactImg from "../assets/react.png"
// import Firebase from "../assets/firebase.png"
// import Javascript from "../assets/javascript.png"
// import Github from "../assets/github.png"
// import Tailwind from "../assets/tailwind.png"
// import Node from "../assets/node.png"
// import Bootstrap from "../assets/bootstrap.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full min-h-[100vh] flex justify-center  bg-[#0e1111] text-gray-900 px-4 '>
        <div className='w-[1000px] m-auto px-4'>
            <h1 className='text-center text-4xl sm:text-5xl text-gray-300 font-bold border-b-4 border-pink-600 inline'>Skills</h1>
            <div className= 'max-w-[600px] m-auto '>
                <ul className='flex flex-wrap justify-center my-[20px]'>
                {
                    skillsData.map((value, index) => (
                        <li className='p-[10px] border-[2px] text-gray-400 border-gray-300 rounded-[5px] bg-white-200 m-[10px]' key={index}>{value}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills