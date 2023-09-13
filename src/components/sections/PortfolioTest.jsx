import Data from "@data/sections/services.json";
import Link from "next/link";

function PortfolioTest({ items }) {
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
        {items.map((item, key) => (
          <div
            className="col-12 col-sm-6 col-lg-4 p-1 pb-1"
            key={`services-item-${key}`}
          >
            {/* service card */}
            <div
              style={{
                background: `url(${item.image})`,
                objectFit: "cover",
                height: 300,
                borderRadius: "10px",
              }}
              className="mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover"
            >
              <div className="mil-cover mil-long"></div>
              <Link
                // href={`/portfolio/${item.id}`}
                href="#"
                className="mil-overlay mil-inside mil-between"
              >
                <div className="mil-top-hidden mil-flex justify-content-between">
                  <div className="mil-icon mil-accent">
                    {/* icon */}
                    <p>{item.category}</p>
                  </div>
                  {/* number */}
                  <div className="mil-text-lg mil-softened-40">{item.num}</div>
                </div>
                <div className="mil-bottom-part-hidden">
                  {/* text */}
                  <h5 className="mil-light mil-mb-20">{item.title}</h5>
                  <p className="mil-hidden-part mil-softened-40">{item.text}</p>
                </div>
              </Link>
            </div>
            {/* service card end */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioTest;
