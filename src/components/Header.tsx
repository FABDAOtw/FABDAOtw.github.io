import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Logo_en.svg";
export function Header() {
  const {
    pathname
  } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null); // ⬅️ NEW

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // click outside to close the tablet/mobile menu
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current) return;
      const target = e.target as Node;

      // ⬅️ Ignore clicks inside the menu OR on the toggle button
      if (menuRef.current.contains(target)) return;
      if (toggleRef.current && toggleRef.current.contains(target)) return;
      setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const tabClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) return "text-[#29C4A9]";
    return scrolled ? "text-[#1A3C40] hover:text-teal-600" : "text-[#F5F3EE] text-opacity-70 hover:text-[#179080]";
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in backdrop-blur-sm rounded-b-3xl ${scrolled ? "bg-white/95" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-between">
          <img src={logo} alt="GreenSofa Hypercerts Logo" className="h-8 w-auto mr-2" />
        </Link>

        {/* Desktop tabs (lg+) */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-base font-medium">
            <li><Link to="/" className={tabClass("/")}>Projects</Link></li>
            <li><Link to="/about" className={tabClass("/about")}>About</Link></li>
            <li><span className={`opacity-50 ${scrolled ? "text-[#1A3C40]" : "text-[#6B8483]"}`}>Impact (Coming soon)</span></li>
          </ul>
        </nav>
          {/* Language switch */}
        <div className={`hidden items-center space-x-2 ${scrolled ? "text-[#1A3C40]" : "text-[#F5F3EE]"}`}>
            <button className="font-medium hover:text-[#179080]">EN</button>
            <span>|</span>
            <button className="font-medium hover:text-[#179080]">CH</button>
          </div>
        <div className="flex lg:hidden items-center space-x-4">
          {/* Toggle button */}
          <button ref={toggleRef} // ⬅️ NEW
        onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="nav-menu" className={`lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 ${scrolled ? "text-[#1A3C40]" : "text-[#F5F3EE]"}`}>
            {open ?
          // Close icon
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg> :
          // Hamburger
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>}
          </button>
        </div>
      </div>

      {/* Tablet/Mobile dropdown menu */}
      <div ref={menuRef} id="nav-menu" className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${open ? "max-h-64" : "max-h-0"}`}>
        <div className="mx-4 md:mx-6 mb-3 rounded-xl border border-gray-200 bg-white shadow">
          <ul className="py-2 text-base font-medium text-[#1A3C40]">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className={`block px-4 py-3 ${pathname === "/" ? "text-[#179080]" : "hover:text-teal-600"}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)} className={`block px-4 py-3 ${pathname === "/about" ? "text-[#179080]" : "hover:text-teal-600"}`}>
                About
              </Link>
            </li>
            <li><span className="block px-4 py-3 text-[#1A3C40] opacity-50">Impact (Coming soon)</span></li>
            <li className="hidden border-t border-gray-200 mt-1">
              <div className="flex items-center px-4 py-3 space-x-2 text-[#1A3C40]">
                <button className="font-medium hover:text-[#179080]">EN</button><span>|</span>
                <button className="font-medium hover:text-[#179080]">CH</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>;
}
