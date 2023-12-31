import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import {
  getAllProjectsIds,
  getProjectData,
  getRelatedProjects,
} from "@library/projects";

import RelatedProjectsSection from "@components/sections/RelatedProjects";

const ImageGallery = ({ gallery }) => {
  return (
    <>
      {gallery.enabled == 1 && (
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-xl-9">
            <div className="row">
              {gallery.items.map((item, key) => (
                <div
                  className={gallery.cols == 3 ? "col-lg-4" : "col-lg-6"}
                  key={`gallery-item-${key}`}
                >
                  <Item
                    original={item.image}
                    thumbnail={item.image}
                    width={item.width}
                    height={item.height}
                  >
                    {({ ref, open }) => (
                      <a
                        data-fancybox="gallery"
                        data-no-swup
                        ref={ref}
                        onClick={open}
                        className={
                          gallery.style == "vertical"
                            ? "mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30"
                            : "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30"
                        }
                        style={{
                          cursor: "pointer",
                          display:
                            key < (gallery.limit || gallery.items.length)
                              ? "block"
                              : "none",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="mil-scale-img"
                          data-value-1="1"
                          data-value-2="1.1"
                        />
                      </a>
                    )}
                  </Item>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectDetail = (props) => {
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageImage={postData.image} pageTitle={postData.title} />

      <div className="container mil-mb-120">
        <Gallery>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">
              <h3
                className="mil-link mil-text-center mil-appearance mil-softened-60 mil-mb-30"
                style={{ width: "100%" }}
              >
                {postData.category}
              </h3>
              <h3 className="mil-text-center mil-appearance mil-mb-60">
                {postData.title}
              </h3>

              <div className="mil-divider mil-appearance mil-mb-30"></div>

              {/* project info */}
              <ul className="mil-project-info mil-appearance mil-mb-30">
                {postData.details.map((item, key) => (
                  <li key={`project-list-${key}`}>
                    <span className="mil-link mil-mr-15">{item.label}:</span>
                    <span className="mil-link mil-softened-60">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              {/* project info end */}

              {postData.type != "video" && (
                <Item
                  original={postData.image}
                  thumbnail={postData.image}
                  width={postData.imageWidth}
                  height={postData.imageHeight}
                >
                  {({ ref, open }) => (
                    <a
                      data-fancybox="gallery"
                      ref={ref}
                      onClick={open}
                      data-no-swup
                      className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger "
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={postData.image}
                        alt={postData.title}
                        className="mil-scale-img"
                        data-value-1="1"
                        data-value-2="1.1"
                        style={{ objectPosition: "top" }}
                      />
                    </a>
                  )}
                </Item>
              )}

              {postData.type == "video" && (
                <a
                  data-fancybox="gallery"
                  data-no-swup
                  className="mil-appearance mil-just-image mil-image-hori mil-accent-trigger mil-mb-120"
                >
                  <div className="mil-image-frame">
                    <video
                      className="mil-video-background"
                      data-value="1.2"
                      autoPlay="autoplay"
                      loop="loop"
                      muted="true"
                      playsInline="true"
                      onContextMenu={(e) => e.preventDefault()}
                      preload="auto"
                    >
                      <source src={postData.image} />
                    </video>
                  </div>
                </a>
              )}
            </div>

            {typeof postData.description0 != "undefined" && (
              <>
                {postData.description0.enabled == 1 && (
                  <div className="col-lg-10 col-xl-6 " style={{marginTop: "40px"}}>
                    <p dangerouslySetInnerHTML={{__html: postData.description0.content}} className="mil-first-letter mil-appearance">
                      
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {typeof postData.description1 != "undefined" && (
            <>
              {postData.description1.enabled == 1 && (
                <div
                  style={{ margin: "30px 0" }}
                  className="row justify-content-center mil-p-0-0"
                >
                  <div className="col-lg-10 col-xl-6 mil-text-center">
                    <h5 dangerouslySetInnerHTML={{__html: postData.description1.heading}} className="mil-appearance mil-mb-30">
                      
                    </h5>

                    <p className="mil-appearance" dangerouslySetInnerHTML={{__html: postData.description1.content}}>
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {typeof postData.report != "undefined" && (
            <ImageGallery gallery={postData.report} />
          )}

          {typeof postData.description2 != "undefined" && (
            <>
              {postData.description2.enabled == 1 && (
                <div className="row justify-content-center mil-p-90-120">
                  <div className="col-lg-10 col-xl-6">
                    <h5 dangerouslySetInnerHTML={{__html: postData.description2.heading}} className="mil-appearance mil-mb-30">
                      
                    </h5>

                    <p className="mil-appearance" dangerouslySetInnerHTML={{__html: postData.description1.content}}>
</p>
                  </div>
                </div>
              )}
            </>
          )}

          {typeof postData.gallery != "undefined" && (
            <ImageGallery gallery={postData.gallery} />
          )}

          {typeof postData.description3 != "undefined" && (
            <>
              {postData.description3.enabled == 1 && (
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-6">
                    <h5 dangerouslySetInnerHTML={{__html: postData.description3.heading}} className="mil-appearance mil-mb-30">
                      
                    </h5>

                    <p className="mil-appearance" dangerouslySetInnerHTML={{__html: postData.description3.content}}>

                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {typeof postData.finalImage != "undefined" && (
            <>
              {postData.finalImage.enabled == 1 && (
                <div className="row justify-content-center mil-p-120-90">
                  <div className="col-lg-12 col-xl-9">
                    <Item
                      original={postData.finalImage.image}
                      thumbnail={postData.finalImage.image}
                      width={postData.finalImage.width}
                      height={postData.finalImage.height}
                    >
                      {({ ref, open }) => (
                        <a
                          data-fancybox="gallery"
                          data-no-swup
                          ref={ref}
                          onClick={open}
                          className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={postData.finalImage.image}
                            alt={postData.finalImage.alt}
                            className="mil-scale-img"
                            data-value-1="1"
                            data-value-2="1.1"
                          />
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              )}
            </>
          )}

          {typeof postData.description4 != "undefined" && (
            <>
              {postData.description4.enabled == 1 && (
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-6">
                    <h5 dangerouslySetInnerHTML={{__html: postData.description4.heading}} className="mil-appearance mil-mb-30">
                      
                    </h5>

                    <p className="mil-appearance">
                      {postData.description4.content}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          
          {typeof postData.description5 != "undefined" && (
            <>
              {postData.description5.enabled == 1 && (
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-6">
                    <h5 dangerouslySetInnerHTML={{__html: postData.description5.heading}} className="mil-appearance mil-mb-30">
                      
                    </h5>

                    <p className="mil-appearance">
                      {postData.description5.content}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </Gallery>
      </div>

      {/* <RelatedProjectsSection items={props.related} /> */}
    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const paths = getAllProjectsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  const relatedPosts = await getRelatedProjects(params.id);

  return {
    props: {
      data: postData,
      related: relatedPosts,
    },
  };
}
