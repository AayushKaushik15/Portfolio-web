import React from 'react'; // Import Bootstrap CSS
import foodApp from '../assets/preview.png'
import movies from '../assets/movies.jpg'
import { CiServer } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div name="work" className='bg-[#0e1111] w-full min-h-[100vh] '>
      <div className=' '>
      <h1 className='text-gray-300 font-bold text-3xl  sm:text-5xl w-[66%] m-auto pl-5'>Projects</h1>

          <div className='flex items-center justify-center flex-wrap'>
          <div className="card m-7 shadow-lg bg-white p-2 rounded" style={{ width: '18rem' }} >
        <img className="card-img-top" src={foodApp} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-[20px] font-bold my-2">CrunchByte</h5>
          <p className="card-text">
            CrunchByte is a user-friendly food ordering web app designed to streamline the dining experience
          </p>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg flex items-center justify-center p-2 text-white rounded bg-pink-600 border-none hover:bg-pink-800">
            Go Live <CiServer className='ml-3'/>
          </a>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg  flex items-center justify-center rounded text-white p-2 bg-pink-600 border-none hover:bg-pink-800">
            Github <FaGithub  className='ml-3'/>
          </a>
        </div>
      </div>
      <div className="card m-7 shadow-lg bg-white p-2 rounded" style={{ width: '18rem' }} >
        <img className="card-img-top" src={movies} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-[20px] font-bold my-2">Netflix-Clone</h5>
          <p className="card-text  my-2">
            <p>Netflix Clone: Enjoy personalized movie recommendations, seamless streaming, and user-friendly. </p>
          </p>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg flex items-center justify-center p-2 text-white rounded bg-pink-600 border-none hover:bg-pink-800">
            Go Live <CiServer className='ml-3'/>
          </a>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg  flex items-center justify-center rounded text-white p-2 bg-pink-600 border-none hover:bg-pink-800">
            Github <FaGithub  className='ml-3'/>
          </a>
        </div>
      </div>
      <div className="card m-7 shadow-lg bg-white p-2 rounded" style={{ width: '18rem' }} >
        <img className="card-img-top" src={foodApp} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-[20px] font-bold my-2">CrunchByte</h5>
          <p className="card-text">
          CrunchByte is a user-friendly food ordering web app designed to streamline the dining experience
          </p>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg flex items-center justify-center p-2 text-white rounded bg-pink-600 border-none hover:bg-pink-800">
            Go Live <CiServer className='ml-3'/>
          </a>
          <a href="#" className="btn btn-primary mt-3 m-1 shadow-lg  flex items-center justify-center rounded text-white p-2 bg-pink-600 border-none hover:bg-pink-800">
            Github <FaGithub  className='ml-3'/>
          </a>
        </div>
      </div>
          </div>
      
      </div>
    </div>
  );
};

export default Work;
