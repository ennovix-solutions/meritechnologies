import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";

const DefaultHeader = ({ transparent, invert, extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "mil-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  return (
    <div
      className={`mil-top-panel${transparent ? " mil-transparent-nav" : ""}${
        !invert ? " mil-invert-nav" : ""
      } mil-animated ${extraClass ? extraClass : ""}`}
      style={{ backgroundColor: "#000d1d" }}
    >
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
            <div className="mil-h5 full-flex">
              <img
                src={appData.header.logo.image.light}
                alt="meri technologies"
                width={50}
              />
              {/* {appData.header.logo.text} */}
              {/* <span className="mil-accent">{appData.header.logo.accent}</span> */}
            </div>
          </a>
        </Link>
        <div
          className={`mil-mobile-dropdown mil-menu-center ${
            toggle ? "mil-active" : ""
          }`}
        >
          <div id="swupTopbar" className="mil-top-bar-transition">
            <nav className="mil-dark-nav">
              <ul className="mil-inline-list mil-hidden-trigger">
                {navItems.map((item, key) =>
                  item?.button ? (
                    <li className={item.classes}>
                      <Link
                        href={item.link}
                        target={item.external && "_blank"}
                        className="mil-button mil-button-rounded  mil-button- mil-scale-down-trigger mil-accent-trigger mil-buttons-space"
                      >
                        <span style={{ padding: "0 10px" }}>{item.label}</span>
                      </Link>
                    </li>
                  ) : (
                    <li
                      className={item.classes}
                      key={`header-menu-item-${key}`}
                    >
                      <Link href={item.link} className="mil-link">
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <ul className="mil-social mil-hidden-trigger">
            {appData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
                <a href={item.link} title={item.title} target="_blank">
                  <i className={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu button */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
        {/* mobile menu button end */}
      </div>
    </div>
  );
};
export default DefaultHeader;
