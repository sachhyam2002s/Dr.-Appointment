import React, {useState} from 'react'


function Navbar() {
  return (
    <nav className='flex bg-blue-300 justify-evenly items-center p-4 '>
        <div className='flex content-center items-center'>
            <img className='rounded-full w-14 h-14 object-cover' src="./physio-logo.jpg" alt="Logo" />
            <a href="#" className='ml-1 text-purple-500 font-serif'><strong>Doctor's Appointment</strong></a>
        </div>
        <div className='flex gap-2 font-serif '>
            <a href="/Home" className='hover:text-pink-400'>Home</a>
            <a href="/Home" className='hover:text-pink-400'>About</a>
            <a href="/Contact" className='hover:text-pink-400'>Contact</a>
        </div>
        <div>
            <button className='bg-blue-600 p-1 border-none rounded-3xl'><a className='text-green-300' href="/Contact">Appointment &#8658;</a></button>
        </div>
    </nav>
  )
}

export default Navbar
