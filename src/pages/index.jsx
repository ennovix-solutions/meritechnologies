import React, { useEffect, useState } from "react";
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
import CustomModal from "../components/Modal";
import { getCookie } from "cookies-next";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home = (props) => {
  const [marketingEmailCookie, setMarketingEmailCookie] = useState(true);

  useEffect(() => {
    setMarketingEmailCookie(getCookie("marketingEmail"));
  }, []);

  return (
    <Layouts>
      <Hero />
      {/* {!marketingEmailCookie && <CustomModal />} */}
      <div className="bgSection">
        <WhatWeOffer />
      </div>
      <AboutSection />
      <div className="bgSection">
        <ServicesSection services={props.services} brief={4} />
      </div>
      <ProjectsSection projects={props.projects} />
      <div className="bgSection">
        <Partners />
      </div>
      <TestimonialSlider />
      <CallToActionSection />
    </Layouts>
  );
};
export default Home;

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
