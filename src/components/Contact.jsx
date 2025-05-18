import React from 'react'
import {Mail, Phone} from "lucide-react";

function Contact() {
  const submit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <div className='pt-10 px-4 w-full bg-blue-100 pb-10'>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl mx- auto">
        <div className="flex-1 min-w-[300px]">
            <h2 className='text-4xl font-bold mb-4'>Get in Touch <br/>with the Doctor</h2>
            <p className='text-lg text-gray-600 leading-1.6 mb-4'>Have any questions or need physiotherapy care?Fill out the form, and we’ll reach out to you soon.Your recovery, mobility, and well-being are our top priorities.</p>
            <ul>
              <li className='flex items-center gap-2'><Mail className='w-5 h-5'/><a href="mailto:gopixelboy@gmail.com" className='text-blue-900 font-semibold block mb-2 hover:underline'>dr-physio@gmail.com</a></li>
              <li className='flex items-center gap-2'><Phone className='w-5 h-5'/><a href="tel:+9779876543210" className='text-blue-900 font-semibold block mb-2 hover:underline'>+977 9876543210</a></li>
            </ul>
        </div>
        <div className="flex-1 min-w-[300px] max-w-[500px] w-full p-6 bg-white rounded-xl shadow-lg ">
            <form onSubmit={submit}>
                    <label className='text-lg font-semibold block mb-1' htmlFor="fname">First Name:</label>
                    <input className='border w-full p-2 rounded-xl text-base focus:bg-blue-100 mb-4' type="text" id="fname" name="firstname" placeholder="Enter your first name" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="lname">Last Name:</label>
                    <input className='w-full p-2 rounded-xl text-base focus:bg-blue-100 border mb-4' type="text" id="lname" name="lastname" placeholder="Enter your last name" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="email">Email:</label>
                    <input className='w-full p-2 rounded-xl text-base focus:bg-blue-100 border mb-4' type="email" id="email" name="email" placeholder="Enter your email" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="phone">Phone:</label>
                    <input className='w-full p-2 rounded-xl border text-base focus:bg-blue-100 mb-4' type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
                    <label className='text-lg font-semibold block mb-1' htmlFor="message">Message:</label>
                    <textarea className='w-full p-2 rounded-xl text-base focus:bg-blue-100 mb-4 h-32 resize-none border' id="message" name="message" placeholder="Your message"></textarea>
                    <div className="text-center mt-5">
                        <input className='bg-blue-400 text-white p-3 text-lg rounded-xl hover:bg-red-400 transition-colors w-full cursor-pointer' type="submit" value="Submit"/>
                    </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
