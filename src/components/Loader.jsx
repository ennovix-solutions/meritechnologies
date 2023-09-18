import Image from "next/image";
import React from "react";
import appData from "@data/app.json";

function Loader() {
  return (
    <div class="loader-container">
      <div class="box">
        <img src={appData.header.logo.image.light} alt="meritechs" />
      </div>
    </div>
  );
}

export default Loader;
