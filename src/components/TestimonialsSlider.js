import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// Install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function TestimonialsSlider() {
  return (
    <div className="testimonials-slider bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">
                "This product has changed my life! Highly recommend it to
                everyone."
              </p>
              <h4 className="text-xl font-semibold text-gray-900">- John Doe</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">
                "Amazing service and top-notch support. Couldn't be happier!"
              </p>
              <h4 className="text-xl font-semibold text-gray-900">- Jane Smith</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">
                "The best investment I've made in years. Outstanding results."
              </p>
              <h4 className="text-xl font-semibold text-gray-900">- Sarah Brown</h4>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
}
