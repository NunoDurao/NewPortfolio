import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>
              About 💬
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>📍I´m from Lisbon, Portugal. I started to work in hospitality in 2003 👉</p>
          </div>
          <div>
            <p>Dom Carlos Hotels was my first major professional experience. First as a bellboy and later as a receptionist. In 2008, we won the Publituris award for the best 3-star hotel in Lisbon. As the years went by, I realized that despite enjoying what I was doing, I felt I needed a new professional challenge. And it was then, in April 2023, that I decided to enroll in the Ironhack web developer bootcamp. The reason behind my decision was my curiosity about technology. I see it as the future, and I want to be a part of it. During Ironhack's web development bootcamp, I was introduced to a comprehensive array of technologies including JavaScript, CSS, HTML, Node.js, MongoDB, and React. This immersive program provided me with invaluable hands-on experience and in-depth understanding of each technology. Engaging in challenging projects (detailed overviews available in the 'Work' section) and receiving dedicated mentorship allowed me to refine my skills in both front-end and back-end development, proficient database management, and the creation of dynamic web applications. This intensive learning experience not only equipped me with expertise but also instilled the confidence necessary to pursue a successful career in the tech industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;