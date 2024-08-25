import React from 'react'
import useScrollAnimation from './useScrollAnimation';

export default function CreativePP() {
    const sectionRef = useScrollAnimation('animate-fade-in');
  return (
    <section id="product-plan" className="py-16 relative">
    {/* Background Circles */}
    <div ref={sectionRef}>
    <div className="circle bg-purple-600 w-72 h-72 top-0 left-0 opacity-50" />
    {/* <div className="circle bg-purple-700 w-40 h-40 top-1/4 right-1/4 opacity-75" /> */}
    {/* <div className="circle bg-pink-500 w-32 h-32 bottom-1/4 left-1/4 opacity-50" /> */}
    {/* <div className="circle bg-purple-800 w-24 h-24 bottom-16 right-16 opacity-75" /> */}
    </div>
    <div className="container mx-auto    ">
      <div className="md:flex justify-center hidden ">
        <div className="pt-10">
          <div className="w-24  h-1 bg-white mb-4" />
          <div className=" text-5xl font-bold text-white pb-28">
            Features <span className="text-pink-500">We Offer</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6">
          <div className="mb-8">
            {/* Bar above heading */}
            <div className="w-24 h-1 bg-white mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-pink-500">Creative</span> Product Plan
            </h2>
            <p className="text-gray-400">Get Different Things</p>
          </div>
          <p className="mb-8">
            Rullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        {/* Right Content */}
        <div className="w-full lg:w-1/2 px-6 flex flex-col items-center relative">
          {/* Card 1 */}
          <div className="bg-purple-700 rounded-lg shadow-lg p-6 mb-12 w-full lg:w-3/4">
            <h3 className="text-xl font-bold mb-4">Connect Your Wallet</h3>
            <p className="text-yellow-400 text-2xl font-bold mb-2">0.25 BTC</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Yellow Line */}
          <div className="yellow-line top-40" />
          {/* Card 2 */}
          <div className="bg-purple-700 rounded-lg shadow-lg p-6 mb-12 w-full lg:w-3/4">
            <h3 className="text-xl font-bold mb-4">Connect Your Wallet</h3>
            <p className="text-yellow-400 text-2xl font-bold mb-2">0.25 BTC</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Yellow Line */}
          <div className="yellow-line top-96" />
          {/* Card 3 */}
          <div className="bg-purple-700 rounded-lg shadow-lg p-6 mb-12 w-full lg:w-3/4">
            <h3 className="text-xl font-bold mb-4">Connect Your Wallet</h3>
            <p className="text-yellow-400 text-2xl font-bold mb-2">0.25 BTC</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
        className="circle circle-small"
        style={{ bottom: "-50px",  right:"-5px"}}
      />
        </div>
      </div>
    </div>
  </section>
  )
}
