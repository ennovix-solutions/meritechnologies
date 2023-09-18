import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import ParticlesDesign from "../Particles/ParticlesDesign";
import Typewriter from "typewriter-effect";

const HeroOne = () => {
  return (
    <header>
      <div className="mil-hero-1">
        <div className="container">
          <div className="row mil-p-90-0 justify-content-between">
            <ParticlesDesign />
            <div className="col-md-12 col-lg-6">
              <h1 className="mil-light mil-appearance ">
                {/* <span style={{ display: "flex" }}> */}
                {Data.title.before} {Data.title.after} {/* </span> */}
                <div style={{ display: "flex" }}>
                  for your{" "}
                  <span className="mil-accent" style={{ margin: "0 10px" }}>
                    <Typewriter
                      options={{
                        strings: Data.title.words,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </h1>
              <p className="mil-mb-30">{Data.description}</p>
              {/* buttons */}

              <div className="mil-appearance mil-mb-30">
                <Link
                  href={"#"}
                  className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space"
                >
                  <span>Explore</span>
                </Link>
                <Link href={"#"} className="mil-link-hover mil-link-hover-dark">
                  Contact us
                </Link>
              </div>
              {/* buttons end */}
            </div>
            <div className="col-lg-6">
              <div className="mil-dots mil-appearance" />
              {/* hero image */}
              <img
                src={Data.image}
                alt="img"
                className="mil-just-image"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeroOne;
