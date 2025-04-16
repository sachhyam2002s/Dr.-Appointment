import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-28 px-4 gap-8 max-w-7xl mx- auto bg-blue-100">
        <div className="flex-1 min-w-[300px] max-w-2xl">
            <h2 className='text-4xl font-bold mb-4'>Get in Touch <br/>with Dr. Luisha</h2>
            <p className='text-lg text-gray-600 leading-1.6 mb-4'>Have any questions or need physiotherapy care?Fill out the form, and we’ll reach out to you soon.Your recovery, mobility, and well-being are our top priorities.</p>
            <a href="mailto:luishastha009@gmail.com" className='text-blue-900 font-semibold block mb-2 hover:underline'>luishastha009@gmail.com</a>
            <a href="tel:+9779841972748" className='text-blue-900 font-semibold block mb-2 hover:underline'>+977 9841972748</a>
        </div>
        <div className="flex-1 min-w-[300px] max-w-[500px] w-full p-6 bg-white rounded-xl shadow-lg">
            <form onsubmit="submitForm(event)">
                    <label className='text-lg font-semibold block mb-1' htmlFor="fname">First Name:</label>
                    <input className='border w-full p-3 rounded-xl text-base focus:bg-blue-100 mb-4' type="text" id="fname" name="firstname" placeholder="Enter your first name" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="lname">Last Name:</label>
                    <input className='w-full p-3 rounded-xl text-base focus:bg-blue-100 border mb-4' type="text" id="lname" name="lastname" placeholder="Enter your last name" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="email">Email:</label>
                    <input className='w-full p-3 rounded-xl text-base focus:bg-blue-100 border mb-4' type="email" id="email" name="email" placeholder="Enter your email" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="phone">Phone:</label>
                    <input className='w-full p-3 rounded-xl border text-base focus:bg-blue-100 mb-4' type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="message">Message:</label>
                    <textarea className='w-full p-3 rounded-xl text-base focus:bg-blue-100 mb-4 h-32 resize-none border' id="message" name="message" placeholder="Your message"></textarea>
                    <div className="text-center mt-5">
                        <input className='bg-blue-400 text-white p-3 text-lg rounded-xl hover:bg-red-400 transition-colors w-full cursor-pointer' type="submit" value="Submit"/>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
