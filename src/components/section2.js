import React from 'react'
import useScrollAnimation from './useScrollAnimation';

export default function PricePlans() {
    const sectionRef = useScrollAnimation('animate-section');
  return (
    <div id='pricing' className="bg-gray-200 pb-10 px-2">
    <section className="section py-24">
      <div className="flex justify-center ">
        <div className="pt-2">
          <div className="w-24  h-1 bg-[#210335] mb-4" />
          <div className=" text-5xl font-bold text-[#210335] pb-28">
            Price <span className="text-purple-600">Plans</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {/* Basic Plan Card */}
        <div className="card bg-[#a038eb]">
          {/* <div class="badge">Basic</div> */}
          <div className="card-title text-[#d9a6f9] font-bold">Basic</div>
          <div className="card-price text-[#d9a6f9]">$199</div>
          <ul className="card-content list-disc list-inside text-left space-y-2">
            <li>Lorem ipsum dolor sit</li>
            <li>Amet, consectetur</li>
            <li>Adipiscing elit, sed do</li>
            <li>Eiusmod tempor</li>
            <li>Incidunt ut labore et</li>
            <li>Dolore magna aliqua. Ut</li>
            <li>Enim ad minim veniam</li>
          </ul>
        </div>
        {/* Standard Plan Card (Highlighted) */}
        <div className="card transform scale-100 lg:scale-125 card-highlighted text-[#a038eb] bg-white">
          {/* <div class="badge">Best Price</div> */}
          <div className="ribbon">
            <span>Best Price</span>
          </div>
          <div className="card-title">Standard</div>
          <div className="card-price">$299</div>
          <ul className="card-content list-disc list-inside text-left space-y-2">
            <li>Lorem ipsum dolor sit</li>
            <li>Amet, consectetur</li>
            <li>Adipiscing elit, sed do</li>
            <li>Eiusmod tempor</li>
            <li>Incidunt ut labore et</li>
            <li>Dolore magna aliqua. Ut</li>
            <li>Enim ad minim veniam</li>
          </ul>
        </div>
        {/* Premium Plan Card */}
        <div className="card bg-[#a038eb]">
          {/* <div class="badge">Premium</div> */}
          <div className="card-title text-[#d9a6f9] font-bold">Premium</div>
          <div className="card-price text-[#d9a6f9]">$599</div>
          <ul className="card-content list-disc list-inside text-left space-y-2">
            <li>Lorem ipsum dolor sit</li>
            <li>Amet, consectetur</li>
            <li>Adipiscing elit, sed do</li>
            <li>Eiusmod tempor</li>
            <li>Incidunt ut labore et</li>
            <li>Dolore magna aliqua. Ut</li>
            <li>Enim ad minim veniam</li>
          </ul>
        </div>
      </div>
      {/* Decorative Circles */}
      <div className="overflow-hidden relative">
        <div
          className="circle circle-large"
          style={{ top: "-100px", right: "-200px" }}
        />
      </div>
      <div
        className="circle circle-small"
        style={{ bottom: "-50px", left: "-50px" }}
      />
    </section>
    <div ref={sectionRef} id="hero" className=" p-10 md:p-20">
      <div className="relative w-full min-h-96 rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <a href="#">
          <img
            src="/img/images/hero.banner-3.jpg"
            alt="Hero image"
            className="w-full h-[25rem] md:h-[40rem] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-opacity-60 backdrop-blur-2xl text-left">
            <h1 className="text-3xl pb-4 font-bold text-[#210335]">
              Sample Title Here
            </h1>
            <p className=" text-white">
              Rullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}
