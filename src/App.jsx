
import './App.css'
import { ReactLenis } from 'lenis/react';
import Form from './pages/Form';
export default function App() {
  return (
    <ReactLenis root>
      <main>
        <article>
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 relative">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full opacity-50"
            style={{ backgroundImage: "url('/hero.jpg')" }} // Replace with actual image path
          ></div>

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better text visibility */}

          <div className="relative text-center px-8 max-w-4xl">
            <h1 className="2xl:text-7xl text-5xl font-bold tracking-tight leading-[120%]">
              Unlock Your Potential with IoT and Embedded System Training Program
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Enhance your skills with expertly designed course from GCEK. Start your journey today!
            </p>
            {/* Course Details Box */}
            <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-2xl mx-auto shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-3 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Course Schedule</h3>
                    <p className="text-xl font-semibold">
                      <span className="bg-yellow-500/30 px-2 py-0.5 rounded">April/May</span>
                      <span className="ml-2 text-green-400">(Hybrid Mode)</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Registration Deadline</h3>
                    <p className="text-xl font-bold text-red-400">20th April 2025</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 md:pt-0 md:pl-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Course Fee</h3>
                    <p className="text-xl font-bold">₹5000 + GST</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Mode</h3>
                    <p className="text-xl font-semibold">Online & In-Person Sessions</p>
                  </div>

                  <a
                    href="#registration"
                    className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('registration').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



          <section id="registration" className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            {/* <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              If you don't like this then I'm sorry, <br /> create your own and
              make it open source 💼
            </h1> */}
            <Form />
          </section>
          <section id="contact" className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="text-center px-8 z-10">
              <h1 className="2xl:text-7xl text-5xl font-semibold tracking-tight leading-[120%]">
                Enroll in IoT and Embedded System Program
              </h1>
              <div className="mt-4 mb-2">
                {/* <span className="bg-yellow-500/30 text-white font-semibold px-4 py-1 rounded-lg inline-block">
                  April/May (Hybrid Mode)
                </span> */}
              </div>
              <p className="mt-2 text-lg max-w-2xl mx-auto">
                Join our specialized courses offered by GCEK and enhance your knowledge
                with expert-led curriculum. Register now to secure your spot!
              </p>
              <p className="mt-2 text-xl font-bold text-yellow-400">
                Registration ends on 20th April 2025
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://drive.google.com/file/d/112WrCukPRbl3_zwXTTJF2OIJ5IUcIoOo/view?usp=sharing"
                  download
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition pointer"
                >
                  Download Syllabus
                </a>
                <a
                  href="#registration"
                  className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('registration').scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Register Now
                </a>
              </div>
            </div>
            <div className="pt-10 mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-2xl mx-auto shadow-xl z-50 relative">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-all hover:bg-gray-700/50 hover:border-green-500/50 group col-span-1 md:col-span-2">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                      <a href="tel:+919876543210" className="text-green-300 group-hover:text-green-400 font-medium transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-all hover:bg-gray-700/50 hover:border-blue-500/50 group">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Course Coordinator</p>
                      <a href="mailto:arjuntc@gcek.ac.in" className="text-blue-300 group-hover:text-blue-400 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                        arjuntc@gcek.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-all hover:bg-gray-700/50 hover:border-blue-500/50 group">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Program Coordinator</p>
                      <a href="mailto:sajesh@gcek.ac.in" className="text-blue-300 group-hover:text-blue-400 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                        sajesh@gcek.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>



          </section>

        </article>
      </main>
    </ReactLenis>
  );
}

