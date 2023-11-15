import React from "react";
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

  return (
    <Layouts noFooter invert>
      <Head>
        <title>{router.query.id} document| Meri Technologies </title>
      </Head>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
          margin: "20px 0",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={`/docs/${router.query.id}.pdf`} />
        </Worker>
      </div>
    </Layouts>
  );
}

export default Document;
