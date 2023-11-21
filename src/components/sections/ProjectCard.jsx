import Link from "next/link";
import React from "react";

export function ProjectCardBig({ item }) {
  return (
    <div className="portfolio-container ">
      <div className="portfolio-left">
        <h5 className="portfolio-title">
          <Link href={"portfolio/" + item.id} className="mil-link-hover">
            {item.title}
          </Link>
        </h5>
        <div className="portfolio-desc">{item.description}</div>
      </div>
      <div className="portfolio-right">
        <img src={item.image} />
      </div>
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              {/* <div className="img-bg"></div>  */}

              <img
                className="flip-img"
                // src="/img/hero/bg.svg"
                src={item.image}
                alt={item.title}
              />

              <figcaption className="flip-figcaption mil-accent">
                {item.category}
              </figcaption>
            </figure>

            {/* <ul className="flip-ul flip-ul-center">
              <li
                className="flip-li"
                style={{ fontSize: "1rem", fontWeight: 900 }}
              >
                {item.title}
              </li>
              <li className="flip-li">{item.description}</li>
            </ul> */}
          </div>

          <div className="card-back">
            <Link href={"portfolio/" + item.id}>
              <figure>
                <div className="img-bg"></div>
                <img src={item.image} alt={item.title} width={"100%"} />
              </figure>
            </Link>

            {/* <button className="flip-button">Open</button> */}

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
      <center>
        <h5>{item.title}</h5>
      </center>
    </div>
  );
}

export default ProjectCard;
