import React from 'react'

function About() {
  return (
    <>
    <div className='bg-blue-100 p-10 px-4 pb-17'>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl gap-8 mx-auto">
        <div className="flex justify-center items-center w-full md:w-auto">
            <img src="doctor2.jpg" alt="" className='w-full max-w-[300px] rounded-[10px] shadow object-cover mb-5 max-h-[400px]'/>
        </div>
        <div className="flex-1 min-w-[280px]">
            <h1 className='text-3xl mb-3 font-bold'><b>About Dr. Physio(PT)</b></h1>
            <cite className='text-gray-600 block mb-3 leading-5 '>Physiotherapist</cite>
            <p className='text-lg mb-4'>Dr. Physio(PT) is a compassionate and highly skilled physiotherapist dedicated to providing personalised healthcare for patients with ortho neuro cardio and sports injuries. Dr. ...(PT) is specialized in preventive care, chronic pain management and holistic health solutions.</p>
            <blockquote className='text-gray-500 pl-4 border-l-2 italic mb-4'>"A medical investigator and magical healer who combines patience with intelligence to restore movement and functionality to the bodies of many."</blockquote>
            <p className='mb-1'><strong>Location:</strong> Patan, Lalitpur</p>
            <p><strong>Education:</strong> Bachelors of physical therapy, MA psycology
            </p>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-6xl mx-auto ">
        <div className="bg-gray-100 p-5 rounded-xl hover:scale-105 transition-transform">
            <h3 className='text-xl font-semibold mb-1'>Successful Diagnosis</h3>
            <p className='mb-2'>Ensuring accurate and timely care.</p>
            <h2 className='text-2xl font-bold'>500+</h2>
        </div>
        <div className="bg-gray-400 p-5 rounded-xl hover:scale-105 transition-transform">
            <h3 className='text-xl font-semibold mb-1'>Recover Success Rate</h3>
            <p className='mb-2'>Helping patients recover optimal health.</p>
            <h2 className='text-2xl font-bold'>90%</h2>
        </div>
        <div className="bg-gray-400 p-5 rounded-xl hover:scale-105 transition-transform">
            <h3 className='text-xl font-semibold mb-1'>On-Time Consultation</h3>
            <p className='mb-2'>Your time is our priority.</p>
            <h2 className='text-2xl font-bold'>90%</h2>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl hover:scale-105 transition-transform">
            <h3 className='text-xl font-semibold mb-1'>Specialized Techniques</h3>
            <p className='mb-2'>Using advanced equipments and techniques.</p>
            <h2 className='text-2xl font-bold'>100+</h2>
        </div>
    </div>
    </div>
  </>
  )
}

export default About
