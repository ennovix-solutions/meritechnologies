import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

import Link from "next/link";

const Services = (props) => {
  const Content = {
    title: "Our top-quality services",
    subtitle: "Services",
    description1:
      "If you're looking for top-quality content that engages, informs, and converts your audience, you've come to the right place. Our experienced team works closely with you to understand your brand and your target audience, and we create content that speaks directly to them.",
    description2:
      "At Meri, we're committed to providing our clients with the highest level of service and support. Contact us today to learn more about how we can help you achieve your content and social media goals.",
  };

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/13.jpg"} pageTitle={"Services"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance ">
        <div className="">
          <div className="section-header">
            <h3>Services</h3>
            <p>
              At Meri Technologies, we specialize in a wide range of services
              that empower businesses to thrive in the digital landscape. Our
              offerings include strategic digital marketing, captivating
              branding solutions, innovative website development, and stunning
              graphics design. Partner with us to unlock your full digital
              potential.
            </p>
          </div>
          <div className="">
            <div className="row">
              {props.services.map((item, key) => (
                <div className="col-xl-4 col-lg-6" key={`services-item-${key}`}>
                  {/* service card */}
                  <Link
                    href={`/services/${item.id}`}
                    className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30"
                    style={{
                      // background: `url(${"/img/hero/1.jpg"})`,
                      background: `url(${"https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background-concept_23-2148437738.jpg?w=996&t=st=1695414912~exp=1695415512~hmac=4d1d63ff5db63162450f019acb1e0406db61b278976661a139dfdbdae5f20cdf"})`,
                    }}
                  >
                    <div className="mil-card-content">
                      {/* icon */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mil-card-icon"
                      />
                      <div>
                        {/* text */}
                        <h5 className="mil-mb-10" style={{ color: "white" }}>
                          {item.title}
                        </h5>
                        <p className="mil-softened-40">{item.short}</p>
                      </div>
                    </div>
                  </Link>
                  {/* service card end */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-7"></div>
        </div>
      </div>
      {/* services end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
