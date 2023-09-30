import { useState } from "react";

import Layouts from "@layouts/Layouts";

import { getSortedProjectsData } from "@library/projects";

import "photoswipe/dist/photoswipe.css";
import "react-modal-video/css/modal-video.css";

import ModalVideo from "react-modal-video";
import Data from "@data/sections/projects.json";

import Link from "next/link";
import PortfolioSection from "../components/sections/Portfolio";

const Portfolio = ({ projects }) => {
  const rows = [];
  const projectsGrid = [];

  for (var i = 0; i < projects.length; i += 5) {
    rows.push(projects.slice(i, 5 + i));
  }

  rows.forEach((row) => {
    let row_rows = [];
    row_rows.push(row.slice(0, 1));
    row_rows.push(row.slice(1, 5));

    projectsGrid.push(row_rows);
  });

  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute("data-href"));
    setOpen(true);
  };

  return (
    <Layouts>
      <div className="mil-spacer-100 mil-spacer-dark" />

      {/* portfolio title */}
      <div className="container mil-p-120-120">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <h3 className="mil-link mil-softened-60 mil-mb-30">
              {Data.subtitle}
            </h3>
            <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>
          </div>
          <div className="col-xl-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Data.description}
            </p>
            {/* button */}
            <div className="mil-appearance">
              <Link href={Data.button.link} className="mil-link-hover">
                {Data.button.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio title end */}

      {/* portfolio */}
      <div className="mil-portfolio-fw mil-appearance">
        <PortfolioSection items={projects} />
      </div>
      {/* portfolio end */}

      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={modalURL}
        onClose={() => setOpen(false)}
      />
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
