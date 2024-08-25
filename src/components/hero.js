import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero min-h-screen bg-cover bg-center">
    <div className="bg-black bg-opacity-60 min-h-full flex items-center justify-center">
      <div className="">
        <div className="text-center ">
          <h1 className="hero-title text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="vme-consulting lg:text-7xl">VME CONSULTING</span>
          </h1>
          <p className="hero-subtitle text-2xl mb-8">
            Explore our amazing products.
          </p>
          <a
            href="#pricing"
            className="cta-button bg-purple-600 hover:bg-purple-500 text-white py-4 px-8 rounded-full text-lg font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
