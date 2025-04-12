import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import '../navbar.css'
const Navbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/');

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  // Function to handle scroll and update active link
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeLink = document.querySelector('a[href="#"]');
      const syllabusLink = document.querySelector('a[href="#syllabus"]');
      const registerLink = document.querySelector('a[href="#registration"]');
      const contactLink = document.querySelector('a[href="#contact"]');

      // Get section positions
      const syllabusSection = document.getElementById('syllabus');
      const registrationSection = document.getElementById('registration');
      const contactSection = document.getElementById('contact');

      if (!syllabusSection || !registrationSection || !contactSection) return;

      const syllabusPosition = syllabusSection.offsetTop - 100;
      const registrationPosition = registrationSection.offsetTop - 100;
      const contactPosition = contactSection.offsetTop - 100;

      // Remove all active classes
      homeLink?.classList.remove('active');
      syllabusLink?.classList.remove('active');
      registerLink?.classList.remove('active');
      contactLink?.classList.remove('active');

      // Add active class based on scroll position
      if (scrollPosition >= contactPosition) {
        contactLink?.classList.add('active');
      } else if (scrollPosition >= registrationPosition) {
        registerLink?.classList.add('active');
      } else if (scrollPosition >= syllabusPosition) {
        syllabusLink?.classList.add('active');
      } else {
        homeLink?.classList.add('active');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
        <>
            <nav className="fixed w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo and Title */}
                <a
                  href="#"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                    <img src="./logo.webp" className="h-10 rounded-xl border border-white/20 shadow-md" alt="GCEK Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">IoT & Embedded Systems</span>
                </a>

                {/* Mobile menu button */}
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={() => {
                    const menu = document.getElementById('navbar-default');
                    menu.classList.toggle('hidden');
                  }}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Navigation Menu */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="mobile-menu flex flex-col md:flex-row md:space-x-8 font-medium space-y-2 md:space-y-0">
                        {/* Home Link */}
                        <li>
                            <Link
                              to="/"
                              className={`nav-link block py-2 px-3 text-white hover:text-blue-300 md:p-0 transition-colors ${currentPath === '/' ? 'active' : ''}`}
                            >Home</Link>
                        </li>

                        {/* Syllabus Link */}
                        <li>
                            <a
                              href="#syllabus"
                              className="nav-link block py-2 px-3 text-white hover:text-blue-300 md:p-0 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('syllabus').scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }}
                            >Syllabus</a>
                        </li>

                        {/* Register Link */}
                        <li>
                            <a
                              href="#registration"
                              className="nav-link block py-2 px-3 text-white hover:text-blue-300 md:p-0 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('registration').scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }}
                            >Register</a>
                        </li>

                        {/* Contact Link */}
                        <li>
                            <a
                              href="#contact"
                              className="nav-link block py-2 px-3 text-white hover:text-blue-300 md:p-0 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact').scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }}
                            >Contact</a>
                        </li>

                        {/* GitHub Link */}
                        {/* <li>
                            <a
                              href="https://github.com/aruncs31s/iot_and_embedded_system_training_program_gcek"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="nav-link flex items-center py-2 px-3 text-white hover:text-blue-300 md:bg-slate-800/50 md:px-3 md:py-1 md:rounded-lg md:hover:bg-slate-700/50 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-1">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                              GitHub
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>

  )
}

export default Navbar
