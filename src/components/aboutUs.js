import React from 'react';
import useScrollAnimation from './useScrollAnimation';

export default function About() {
  const sectionRef = useScrollAnimation('animate-section');

  return (
    <div className="">
      <section
        className="relative parallax-bg py-20 "
        data-parallax="scroll"
        data-image-src="/img/images/hero.banner-3.jpg"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <h2 className="section-title text-center pt-10  relative z-10">About Us</h2>
        <div
          ref={sectionRef}
          className="relative z-10 flex flex-col lg:flex-row justify-center items-start gap-8"
        >
          <div className="w-full flex justify-center">
            <div className="relative w-full flex items-end">
              {/* Left Frame */}
              <div className="relative h-[15rem] md:h-[25rem] w-[45%] overflow-hidden">
                <img
                  src="/img/images/hero.banner.png"
                  alt="Testimonial placeholder image"
                  className="absolute inset-0 h-full object-cover transform transition-transform duration-1000 ease-out translate-x-[-30%] animate-left-frame"
                />
              </div>
              {/* Gap between frames */}
              <div className="w-4 bg-transparent" />
              {/* Right Frame */}
              <div className="relative h-[15rem] md:h-[30rem] w-[55%] overflow-hidden">
                <img
                  src="/img/images/hero.banner.png"
                  alt="Testimonial placeholder image"
                  className="absolute inset-0 h-full object-cover transform transition-transform duration-1000 ease-out translate-x-[30%] animate-right-frame"
                />
              </div>
            </div>
          </div>
          <div className="p-10 opacity-0 transition-opacity duration-1000 animate-fade-in">
            <div className="mb-8 text-left">
              {/* Bar above heading */}
              <div className="w-24 h-1 bg-[#210335] mb-4" />
              <h2 className="text-4xl font-bold mb-4 ">
                Welcome to <span className="text-pink-500">VME</span> Pinnacle
                Solutions
              </h2>
            </div>
            <p className="mb-8  text-left">
              At VME Pinnacle Solutions, we believe in the power of partnership
              and innovation to drive success. Founded with a vision to help
              businesses and organizations reach their highest potential, we are a
              consulting firm that delivers top-tier solutions, Trainings and
              strategic insights.
            </p>
            <p className="mb-8  text-left">
              Our slogan, "Reaching New Heights Together," encapsulates our
              commitment to collaboration and excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}