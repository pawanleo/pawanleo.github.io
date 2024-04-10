import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 navbar rounded-full">
        
            <ul className="flex">
                <li className="mx-4">
                    <a href="#about" className="hover:text-gray-300">About</a>
                </li>
                <li className="mx-4">
                    <a href="#work" className="hover:text-gray-300">Work</a>
                </li>
                <li className="mx-4">
                    <a href="#writings" className="hover:text-gray-300">Writings</a>
                </li>
                <li className="mx-4">
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
