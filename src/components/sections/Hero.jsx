import Data from "@data/sections/hero.json";
import Link from "next/link";
import ParticlesDesign from "../Particles/ParticlesDesign";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="hero-container">
      <div className="mil-hero-3">
        <div className="mil-dots" />

        <div className="container">
          <h1
            className="mil-mb-30 mil-appearance"
            dangerouslySetInnerHTML={{ __html: Data.title }}
          />
          <h1 className="mil-accent typewriter">
            <Typewriter
              options={{
                strings: Data.words,
                autoStart: true,
                loop: true,
                wrapperClassName: "",
                cursorClassName: "",
              }}
            />
          </h1>

          {/* buttons */}
          <div className="buttons mil-appearance mil-mb-30">
            <Link
              href={Data.button1.link}
              className="mil-button mil-button-rounded mil-button-md mil-button-light mil-scale-down-trigger mil-accent-trigger mil-buttons-space"
            >
              <span>{Data.button1.label}</span>
            </Link>
            <Link
              href={Data.button2.link}
              className="mil-link-hover mil-scale-down-trigger mil-light"
            >
              {Data.button2.label}
            </Link>
          </div>
          {/* buttons end */}
        </div>
      </div>
      <ParticlesDesign />
    </header>
  );
};
export default Hero;
