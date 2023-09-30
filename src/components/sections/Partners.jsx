import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/partners.json";
import Link from "next/link";

function Partners() {
  return (
    <div className="partners col-12" id="partners">
      <div className="container mil-p-120-90">
        <div className="row justify-content-between mil-mb-120">
          <div className="col-xl-5">
            <h3 className="mil-link mil-accent mil-mb-30">{Data.subtitle}</h3>
            <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>
          </div>
          <div className="col-xl-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Data.description}
            </p>
            {/* button */}
            <div className="mil-appearance">
              <Link href={Data.more.link} className="mil-link-hover">
                {Data.more.label}
              </Link>
            </div>
          </div>
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
                    width={100}
                    className="mil-grayscale mil-opacity"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* partners end */}
      </div>
    </div>
  );
}

export default Partners;
