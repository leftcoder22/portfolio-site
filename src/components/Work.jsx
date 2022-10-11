import React from 'react'
import Aircondition from '../assets/aircondition.png'
import Beats from '../assets/beats.png'
import Gifts from '../assets/gifts.png'
import Hooked from '../assets/hooked.png'
import Defi from '../assets/defi.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'> 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font bold inline border-b-4 text-gray-300 border-green-800'>Work</p>
                <p className='py-6'> Check some of my work</p>
            </div>

            {/*Container */}
          
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                     
                <div style={{backgroundImage: `url(${Aircondition})`}}
                className='shadow-lg shadow-[#040c18] group container-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='http://airconditioninghub.com.au/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Hooked})`}}
                className='shadow-lg shadow-[#040c18] group container-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.happilyhooked.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Beats})`}}
                className='shadow-lg shadow-[#040c18] group container-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://beatbae.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Gifts})`}}
                className='shadow-lg shadow-[#040c18] group container-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.flamingaroo.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${Defi})`}}
                className='shadow-lg shadow-[#040c18] group container-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
};

export default Work