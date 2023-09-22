import Data from "@data/sections/team.json";
import Link from "next/link";

const TeamSection = () => {
  return (
    <div className="mil-team-section">
      <div className="container mil-p-120-90">
        <div className="row justify-content-between mil-mb-120">
          <div className="col-xl-5">
            <h3 className="mil-link mil-accent mil-mb-30">{Data.subtitle}</h3>
            <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>
          </div>
          <div className="col-xl-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Data.description}
            </p>
            {/* button */}
            <div className="mil-appearance">
              <Link href={Data.more.link} className="mil-link-hover">
                {Data.more.label}
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {Data.items.map((item, key) => (
            <div className="col-md-6 col-xl-3" key={`team-item-${key}`}>
              {/* team card */}
              <div class="flip-card-container flip-portrait">
                <div class="flip-card">
                  <div class="card-front">
                    <figure>
                      <img
                        className="flip-img"
                        // src="https://img.freepik.com/free-vector/digital-red-circuit-lines-technology-background-design_1017-27263.jpg?w=1380&t=st=1695392319~exp=1695392919~hmac=8b2ab19c2d05a132bc5db09e2262539f07bbf9f8cd4adfcd14576d8c31d1e278"
                        src={
                          "https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-2886.jpg?w=740&t=st=1695410780~exp=1695411380~hmac=e69dd1e98081ebb64855540c94702fbcea0f1cd72d587dc8867f17a6903c5718"
                        }
                        alt={item.name}
                      />
                    </figure>

                    <ul className="flip-ul ">
                      <li
                        className="flip-li"
                        style={{ fontSize: "1rem", fontWeight: 900 }}
                      >
                        <h4 className="mil-light">{item.name}</h4>
                      </li>
                      <li>{item.role}</li>
                    </ul>
                  </div>

                  <div class="card-back">
                    <figure>
                      {/* <div class="img-bg"></div> */}
                      <img
                        className="flip-img"
                        src="https://img.freepik.com/premium-photo/confident-corporate-charm-handsome-young-african-american-businessman-standing-indoors-with-his-arms-folded_590464-31666.jpg?w=360"
                        // src={item.image}
                        alt={item.name}
                        width={"100%"}
                      />
                    </figure>

                    {/* <button className="flip-button">Open</button> */}
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
