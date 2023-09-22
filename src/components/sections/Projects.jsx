import { useState } from "react";

import Data from "@data/sections/projects.json";
import Link from "next/link";

import "photoswipe/dist/photoswipe.css";
import "react-modal-video/css/modal-video.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import ModalVideo from "react-modal-video";
import PaginationPage from "../PaginatedBlog";
import Portfolio from "./Portfolio";

const ProjectsSection = ({ projects }) => {
  const projectsGrid = [];

  projectsGrid.push(projects.slice(0, 1));
  projectsGrid.push(projects.slice(1, 5));

  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute("data-href"));
    setOpen(true);
  };

  return (
    <>
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
      <div className="mil-portfolio-fw ">
        <div className="row m-0">
          <Portfolio items={projects.slice(0, 3)} />
        </div>

        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url={modalURL}
          onClose={() => setOpen(false)}
        />
      </div>
      {/* portfolio end */}
    </>
  );
};

export default ProjectsSection;
