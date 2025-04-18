import React from 'react'

function Home() {
  return (
    <>
      <div className="pt-5 w-full bg-blue-100 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 mb">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left space-y-6">
            <p className='text-lg font-semibold italic text-blue-900'></p>
            <h1 className="text-3xl text-left sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-blue-800 to-red-600 bg-clip-text text-transparent leading-tight">Achieve the best version of your health.</h1>
            <p className='text-left  sm:text-lg text-gray-800 leading-relaxed'>Take the better step toward better health with personalized care.<br className='hidden sm:block'/> Physiotherapy is not just about healing the body, it's about empowering the patient to take control of their own health.</p>
            <div className="mt-6">
              <a href="/contact" className='inline-block bg-blue-400 hover:bg-blue-500 text-white text-lg px-6 py-2 rounded-full transition'>Appointment &#8658;</a>
            </div>
          </div>

          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:p-5">
            <img className="max-w-xs sm:max-w-sm md:max-w-md h-120 object-contain rounded-2xl mix-blend-multiply opacity-100" src="luisha3.png" alt="Dr. "/>
          </div>

          <div className="w-full lg:w-1/3 text-center space-y-6">
            <p className="text-base sm:text-lg bg-red-200 p-4 rounded-2xl leading-relaxed shadow text-gray-800">
            <i><q>I'm here to provide expert care,guidance through your health recovery, and help you live a healthier life.</q></i><br/><b>- <abbr title="Doctor">Dr. </abbr>...</b>
            </p>
            <img className="rounded-2xl max-w-xs sm:max-w-sm md:max-w-md mx-auto shadow" src="physiotherapy1.jpg" alt="Physiotherapy" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
