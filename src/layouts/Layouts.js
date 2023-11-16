import { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { countersAnimation } from "../common/counters";
import { navigation } from "../common/navigation";
import { formInputs } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Cursor from "./cursor/Index";
import ParticlesDesign from "../components/Particles/ParticlesDesign";
import ContactBottom from "../components/sections/ContactBottom";
import { useRouter } from "next/router";

const Layouts = ({
  children,
  header,
  logoOnly,
  footer,
  noHeader,
  noFooter,
  footerBg,
  footerInst,
  transparent,
  invert,
  extraClass,
}) => {
  const pathname = useRouter().pathname;

  useEffect(() => {
    scrollAnimation();
    navigation();
    formInputs();
  }, []);

  return (
    <div id="smooth-wrapper" className="mil-wrapper">
      <Cursor />
      {!noHeader && (
        <Header
          logoOnly={logoOnly}
          layout={header}
          transparent={transparent}
          invert={invert}
          extraClass={extraClass}
        />
      )}
      <div id="swupMain" className="mil-main-transition">
        <div id="smooth-content" className="mil-content">
          {children}
        </div>
      </div>
      {!noFooter && (
        <Footer layout={footer} bg={footerBg} instagram={footerInst} />
      )}
      {/* <ParticlesDesign /> */}

      {pathname !== "/contact" && <ContactBottom />}
    </div>
  );
};
export default Layouts;
