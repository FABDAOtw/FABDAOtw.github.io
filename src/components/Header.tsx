import React from 'react';
import { Link } from 'react-router-dom';
export function Header() {
  return <header className="w-full bg-white py-4 px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="https://github.com/lilian79511/fearless-utils/blob/23e897c9926adf4cbacfe48bfba9c6a54a00938b/icons/tokens/white/AIR.svg" alt="GreenSofa Hypercerts Logo" className="h-10 w-auto mr-2" />
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