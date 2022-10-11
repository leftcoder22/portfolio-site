import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-800'>About</p>
                </div>
            </div><div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                    <p>I'm CJ, NYC native, Philadelphia resident. Take a look around</p>
                    </div>
                    <div>
                    <p>I am passionate about building excellent software that improves my clients lives. I sepcialize
                        in creating software for clients from individuals and small businesses, and mid-size corporations.
                        Think about what you could do if you had a software expert at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About