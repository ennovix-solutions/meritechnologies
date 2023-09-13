import { useState } from 'react';

import Layouts from "@layouts/Layouts";

import { getSortedProjectsData } from "@library/projects";

import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ModalVideo from 'react-modal-video'

import Link from "next/link";
import PortfolioTest from '../components/sections/PortfolioTest';

const Portfolio = ({projects}) => {

  const rows = [];
  const projectsGrid = [];

  for (var i = 0; i < projects.length; i += 5 ) {
    rows.push(projects.slice(i, 5 + i));
  }

  rows.forEach( (row) => {
    let row_rows = [];
    row_rows.push(row.slice(0, 1));
    row_rows.push(row.slice(1, 5));

    projectsGrid.push(row_rows);
  })

  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute('data-href'));
    setOpen(true);
  }

  return (
    <Layouts>
      
      <div className="mil-spacer-100 mil-spacer-dark" />

      {/* portfolio */}
      <div className="mil-portfolio-fw mil-appearance">
      <PortfolioTest items={projects} />
      </div>
      {/* portfolio end */}
      
      <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} />
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}