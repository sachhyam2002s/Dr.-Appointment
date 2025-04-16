import { Menu, X } from 'lucide-react';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed w-full z-10 bg-blue-50 shadow-amber-50 '>
        <div className='max-w-7xl mx-auto py-4 px-6 flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='rounded-full w-14 h-14 object-cover' src="./physio-logo.jpg" alt="Logo" />
                <Link to="/" className='text-blue-500 text-xl font-roboto font-bold'><strong>{props.title}</strong></Link>
            </div>
            <div className='hidden md:flex items-center gap-8 ml-auto'>
                <Link to="/home" className='hover:text-red-500'>Home</Link>
                <Link to="/about" className='hover:text-red-500'>About</Link>
                <Link to="/contact" className='hover:text-red-500'>Contact</Link>
            </div>
            <div>
                <button className='md:hidden' onClick={toggleMenu}>
                    {isOpen? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden bg-white py-4 px-4 space-y-4 flex flex-col items-center '>
                <Link to="/home" className='block hover:text-red-500'>Home</Link>
                <Link to="/about" className='block hover:text-red-500'>About</Link>
                <Link to="/contact" className='block hover:text-red-500'>Contact</Link>
            </div>
        )}
    </nav>
  )
}

export default Navbar
