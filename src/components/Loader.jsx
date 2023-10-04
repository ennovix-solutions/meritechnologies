import Image from "next/image";
import React from "react";
import appData from "@data/app.json";

function Loader() {
  return (
    <div className="loader-container">
      <div className="box">
        <img src={appData.header.logo.image.light} alt="meritechs" />
      </div>
    </div>
  );
}

export default Loader;
