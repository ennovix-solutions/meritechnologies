import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedServicesData } from "@library/services";
import { getSortedProjectsData } from "@library/projects";

import AboutSection from "@components/sections/About";
import TeamSection from "@components/sections/Team";
import WhatWeOffer from "@components/sections/AboutTwo";
import Partners from "../components/sections/Partners";
import CallToActionSection from "../components/sections/CallToAction";
import ProjectsSection from "../components/sections/Projects";
import ServicesSection from "../components/sections/Services";
import Hero from "../components/sections/Hero";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  return (
    <Layouts>
      <Hero />
      <WhatWeOffer />
      <AboutSection />
      <ServicesSection services={props.services} brief={4} />
      <ProjectsSection projects={props.projects} />
      <Partners />
      {/* <TeamSection /> */}
      {/* <VideoSection /> */}
      <TestimonialSlider />
      {/* <LatestPostsSection posts={props.posts} /> */}
      <CallToActionSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allServices = getSortedServicesData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      services: allServices,
      projects: allProjects,
    },
  };
}
