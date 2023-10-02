import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import appData from "@data/app.json";
import Link from "next/link";
import ContactSection from "../components/sections/ContactSection";
import Contact1 from "../components/sections/Contact1";

const Contact = () => {
  const Content = appData.contacts.contact;
  // be the leader of digital era in your industry
  return (
    <Layouts>
      <PageBanner pageImage={Content.pageImage} pageTitle={Content.pageTitle} />

      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-90">
          <div className="col-xl-5">
            <h3 className="mil-link mil-appearance mil-accent mil-mb-30">
              {Content.subtitle}
            </h3>
            <h3 className="mil-mb-60 mil-appearance">{Content.title}</h3>
          </div>
          <div className="col-xl-6">
            <div className="row mil-mt-55-adapt">
              {Content.info.map((item, key) => (
                <div className="col-lg-6" key={`contact-item-${key}`}>
                  <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                    <div className="mil-icon mil-accent">
                      <img src={item.icon} alt={item.label} />
                    </div>
                    <Link href={item.link}>
                      <div className="mil-icon-box-text">
                        <h6>{item.value}</h6>
                        <p>{item.label}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Contact1 />
        {/* <ContactSection /> */}
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame" id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3596235457985!2d38.748387494241804!3d9.030921392588027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85910c1cb8bb%3A0x79cf69faa3e8da8!2zRG93biBUb3duIHwgUGlhenphIHwg4Yuz4YuN4YqVIOGJs-GLjeGKlSB8IOGNkuGLq-GIsw!5e0!3m2!1sen!2set!4v1695109209827!5m2!1sen!2set"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map end */}
    </Layouts>
  );
};
export default Contact;
