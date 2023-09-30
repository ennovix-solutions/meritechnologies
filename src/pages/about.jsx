import { useEffect } from "react";
import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import CountersSection from "@components/sections/Counters";

import Data from "@data/sections/about.json";

import "photoswipe/dist/photoswipe.css";

import { cursorSwiperAnimation } from "@/src/common/cursor";
import TeamSection from "../components/sections/Team";

const About = (props) => {
  useEffect(() => {
    cursorSwiperAnimation();
  }, []);

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/2.jpg"} pageTitle={"About 2"} />

      {/* about */}
      <div className="container mil-content-frame mil-p-120-0">
        <div className="row justify-content-between align-items-center">
          <div className="mil-12 col-xl-5 mil-mb-120">
            <div className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Data.about3.subtitle}
            </div>
            <h3 className="mil-appearance mil-mb-30">{Data.about3.title}</h3>
            <p className="mil-appearance mil-mb-30">{Data.about3.text_1}</p>
            <p className="mil-appearance mil-mb-30">{Data.about3.text_2}</p>
          </div>
          <div className="mil-12 col-xl-6 mil-mb-120">
            {/* collage */}
            <div className="mil-collage-1">
              <div
                className="mil-circle-text-position"
                style={{ bottom: "62%", left: "-75px" }}
              >
                <div
                  className="mil-circle-text mil-rotate mil-accent-inside mil-appearance"
                  data-value="360"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text
                        className="mil-link mil-dark"
                        style={{ letterSpacing: "5.5px" }}
                      >
                        {/* circle text */}
                        <textPath xlinkHref="#circlePath">
                          meri technologies - meri techs -
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mil-image-1 mil-appearance">
                <div className="mil-just-image mil-image-square">
                  {/* back image */}
                  <img
                    src={Data.about3.image1}
                    alt="img"
                    className="mil-scale-img"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
              <div className="mil-image-2 mil-appearance">
                {/* <div className="mil-just-image"> */}
                {/* front image */}
                {/* <img
                    src={Data.about3.image2}
                    alt="img"
                    style={{ objectPosition: "right" }}
                  />
                </div> */}
              </div>
            </div>
            {/* collage end */}
          </div>
        </div>
      </div>
      {/* about end */}

      {/* about */}
      <div className="container mil-content-frame mil-appearance ">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Data.about4.subtitle}
            </span>
            <h3 className="mil-appearance mil-mb-30">{Data.about4.title}</h3>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <p className="mil-first-letter mil-appearance mil-mb-30">
                  {Data.about4.text_1}
                </p>
              </div>
              <div className="col-lg-6">
                <p className="mil-appearance mil-mb-30">{Data.about4.text_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* gallery */}
      {/* <div className="container mil-p-0-120">
        <Gallery>
          <Swiper
            {...sliderProps.milGallerySlider}
            className="swiper-container mil-gallery-slider mil-appearance"
          >
            {Data.gallery.map((item, key) => (
              <SwiperSlide className="swiper-slide" key={`gallery-item-${key}`}>
                <Item
                  original={item.url}
                  thumbnail={item.url}
                  width={item.width}
                  height={item.height}
                >
                  {({ ref, open }) => (
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      ref={ref}
                      onClick={open}
                      className="mil-just-image mil-image-hori mil-icon-3-trigger"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={item.url}
                        alt="img"
                        className="mil-scale-img"
                        data-value-1="1"
                        data-value-2="1.2"
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Gallery>
      </div> */}
      {/* gallery end */}

      <CountersSection />
      <CallToActionSection />
      <TeamSection />
    </Layouts>
  );
};
export default About;
