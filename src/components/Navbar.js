import React, {useState} from 'react'
import Logo from "../assets/logo1.png"
import {FaBars, FaTimes,FaGithub, FaLinkedin, FaCalendar, FaFacebook, FaLink, FaTwitter,FaInstagram, FaXRay} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
import { MdDeveloperMode, MdOutlineCreate , MdOutlineWorkOutline, MdOutlineContactPage  } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-scroll';
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const clickHandler = () => {
        setNav(!nav)
    }

    
  return (
    <div className='fixed w-full h-[80px]  flex justify-between items-center px-4 bg-[#0e1111] text-gray-300'>
        <div className=''>
            <img src={Logo} alt="Logo image" style={{width : "50px"}}/>
        </div>

        {/* Menu */}

    
            <ul className='hidden md:flex'>
                <li><Link to="home" className='hover:text-pink-600 hover:border-b-2 border-pink-600 p-2' smooth={true}  duration={500}> Home </Link></li>
                <li><Link to="about" className='hover:text-pink-600 hover:border-b-2 border-pink-600 p-2' smooth={true}  duration={500}> About </Link></li>
                <li><Link to="skills" className='hover:text-pink-600 hover:border-b-2 border-pink-600 p-2' smooth={true}  duration={500}> Skills </Link></li>
                <li><Link to="work" className='hover:text-pink-600 hover:border-b-2 border-pink-600 p-2' smooth={true}  duration={500}> Projects </Link></li>
                <li><Link to="contact" className='hover:text-pink-600 hover:border-b-2 border-pink-600 p-2' smooth={true}  duration={500}> Contact </Link></li>
            </ul>

        {/* Hamburger */}

        <div className='md:hidden z-10 cursor-pointer'onClick={clickHandler}>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}

        
        <ul  className={nav ? 'absolute top-0 right-[0px] z-[9]  rounded-lg p-10 h-[400px] backdrop-blur-lg bg-[#1f1e25] flex flex-col transition-all duration-[0.4s] ' : 'absolute opacity-10 top-0 right-[-190px]  h-screen bg-[#24252a] flex flex-col transition-all duration-700'}>
            <li className='py-5 flex items-center mt-10 text-1xl cursor-pointer active:text-pink-600'><IoHomeOutline className='mr-3' /><Link onClick={clickHandler}  to="home" smooth={true}  duration={500}> Home </Link></li>
            <li className='py-5 flex items-center text-1xl cursor-pointer active:text-pink-600'><IoPersonOutline className='mr-3'/><Link onClick={clickHandler}  to="about" smooth={true}  duration={500}> About </Link></li>
            <li className='py-5 flex items-center text-1xl cursor-pointer active:text-pink-600'><MdOutlineCreate className='mr-3'/><Link onClick={clickHandler}  to="skills" smooth={true}  duration={500}> Skills </Link></li>
            <li className='py-5 flex items-center text-1xl cursor-pointer active:text-pink-600'><MdOutlineWorkOutline className='mr-3'/><Link onClick={clickHandler}  to="work" smooth={true}  duration={500}> Projects </Link></li>
            <li className='py-5 flex items-center text-1xl cursor-pointer active:text-pink-600'><MdOutlineContactPage className='mr-3' /><Link onClick={clickHandler}  to="contact" smooth={true}  duration={500}> Contact </Link></li>
            <div className='absolute top-5 left-5'>
                <img src={Logo} alt="" style={{width : "40px"}} />
            </div>
        </ul>
        

        {/* social */}

        <div className='hidden lg:flex fixed flex-col top-[250px] left-0 '>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-300 bg-blue-700 '>
                <a href="https://www.linkedin.com/in/aayushone/" target='blank' className='flex justify-between items-center w-full'>
                    LinedIn <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 transition-all bg-[#1f1e25] '>
                <a href="https://github.com/AayushKaushik15" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 transition-all bg-pink-800 '>
                <a href="https://www.instagram.com/canonicaldev/" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                    Instagram <FaInstagram size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 transition-all bg-[#1DA1F2] '>
                <a href="https://twitter.com/Ayushkauahik" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                    Twitter <FaTwitter size={30}/>
                </a>
            </li>

        </ul>
        </div>
    </div>
  )
}

export default Navbar