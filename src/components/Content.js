import React from 'react'
import { BiSend } from "react-icons/bi";


const Content = () => {
  return (
    <div name="contact" className='bg-[#0e1111] flex justify-center items-center p-4 text-white'>
        <form method="POST" action="https://getform.io/f/wardvoga" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//submit the form below or shoot me an email - <span className='bg-pink-700 p-1 rounded-sm'>ayushkaushik.one@gmail.com</span></p>
            </div>
            <input required className='my-2 p-2 bg-[#2e2f34] outline-none rounded-sm' type="text" placeholder='Your name' name="name" />
            <input required className='my-2 p-2 bg-[#2e2f34] outline-none rounded-sm' type="email" placeholder='Your email address' name="email" />
            <textarea required className=' bg-[#2e2f34] outline-none rounded-sm px-3 py-3' name="message" cols="20" rows="10" placeholder='Message'></textarea>
            <button className="flex items-center text-white p-2 border-2 rounded border-white mt-3 hover:bg-pink-600  hover:border-pink-600 mx-auto group overflow-hidden"> Let's connect <BiSend className='ml-2 group-hover:translate-x-6 duration-200'/></button>
        </form>
    </div>
  )
}

export default Content