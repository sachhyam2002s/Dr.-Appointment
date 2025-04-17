import { Menu, X } from 'lucide-react';
import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    const navClass = ({isActive}) => `hover:text-red-500 ${isActive? "text-red-500" : 'text-gray-700'}`;

  return (
    <nav className='w-full z-10 bg-blue-50 shadow-amber-50 '>
        <div className='max-w-7xl mx-auto py-2 px-6 flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='rounded-full w-14 h-14 object-cover' src="./physio-logo.jpg" alt="Logo" />
                <Link to="/" className='text-blue-500 text-xl font-roboto font-bold'><strong>{props.title}</strong></Link>
            </div>
            <div className='hidden md:flex items-center gap-8 ml-auto'>
                <NavLink to="/" className={navClass}>Home</NavLink>
                <NavLink to="/about" className={navClass}>About</NavLink>
                <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </div>
            <div>
                <button className='md:hidden' onClick={toggleMenu}>
                    {isOpen? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden bg-blue-50 py-4 px-4 space-y-4 flex flex-col items-center '>
                <NavLink to="/" className={navClass}>Home</NavLink>
                <NavLink to="/about" className={navClass}>About</NavLink>
                <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </div>
        )}
    </nav>
  )
}

export default Navbar
