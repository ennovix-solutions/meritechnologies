import React, { useState } from "react";
import { useRouter } from "next/router";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Layouts from "@/src/layouts/Layouts";
import Head from "next/head";

const renderToolbar = (Toolbar) => (
  <Toolbar>
    {(slots) => {
      const { ZoomOut, ZoomIn, EnterFullScreen } = slots;
      return (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ padding: "0px 2px" }}>
            <ZoomOut>
              {(props) => (
                <button
                  style={{
                    backgroundColor: "gray",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                  onClick={props.onClick}
                >
                  -
                </button>
              )}
            </ZoomOut>
          </div>
          {/* ... */}

          <div style={{ padding: "0px 2px" }}>
            <ZoomIn>
              {(props) => (
                <button
                  style={{
                    backgroundColor: "gray",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                  onClick={props.onClick}
                >
                  +
                </button>
              )}
            </ZoomIn>
          </div>
          {/* ... */}

          <div style={{ padding: "0px 2px" }}>
            <EnterFullScreen>
              {(props) => (
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                  onClick={props.onClick}
                >
                  <img src="/img/icons/fullscreen.svg" width={10} height={10} />
                </button>
              )}
            </EnterFullScreen>
          </div>
        </div>
      );
    }}
  </Toolbar>
);

function Document() {
  const router = useRouter();
  const [fullPage, setFullPage] = useState(false);
  const documentName = router.query.id
    ?.split("-")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: renderToolbar,
  });

  return (
    <>
      <Head>
        <title>{documentName} Document | Meri Technologies </title>
      </Head>

      {fullPage ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`http://files.meritechnologies.com/files/web-pricing.pdf`}
            // fileUrl={`/docs/${router.query.id}.pdf`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      ) : (
        <Layouts noFooter>
          <div className="document-wrapper">
            <h4 style={{ margin: "30px 10px", padding: "0 20px" }}>
              {documentName} Document
            </h4>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                // fileUrl={`/docs/${router.query.id}.pdf`}

                fileUrl={`http://files.meritechnologies.com/files/${router.query.id}.pdf`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </Layouts>
      )}
    </>
  );
}

export default Document;
