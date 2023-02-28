import React from 'react'
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  return (
    <div className="max-w-7xl w-full mx-auto py-24 lg:py-48">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-6 lg:gap-0 select-none">
        <div className="lg:w-1/2 flex justify-end md:pr-10">
          <div className="text-2xl xs:text-3xl md:text-4xl">
            <div className="text-gray-500">
              Hello,
              <br /> I am <span className='text-orange-500'>Pranav Date</span>  
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <div
            className="max-h-[288px] h-[80vw] md:h-72 max-w-[288px] w-[80vw] md:w-72 flex overflow-hidden"
            style={{ borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70% " }}
          >
            <img src={'photo4.jpg'} width={288} height={288}></img>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center my-4 text-lg sm:text-xl md:text-4xl lg:text-6xl select-none"
      >
        <div>I am a &#160;</div>
        <div className='font-semibold text-orange-500'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
      <div className="flex items-center flex-col-reverse mx-4 mt-48">
        <div className="flex flex-col justify-center p-2 max-w-3xl lg:text-lg">
          <p className="w-full indent-10 text-justify">
     Myself Pranav date, from Government College of Engineering, Yavatmal. Studying in Computer Branch and currently pursuing my final year.
          </p>
           
           
        </div>
        <div className="w-full xs:w-2/3 md:w-1/2 lg:w-2/5 p-2">
          <img src={'./AboutUs.gif'} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs