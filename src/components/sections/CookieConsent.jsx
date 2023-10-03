import React, { useEffect, useState } from "react";

function CookieConsent() {
  const [showCookieBox, setShowCookieBox] = useState(true);

  useEffect(() => {
    // Function to execute the codes
    const executeCodes = () => {
      //if cookie contains meritechnologies it will be returned and below of this code will not run
      if (document.cookie.includes("meritechnologies")) {
        setShowCookieBox(false);
        return;
      }
      setShowCookieBox(true);
    };

    // Execute codes function will be called on webpage load
    executeCodes();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const handleAcceptClick = () => {
    // Set cookies for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
    document.cookie = "cookieBy=meritechnologies; max-age=" + 60 * 60 * 24 * 30;
    setShowCookieBox(false);
  };

  const handleDeclineClick = () => {
    //  ask him the next time he vistis
    document.cookie =
      "cookieBy=meritechnologiesDECLINED; max-age=" + 60 * 60 * 24 * 30;
    setShowCookieBox(false);
  };

  return (
    <div>
      {showCookieBox && (
        <div className={`cookie-wrapper ${showCookieBox ? "show" : ""}`}>
          <header className="cookie-header">
            {/* <i className="fa fa-cookies"></i> */}
            <h4>We use Cookies</h4>
          </header>
          <div className="cookie-data">
            <p>
              We use cookies to enhance your experience on our website. By
              continuing to use this site, you consent to our use of cookies.
              For more details and how to manage cookies, please see our{" "}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </div>

          <div className="cookie-buttons">
            <button
              className="cookie-button"
              id="cookieAcceptBtn"
              onClick={handleAcceptClick}
            >
              Accept
            </button>
            <button
              className="cookie-button"
              onClick={handleDeclineClick}
              id="cookieDeclineBtn"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieConsent;
