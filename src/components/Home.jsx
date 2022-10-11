import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600'>Hello there, My names is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Christopher John</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web/Mobile Developer,</h2>
            <p className='text-[#8892b0] py-4 max-w-[700]'>I sepcialize in building (and ocassionaly designing) amaing digital experiences for
            small business's and entrepenuers. Currently, I'm focused on 
            building responsive web applications</p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-900 hover:border-green-900'>View My Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home