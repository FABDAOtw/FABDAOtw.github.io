import React from 'react';
import { Link } from 'react-router-dom';
export function Header() {
  return <header className="w-full bg-white py-4 px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center mr-2">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
                <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
              </svg>
            </div>
            <div>
              <div className="text-teal-500 font-medium text-sm">GreenSofa</div>
              <div className="text-teal-600 font-bold text-lg -mt-1">
                Hypercerts
              </div>
            </div>
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex flex-wrap space-x-2 md:space-x-4 lg:space-x-6 text-[#1A3C40]">
            <li>
              <Link to="/" className="font-medium hover:text-teal-600">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium hover:text-teal-600">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="font-medium hover:text-teal-600">
                Impact (Coming soon)
              </a>
            </li>
            <li className="ml-4">
              <div className="flex space-x-2">
                <button className="font-medium hover:text-teal-600">EN</button>
                <span>|</span>
                <button className="font-medium hover:text-teal-600">CH</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
}