import { useEffect } from "react";
import Layouts from "@layouts/Layouts";

import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";
import CountersSection from "@components/sections/Counters";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import { cursorSwiperAnimation } from "@/src/common/cursor";
import TeamSection from "../components/sections/Team";

const About2 = (props) => {
  useEffect(() => {
    cursorSwiperAnimation();
  }, []);

  const Content = {
    about1: {
      subtitle: "Our Story",
      // title: "Crafting Excellence Through Words",
      title: "We Help You Embrace Digital The World",
      text_1: `At Meri Technologies, our commitment goes beyond merely providing services; we are dedicated partners in your business's digital evolution. 
        With a deep understanding of market trends and consumer behavior, we craft strategies that resonate with your audience. Our relentless pursuit
         of perfection and our creative minds constantly pushing boundaries mean that your brand doesn't just get noticed, it becomes a phenomenon.`,
      text_2: `
      We 
      don't just build websites; we create immersive digital experiences. We don't just run marketing campaigns, we tell captivating stories. When you 
      choose Meri Technologies, you're not just hiring a digital agency, you're enlisting a team of visionaries who are as passionate about your success 
      as you are. Let's redefine your digital presence together, making your brand not just relevant, but extraordinary.
     `,
      image1: "/img/about/meri-goal.svg",
      image2: "/img/about/meri-goal.svg",
      rotateText: "About us - About us - About us - ",
    },
    about2: {
      subtitle: "Our Story",
      title: "Elevating Your Content Experience",
      text_1:
        "Meri Technologies, we're on a mission to redefine the content landscape. Our team of seasoned wordsmiths is dedicated to crafting narratives that resonate, inspire, and engage. With a focus on quality and innovation, we transform ideas into compelling stories.",
      text_2:
        "Our journey is marked by a commitment to excellence and a passion for creativity. We understand that content is the heart of effective communication. Join us in exploring new horizons of storytelling, where words come alive and captivate the world.",
      image1: "img/about/meri-goal.svg",
      image2: "img/about/meri-goal.svg",
      rotateText: "About us - About us - About us - ",
    },
    gallery: [
      {
        url: "/img/content/8.jpg",
        width: 1000,
        height: 1500,
      },
      {
        url: "/img/content/9.jpg",
        width: 1920,
        height: 1280,
      },
      {
        url: "/img/content/10.jpg",
        width: 1000,
        height: 1500,
      },
      {
        url: "/img/content/11.jpg",
        width: 1920,
        height: 1440,
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/2.jpg"} pageTitle={"About 2"} />

      {/* about */}
      <div className="container mil-content-frame mil-p-120-0">
        <div className="row justify-content-between align-items-center">
          <div className="mil-12 col-xl-5 mil-mb-120">
            <div className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.about1.subtitle}
            </div>
            <h3 className="mil-appearance mil-mb-30">{Content.about1.title}</h3>
            <p className="mil-appearance mil-mb-30">{Content.about1.text_1}</p>
            <p className="mil-appearance mil-mb-30">{Content.about1.text_2}</p>
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
                    src={Content.about1.image1}
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
                    src={Content.about1.image2}
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
      <div className="container mil-content-frame mil-appearance mil-p-0-90">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.about2.subtitle}
            </span>
            <h3 className="mil-appearance mil-mb-30">{Content.about2.title}</h3>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <p className="mil-first-letter mil-appearance mil-mb-30">
                  {Content.about2.text_1}
                </p>
              </div>
              <div className="col-lg-6">
                <p className="mil-appearance mil-mb-30">
                  {Content.about2.text_2}
                </p>
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
            {Content.gallery.map((item, key) => (
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
export default About2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
