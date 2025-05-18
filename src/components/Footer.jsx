import React from 'react'
import {Facebook, Instagram, Twitter, Youtube, Mail, Phone} from "lucide-react";

function Footer() {
  return (
    <div className="m-auto bg-blue-50 text-lg p-5 ">
        <div className="grid">
            <div className="flex flex-col lg:flex-row gap-8 justify-around p-2">
                <div className="flex flex-col lg:flex-row items-center gap-2 ">
                    <a href="/"><img src="physio-logo.jpg" alt="Logo" className="h-20 w-20 rounded-full flex"/></a>
                    <p>Restoring motion, renewing lives.</p>
                </div>
                <div className='flex lg:gap-10 justify-around'>
                    <div className="mb-2 items-center">
                        <h3 className='text-lg font-semibold '>Contact Us:</h3>
                        <ul className='text-base space-y-1'>
                            <li className='flex items-center gap-1'><Phone className='w-5 h-5'/><a href="tel:+9779876543210" className='hover:underline'>+977 9876543210</a></li>
                            <li className='flex items-center gap-1'><Phone className='w-5 h-5'/><a href="tel:+9779801234567" className='hover:underline'>+977 9801234567</a></li>
                            <li className='flex items-center gap-1'><Mail className='w-5 h-5'/><a href="dr-physio@gmail.com" className='hover:underline'>dr-physio@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="mb-2">
                        <h3 className='text-lg font-semibold '>Follow Us:</h3>
                        <ul className='text-base space-y-1'>
                            <li className='flex items-center gap-1'><Facebook className='w-5 h-5'/><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='hover:underline'>Facebook</a></li>
                            <li className='flex items-center gap-1'><Instagram className='w-5 h-5'/><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>Instagram</a></li>
                            <li className='flex items-center gap-1'><Twitter className='w-5 h-5'/><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>Twitter</a></li>
                            <li className='flex items-center gap-1'><Youtube className='w-5 h-5'/><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center font-semibold pt-2">Copyright 2025 - All rights reserved by Dr. Physio.</p>
        </div>
    </div>

  )
}

export default Footer
