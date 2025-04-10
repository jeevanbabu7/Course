import React from 'react'
import { Outlet } from 'react-router'
import '../navbar.css'
const Navbar = () => {
  // Function to handle scroll and update active link
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeLink = document.querySelector('a[href="#"]');
      const registerLink = document.querySelector('a[href="#registration"]');
      const contactLink = document.querySelector('a[href="#contact"]');

      // Get section positions
      const registrationSection = document.getElementById('registration');
      const contactSection = document.getElementById('contact');

      if (!registrationSection || !contactSection) return;

      const registrationPosition = registrationSection.offsetTop - 100;
      const contactPosition = contactSection.offsetTop - 100;

      // Remove all active classes
      homeLink?.classList.remove('active');
      registerLink?.classList.remove('active');
      contactLink?.classList.remove('active');

      // Add active class based on scroll position
      if (scrollPosition >= contactPosition) {
        contactLink?.classList.add('active');
      } else if (scrollPosition >= registrationPosition) {
        registerLink?.classList.add('active');
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
                            <a
                              href="#"
                              className="nav-link block py-2 px-3 text-white hover:text-blue-300 md:p-0 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({
                                  top: 0,
                                  behavior: 'smooth'
                                });
                              }}
                            >Home</a>
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
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>

  )
}

export default Navbar
