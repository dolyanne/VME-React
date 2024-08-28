import React from 'react'
import useScrollAnimation from './useScrollAnimation';

export default function ContactUs() {
    const sectionRef = useScrollAnimation('animate-fade-in');
  return (
  <section id="contact" className="bg-[#f5f5f5] text-[#210335]">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <div className="w-64 h-1 bg-white mx-auto mb-4" />
      <h2 className="text-4xl font-bold mt-10">
        <span className="text-[#4C1D95]">Contact</span> Us
      </h2>
    </div>
    <div className="pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 pt-10">
        <div className="md:font-bold md:px-10 py-6">
          <div>
            <div className=" text-2xl text-[#4C1D95] py-4 font-bold">
              Get In touch
            </div>
            <div className=" ">Contact us in any way convenient for you</div>
            <div className="  font-bold text-green">+233540150795</div>
          </div>
          <div>
            <div className=" text-2xl text-[#4C1D95] py-4 font-bold">
              Address
            </div>
            <div className=" ">Virtual Landscape</div>
          </div>
          <div>
            <div className=" text-xl text-[#4C1D95] py-4 font-bold">
              Time of operation
            </div>
            <div className=" ">Mon - Fri: 8:00 – 17:00</div>
            <div className="">Sat - Sun: day off</div>
          </div>
          <div>
            <div className=" text-2xl text-[#4C1D95] py-4 font-bold">
              Emails
            </div>
            <div className="">HwVJl@example.com</div>
          </div>
        </div>
        <div ref={sectionRef} className="md:border-l-4 px-10 flex items-center justify-center">
          <img
            alt="call"
            className="rounded-3xl"
            src="https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
