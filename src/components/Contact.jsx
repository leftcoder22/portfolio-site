import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/e066433a-328c-433e-82c8-a544dee902d0' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-900 text-gray-300'></p>
                <p className='text-gray-300 py-4'>Complete form or send me an email - cjohn@cjsofts.com</p>
            </div>
            <input classname='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-900 hover:border bg-green-900 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collab</button>
        </form>

    </div>
  )
}

export default Contact