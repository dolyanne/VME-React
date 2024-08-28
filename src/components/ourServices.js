import React from 'react'

export default function Amazing() {
  return (
    <section id="services" className="py-32 relative">
    {/* Background Circles */}
    <div className="circle bg-purple-600 w-56 h-56 top-16 left-16 opacity-50" />
    <div className="circle bg-purple-700 w-40 h-40 top-1/4 right-1/4 opacity-75" />
    <div className="circle bg-pink-500 w-32 h-32 bottom-1/4 left-1/4 opacity-50" />
    <div className="circle bg-purple-800 w-24 h-24 bottom-16 right-16 opacity-75" />
    <div className="container mx-auto text-center relative z-10">
      <div className="w-64 h-1 bg-white mx-auto mb-4" />
      <h2 className="text-4xl font-bold mb-12">
        Our <span className="text-pink-500">Amazing</span> Services
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {/* Service 1 */}
        <div className="w-80 rounded-lg overflow-hidden shadow-lg relative">
          <img src="/img/images/hero.banner.png" alt="Service 1" />
          <div className="bg-purple-700 p-6 absolute bottom-0 w-full">
            <h3 className="text-xl font-bold mb-4">
              Powerpoint Templates <span className="text-xl">🏠</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Ready slides editable for presentations</li>
              <li>Presentation Aesthetics</li>
              <li>Trainings, webinars</li>
            </ul>
          </div>
        </div>
        {/* Service 2 */}
        <div className="w-80 rounded-lg overflow-hidden shadow-lg relative">
          <img src="/img/images/hero.banner.png" alt="Service 2" />
          <div className="bg-purple-700 p-6 absolute bottom-0 w-full">
            <h3 className="text-xl font-bold mb-4">
              Power BI <span className="text-xl">🔔</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="w-80 rounded-lg overflow-hidden shadow-lg relative">
          <img src="/img/images/hero.banner.png" alt="Service 3" />
          <div className="bg-purple-700 p-6 absolute bottom-0 w-full">
            <h3 className="text-xl font-bold mb-4">
              Data Science &amp; Analytics <span className="text-xl">🚀</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
