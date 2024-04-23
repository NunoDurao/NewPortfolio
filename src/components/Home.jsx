import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-pink-400 '>Hello, World👋 I´m</p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>Nuno Durão</h1>
        <h2 className='text-1xl sm:text-4xl font-bold text-[#8892b0]'>Full Stack Web Developer</h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Welcome to my page, where you can get to know my professional journey and what led me to transition into tech. Feel free to reach out and don't hesitate to contact me for idea exchanges, collaborations, or simply to share experiences. Thank you for your visit, and I hope you can find here some inspiration.</p>
        <div>
           <Link to='contact'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'>
            Hire Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
