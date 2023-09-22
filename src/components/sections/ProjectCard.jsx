import React from "react";

function ProjectCard({ item }) {
  return (
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="card-front">
          <figure>
            {/* <div class="img-bg"></div>  */}
            <img
              className="flip-img"
              src="https://img.freepik.com/free-vector/digital-red-circuit-lines-technology-background-design_1017-27263.jpg?w=1380&t=st=1695392319~exp=1695392919~hmac=8b2ab19c2d05a132bc5db09e2262539f07bbf9f8cd4adfcd14576d8c31d1e278"
              //   src={item.image}
              alt={item.title}
            />
            <figcaption className="flip-figcaption mil-accent">
              {item.category}
            </figcaption>
          </figure>

          <ul className="flip-ul flip-ul-center">
            <li
              className="flip-li"
              style={{ fontSize: "1rem", fontWeight: 900 }}
            >
              {item.title}
            </li>
            <li className="flip-li">{item.description}</li>
          </ul>
        </div>

        <div class="card-back">
          <figure>
            <div class="img-bg"></div>
            <img src={item.image} alt={item.title} width={"100%"} />
          </figure>

          {/* <button className="flip-button">Open</button> */}

          <div class="design-container">
            <span class="design design--1"></span>
            <span class="design design--2"></span>
            <span class="design design--3"></span>
            <span class="design design--4"></span>
            <span class="design design--5"></span>
            <span class="design design--6"></span>
            <span class="design design--7"></span>
            <span class="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
