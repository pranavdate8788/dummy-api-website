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
              <br /> I am <span className='text-orange-500'>Jay Pokale</span> <br /> AKA <a href='https://dare2solve.vercel.app/' className='text-orange-500'>Dare2Solve</a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <div
            className="max-h-[288px] h-[80vw] md:h-72 max-w-[288px] w-[80vw] md:w-72 flex overflow-hidden"
            style={{ borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70% " }}
          >
            <img src={'jay.webp'} width={288} height={288}></img>
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
                .pauseFor(100)
                .typeString("Mathematician")
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
            Myself Jay Pokale, from Government College of Engineering, Yavatmal. Studying in Mechanical Branch and currently in pursuing my final year.
          </p>
          <p className="w-full indent-10 text-justify">
            Although I am in Mechanical Branch but I study and practice mostly related to computer. Specially Web Development. I created GitHub repo of my projects. <a className='font-semibold text-orange-600 drop-shadow-md' href="https://github.com/JayPokale">Click here</a> to redirct to my GitHub profile.
          </p>
          <p className="w-full indent-10 text-justify">
           I am the creator of Dare2Solve. <a className='font-semibold text-orange-600 drop-shadow-md' href="https://dare2solve.vercel.app">Click here</a> to know more about Dare2Solve. I gathered more than 20,000 followers due to Dare2Solve. It is typically Mathematics based account where I create several Maths questions and upload their solutions on my website.
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