import ProjectCard, { ProjectCardBig } from "./ProjectCard";

function Portfolio({ items, isPortfolioPage, noImage }) {
  return (
    <div className="mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el">
      {/* background image */}
      <div
        className="mil-just-image mil-section-bg mil-scale-img"
        data-value-1="1"
        data-value-2="1.1"
      >
        {/* <img src={Data.bg_image} alt="image" />pb */}
      </div>

      <div className="row m-0">
        {items.map((item, key) =>
          isPortfolioPage ? (
            <ProjectCardBig noImage={noImage} key={key} item={item} />
          ) : (
            <div
              className="col-12 col-sm-6 col-lg-4 p-1 pb-1"
              key={`services-item-${key}`}
            >
              <ProjectCard key={key} item={item} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Portfolio;

// const a = `
// <div
// style={{
//   // background: `url(${item.image})`,
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundColor: "#283538",
//   backgroundPosition: "center",
//   height: 400,
//   borderRadius: "10px",
// }}
// className="mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover"
// >
// <div className="mil-cover mil-long"></div>
// <Link
//   // href={`/portfolio/${item.id}`}
//   href="#"
//   className="mil-overlay mil-inside mil-between"
// >
//   <div className="mil-top-hidden mil-flex justify-content-between">
//     <div className="mil-icon mil-accent">
//       {/* icon */}
//       <p>{item.category}</p>
//     </div>
//     {/* number */}
//     <div className="mil-text-lg mil-softened-40">{item.num}</div>
//   </div>
//   <div className="mil-bottom-part-hidden">
//     {/* text */}
//     <h5 className="mil-light mil-mb-20">{item.title}</h5>
//     <p className="mil-hidden-part mil-softened-40">{item.text}</p>
//   </div>
// </Link>
// </div>

// `
