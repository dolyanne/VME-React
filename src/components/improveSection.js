import React from "react";
import useScrollAnimation from "./useScrollAnimation";
function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 256 256"
      {...props}
    >
      <g strokeWidth={0} strokeMiterlimit={10} fill="#ffff00">
        <path
          d="M87.994 0H69.342c-1.787 0-2.682 2.16-1.418 3.424l5.795 5.795-33.82 33.82-11.843-11.843-3.174-3.174a2.75 2.75 0 00-3.889 0L.805 48.209a2.75 2.75 0 000 3.889l3.174 3.174a2.75 2.75 0 003.889 0l15.069-15.069 14.994 14.994a2.75 2.75 0 003.889 0l1.614-1.614c.083-.066.17-.125.247-.202l37.1-37.1 5.795 5.795C87.84 23.34 90 22.445 90 20.658V2.006A2.006 2.006 0 0087.994 0z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M65.626 37.8v49.45a2.75 2.75 0 002.75 2.75h8.782a2.75 2.75 0 002.75-2.75V23.518L65.626 37.8zM47.115 56.312V87.25a2.75 2.75 0 002.75 2.75h8.782a2.75 2.75 0 002.75-2.75V42.03L47.115 56.312zM39.876 60.503a7.202 7.202 0 01-5.127-2.124l-6.146-6.145V87.25a2.75 2.75 0 002.75 2.75h8.782a2.75 2.75 0 002.75-2.75V59.844a7.212 7.212 0 01-3.009.659zM22.937 46.567L11.051 58.453a7.265 7.265 0 01-.959.8V87.25a2.75 2.75 0 002.75 2.75h8.782a2.75 2.75 0 002.75-2.75V48.004l-1.437-1.437z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
      </g>
    </svg>
  )
}
export default function Improving() {
  const sectionRef = useScrollAnimation("animate-fader-in");
  const secRef = useScrollAnimation("animate-fader-in");
  return (
    <section
      id="services"
      className="py-16 relative overflow-hidden bg-[#4C1D95]"
    >
      {/* Background Circles */}
      {/* <div className="circle bg-purple-600 w-56 h-56 top-16 left-16 opacity-50" /> */}
      <div className="circle bg-purple-700 w-64 h-56 top-1/4 right-1/4 opacity-75" />
      {/* <div className="circle bg-pink-500 w-32 h-32 bottom-1/4 left-1/4 opacity-50" />
    <div className="circle bg-purple-800 w-24 h-24 bottom-16 right-16 opacity-75" /> */}
      <div className="container mx-auto text-center relative z-10">
        <section className="">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
            <div ref={sectionRef} className="p-10 w-full">
              <div className="mb-8 text-left w-full">
                {/* Bar above heading */}
                <div className="w-64 h-1 bg-[#fff] mb-4" />
                <h2 className="text-3xl md:text-5xl leading-normal font-bold mb-4 text-white capitalize">
                  Start <span className="text-[#ffff00]">Improving</span>
                  <br /> your business today
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex">
                  {" "}
                  <div className="p-10 bg-purple-600 rounded-lg">
                    <span>
                    <SvgComponent size ={20}/>
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-[#ffff00] text-2xl font-semibold">
                    Title Here
                  </h2>
                  <p>
                    Rullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in .
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex">
                  {" "}
                  <div className="p-10  bg-purple-600  rounded-lg"><span>
                  <SvgComponent size ={20}/></span></div>
                </div>
                <div className="text-left">
                  <h2 className="text-[#ffff00] text-2xl font-semibold">
                    Title Here
                  </h2>
                  <p>
                    Rullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full" />
            <div className=" absolute -bottom-40 -right-20 lg:-right-60">
              <div className="p-1 bg-white rounded-full w-fit shadow-lg">
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
  );
}
