import React from 'react'

export default function Testimonial() {
  return (
    <div id='testimonials' className="bg-white pb-10 px-2 md:px-10">
    <section className="section">
      <h2 className="section-title text-[#210335]">Testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="testimonial ">
          <img
            src="/img/images/hero.banner.png"
            alt="Testimonial placeholder image"
            className="testimonial-image"
          />
          <p className="testimonial-content text-[#210335]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <div className="testimonial-author">- John Doe</div>
        </div>
        <div className="testimonial ">
          <img
            src="/img/images/hero.banner.png"
            alt="Testimonial placeholder image"
            className="testimonial-image"
          />
          <p className="testimonial-content text-[#210335]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <div className="testimonial-author">- John Doe</div>
        </div>
        <div className="testimonial ">
          <img
            src="/img/images/hero.banner.png"
            alt="Testimonial placeholder image"
            className="testimonial-image"
          />
          <p className="testimonial-content text-[#210335]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <div className="testimonial-author">- John Doe</div>
        </div>
      </div>
    </section>
  </div>
  )
}
