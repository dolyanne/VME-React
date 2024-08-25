import React from 'react'

export default function Upcoming() {
  return (
    <section
    id="services"
    className="py-16 px-4 relative overflow-hidden bg-[#4C1D95]"
  >
    {/* Background Circles */}
    <div className="circle bg-purple-600 w-56 h-56 top-16 left-16 opacity-50" />
    <div className="circle bg-purple-700 w-40 h-40 top-1/4 right-1/4 opacity-75" />
    <div className="circle bg-pink-500 w-32 h-32 bottom-1/4 left-1/4 opacity-50" />
    <div className="circle bg-purple-800 w-24 h-24 bottom-16 right-16 opacity-75" />
    <section className="section">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="w-full" />
        <div className="absolute -top-40 left-0">
          <div className="p-4 bg-[#210335] rounded-full w-fit shadow-lg">
            <img
              src="/img/images/hero.banner.png"
              alt="Testimonial placeholder image"
              className="h-[15rem] lg:h-[30rem] rounded-full"
            />
          </div>
        </div>
        <div className="p-10">
          <div className="mb-8 text-left ">
            {/* Bar above heading */}
            <div className="w-24 h-1 bg-pink-500 mb-4" />
            <h2 className="text-5xl leading-normal font-bold mb-4 text-white">
              Our Upcoming <br />{" "}
              <span className="text-pink-500">Creative</span> Events
            </h2>
          </div>
          <p className="mb-8 text-white text-left">
            At VME Pinnacle Solutions, we believe in the power of partnership
            and innovation to drive success. Founded with a vision to help
            businesses and organizations reach their highest potential, we are a
            consulting firm that delivers top-tier solutions, Trainings and
            strategic insights.
          </p>
        </div>
      </div>
    </section>
    <div className="container mx-auto text-center relative z-10 pb-10">
      <div className="flex justify-center items-center flex-wrap md:gap-8 gap-10">
        {/* Service 1 */}
        <div className="w-[25rem] bg-purple-700 rounded-lg overflow-hidden shadow-lg p-10 border-4 border-[#712e9e] hover:scale-105 duration-300">
          <h3 className="text-3xl font-bold mb-4">10 July 2023</h3>
          <p className="py-2">Venue</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="w-[25rem] bg-white rounded-lg overflow-hidden scale-105 ring-4 ring-white shadow-lg p-10 border-4 border-[#712e9e] hover:scale-105 duration-300">
          <h3 className="text-3xl font-bold mb-4 text-[#210335]">
            10 July 2023
          </h3>
          <p className="py-2 text-[#210335]">Venue</p>
          <p className="text-[#210335]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="w-[25rem] bg-purple-700 rounded-lg overflow-hidden shadow-lg p-10 border-4 border-[#712e9e] hover:scale-105 duration-300">
          <h3 className="text-3xl font-bold mb-4">10 July 2023</h3>
          <p className="py-2">Venue</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
