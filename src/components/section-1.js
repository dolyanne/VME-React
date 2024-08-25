import React from 'react'
import useScrollAnimation from './useScrollAnimation';

export default function Improving() {
    const sectionRef = useScrollAnimation('animate-fader-in');
    const secRef = useScrollAnimation('animate-fader-in');
  return (
    <section
    id="services"
    className="py-16 relative overflow-hidden bg-[#4C1D95]"
  >
    {/* Background Circles */}
    <div className="circle bg-purple-600 w-56 h-56 top-16 left-16 opacity-50" />
    <div className="circle bg-purple-700 w-40 h-40 top-1/4 right-1/4 opacity-75" />
    <div className="circle bg-pink-500 w-32 h-32 bottom-1/4 left-1/4 opacity-50" />
    <div className="circle bg-purple-800 w-24 h-24 bottom-16 right-16 opacity-75" />
    <div className="container mx-auto text-center relative z-10">
      <section className="">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          <div ref={sectionRef} className="p-10 w-full">
            <div className="mb-8 text-left w-full">
              {/* Bar above heading */}
              <div className="w-24 h-1 bg-[#210335] mb-4" />
              <h2 className="text-3xl md:text-5xl leading-normal font-bold mb-4 text-white capitalize">
                Start <span className="text-pink-500">Improving</span>
                <br /> your business today
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex">
                {" "}
                <div className="p-10 bg-[#210335] rounded-lg">hi</div>
              </div>
              <div className="text-left">
                <h2 className="text-pink-500 text-2xl font-semibold">
                  Title Here
                </h2>
                <p>
                  Rullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in .
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex">
                {" "}
                <div className="p-10 bg-[#210335] rounded-lg">hi</div>
              </div>
              <div className="text-left">
                <h2 className="text-pink-500 text-2xl font-semibold">
                  Title Here
                </h2>
                <p>
                  Rullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in .
                </p>
              </div>
            </div>
          </div>
          <div className="w-full" />
          <div className=" absolute -bottom-40 -right-20 lg:-right-60">
            <div className="p-4 bg-[#210335] rounded-full w-fit shadow-lg">
              <img
              ref={secRef}
                src="/img/images/hero.banner.png"
                alt="Testimonial placeholder image"
                className="h-[15rem] md:h-[16rem] lg:h-[40rem] rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  )
}
