import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";

function Partners() {
  return (
    <div className="partners col-12">
      <div className="mil-mb-30">
        <h4 className="mil-appearance  ">OUR VALUED PARTNERS</h4>
        <p style={{ margin: "0 10%", textAlign: "center" }}>
          At Meri Technologies, we believe in the power of collaboration. Our
          valued partners play a crucial role in our journey towards innovation
          and excellence. Together, we explore new horizons and create
          remarkable solutions.
        </p>
      </div>
      {/* partners */}
      <div className="partner-swiper-container">
        <Swiper
          {...sliderProps.milInfinitySlider}
          className="swiper-container mil-infinite-show"
        >
          {Data.partners.map((item, key) => (
            <SwiperSlide key={`hero1-item-${key}`} className="swiper-slide">
              <a
                href={item.link}
                className="mil-partner-frame mil-hidden-trigger"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="mil-grayscale mil-opacity"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* partners end */}
    </div>
  );
}

export default Partners;
