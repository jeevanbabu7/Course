
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
              Unlock Your Potential with IoT and Embedded system Traning Program
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Enhance your skills with expertly designed course from GCEK. Start your journey today!
            </p>

            {/* Price Details Section */}
            <div className="mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-xl inline-block">
              <p className="mt-2 text-xl font-bold">Total price: ₹5000 + GST</p>
            </div>
          </div>
        </section>



          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            {/* <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              If you don't like this then I'm sorry, <br /> create your own and
              make it open source 💼
            </h1> */}
            <Form />
          </section>
          <section id="contact" className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="text-center px-8 z-50">
              <h1 className="2xl:text-7xl text-5xl font-semibold tracking-tight leading-[120%]">
                Enroll in  IoT and Embedded system Programe 
              </h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                Join our specialized courses offered by GCEK and enhance your knowledge 
                with expert-led curriculum. Register now to secure your spot!
              </p>
              <a
                href="https://drive.google.com/file/d/112WrCukPRbl3_zwXTTJF2OIJ5IUcIoOo/view?usp=sharing"
                download
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition pointer"
              >
                Download Syllabus
              </a>
            </div>
            <div
                className="pt-10 mt-10 bg-gray-800 p-6 rounded-2xl shadow-lg z-50 relative"
                
              >
                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>

                <p className="text-lg text-blue-400 hover:underline">
                  <a href="mailto:arjuntc@gcek.ac.in" target="_blank" rel="noopener noreferrer">
                    arjuntc@gcek.ac.in
                  </a>
                </p>

                <p className="text-lg text-blue-400 hover:underline">
                  <a href="mailto:sagesh@gcek.ac.in" target="_blank" rel="noopener noreferrer">
                    sajesh@gcek.ac.in
                  </a>
                </p>
              </div>



          </section>

        </article>
      </main>
    </ReactLenis>
  );
}

