import React from 'react'
import useScrollAnimation from './useScrollAnimation';

export default function Mockup() {
    const sectionRef = useScrollAnimation('animate-section');
  return (
    <div className="bg-white pb-10 px-2 md:px-10">
    <section className="section">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div ref={sectionRef} className="w-full flex rounded-lg overflow-hidden justify-center">
          <img
            src="/img/images/hero.banner-8.jpg"
            alt="Testimonial placeholder image"
            className="md:h-80 rounded-xl"
          />
        </div>
        <div className="p-10">
          <div className="mb-8 text-left ">
            {/* Bar above heading */}
            <div className="w-24 h-1 bg-[#210335] mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-[#210335]">
              Mock-up <span className="text-pink-500">Website</span>
            </h2>
          </div>
          <p className="mb-8 text-[#210335] text-left">
            At VME Pinnacle Solutions, we believe in the power of partnership
            and innovation to drive success. Founded with a vision to help
            businesses and organizations reach their highest potential, we are a
            consulting firm that delivers top-tier solutions, Trainings and
            strategic insights.
          </p>
          <p className="mb-8 text-[#210335] text-left">
            Our slogan, "Reaching New Heights Together," encapsulates our
            commitment to collaboration and excellence.
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}
