import React from 'react'
import SuperNinja from '../assets/ProjectsImages/turtles.png'
import CaminoWays from '../assets/ProjectsImages/camino-ways.jpg'
import WatchVerse from '../assets/ProjectsImages/joker.jpg'
import DuraoTravel from '../assets/ProjectsImages/durao-travel.jpg'
import Portfolio from '../assets/ProjectsImages/react-js.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* Container*/}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-400'>Work 🛠️</p>
                    <p className='py-6'>Check out some of my recent projects...</p>
                </div>

                {/*Grid Container*/}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/*Grid Item 1 */}
                    <div style={{ backgroundImage: `url(${DuraoTravel})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                        {/*Card Items*/}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/*Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Durão Travel/Front-end travel website (React)
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href='https://durao-travel.vercel.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg '>Visit</button>
                                    </a>
                                    <a href='https://github.com/NunoDurao/DuraoTravel'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Grid Item 2*/}
                    <div style={{ backgroundImage: `url(${WatchVerse})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                        {/*Card Items*/}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/*Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    WatchVerse/Full-Stack Web App (React)
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href='https://cerulean-torte-7e554d.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Visit</button>
                                    </a>
                                    <a href='https://github.com/NunoDurao/WatchVerse---Frontend'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Grid Item 3*/}
                    <div style={{ backgroundImage: `url(${CaminoWays})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                        {/*Card Items*/}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/*Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    My Camino Ways/ Full-Stack Web App(hbs)
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href='https://bright-cardigan-foal.cyclic.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Visit</button>
                                    </a>
                                    <a href='https://github.com/NunoDurao/camino-ways'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Grid Item 4*/}
                    <div style={{ backgroundImage: `url(${SuperNinja})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                        {/*Card Items*/}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/*Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Super Ninja Turtles/2D Game
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href='https://nunodurao.github.io/Super-Ninja-Turtle/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Visit</button>
                                    </a>
                                    <a href='https://github.com/Guglielmo123/Super-Ninja-Turtle'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Grid Item 5*/}
                    <div style={{ backgroundImage: `url(${Portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                        {/*Card Items*/}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/*Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    React and scss Portfolio/2023
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href='https://nunodurao-web-dev-brown.vercel.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Visit</button>
                                    </a>
                                    <a href='https://github.com/NunoDurao/myPortfolio'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-pink-400 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Work;
