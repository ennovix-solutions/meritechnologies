import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedServicesData } from "@library/services";
import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";
import AboutTwoSection from "@components/sections/AboutTwo";
import Partners from "../components/sections/Partners";
import CallToActionSection from "../components/sections/CallToAction";
import ProjectsSection from "../components/sections/Projects";
import ServicesTwoSection from "../components/sections/ServicesTwo";
import Hero from "../components/sections/Hero";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  return (
    <Layouts>
      {/* <HeroOneSection /> */}
      <Hero />
      <AboutTwoSection />
      <AboutSection />
      <ServicesTwoSection services={props.services} brief={4} />
      <ProjectsSection projects={props.projects} />
      <Partners />
      <TeamSection />
      {/* <VideoSection /> */}
      <TestimonialSlider />
      {/* <LatestPostsSection posts={props.posts} /> */}
      <CallToActionSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allServices = getSortedServicesData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      services: allServices,
      projects: allProjects,
    },
  };
}
