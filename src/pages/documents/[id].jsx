import React, { useState } from "react";
import { useRouter } from "next/router";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import Layouts from "@/src/layouts/Layouts";
import Head from "next/head";

function Document() {
  const router = useRouter();
  const [fullPage, setFullPage] = useState(false);
  const documentName = router.query.id
    ?.split("-")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");

  function handleFullPage() {
    setFullPage(!fullPage);
  }

  return (
    <>
      <Head>
        <title>{documentName} Document | Meri Technologies </title>
      </Head>
      <div className="full-page-btn">
        <button
          title={fullPage ? "Normal" : "Fullpage"}
          onClick={handleFullPage}
        >
          {fullPage ? (
            <img src="/img/icons/normal-screen.svg" color="red" width={20} />
          ) : (
            <img src="/img/icons/fullscreen.svg" color="red" width={20} />
          )}
        </button>
      </div>
      {fullPage ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={`/docs/${router.query.id}.pdf`} />
        </Worker>
      ) : (
        <Layouts noFooter>
          <div className="document-wrapper">
            <h2 style={{ margin: "30px 10px", padding: "0 20px" }}>
              {documentName} Document
            </h2>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={`/docs/${router.query.id}.pdf`} />
            </Worker>
          </div>
        </Layouts>
      )}
    </>
  );
}

export default Document;
