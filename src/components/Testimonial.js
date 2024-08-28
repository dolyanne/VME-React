import React from "react";

export default function Testimonial() {
  return (
    <div id="testimonials" className="bg-white pb-10 px-4 md:px-10">
      <section className="section">
        <h2 className="section-title text-[#210335] text-3xl md:text-4xl font-bold text-center mb-8">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="testimonial flex flex-col items-center text-center md:w-1/3">
            <img
              src="/img/images/hero.banner.png"
              alt="Testimonial placeholder image"
              className="testimonial-image w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <p className="testimonial-content text-[#210335] text-sm md:text-base mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="testimonial-author text-[#210335] font-semibold">
              - John Doe
            </div>
          </div>

          <div className="testimonial flex flex-col items-center text-center md:w-1/3">
            <img
              src="/img/images/hero.banner.png"
              alt="Testimonial placeholder image"
              className="testimonial-image w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <p className="testimonial-content text-[#210335] text-sm md:text-base mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="testimonial-author text-[#210335] font-semibold">
              - Jane Smith
            </div>
          </div>

          <div className="testimonial flex flex-col items-center text-center md:w-1/3">
            <img
              src="/img/images/hero.banner.png"
              alt="Testimonial placeholder image"
              className="testimonial-image w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <p className="testimonial-content text-[#210335] text-sm md:text-base mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="testimonial-author text-[#210335] font-semibold">
              - Sarah Brown
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
