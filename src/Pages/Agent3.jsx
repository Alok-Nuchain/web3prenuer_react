import React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import left_svg1 from "../assets/images/left_svg1.png";
import left_svg2 from "../assets/images/left_svg2.png";
import left_svg3 from "../assets/images/left_svg3.png";
import left_svg4 from "../assets/images/left_svg4.png";
import left_svg5 from "../assets/images/left_svg5.png";
import check from "../assets/images/check.png";
import gallery from "../assets/images/gallery.png";
import plus from "../assets/images/plus.png";
import { useAgentData } from "../Context/AgentContext";
import { useNavigate } from "react-router-dom";

const Agent3 = () => {
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [headerFile, setHeaderFile] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const { agentData, setAgentData } = useAgentData();
  const navigate = useNavigate();

  const handleFileInputClick = (id) => {
    document.getElementById(id).click();
  };

  const handleImageChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      if (type === "thumbnail") {
        setThumbnailFile(file);
        setThumbnailImage(previewUrl);
        setAgentData((prev) => ({ ...prev, thumbnail: file })); // Store file
      } else if (type === "header") {
        setHeaderFile(file);
        setHeaderImage(previewUrl);
        setAgentData((prev) => ({ ...prev, header_image: file })); // Store file
      }
    }
  };

  const handleVideoLinkChange = (e) => {
    const link = e.target.value;
    setVideoLink(link);
    setAgentData((prev) => ({ ...prev, video_link: link }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(agentData); // Logs the updated agentData object
    navigate("/agent6");
  };

  return (
    <section className="common_spacing" style={{ paddingTop: "77px" }}>
      <div
        className="container_cutom"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: "40px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftuser_agent">
                <div className="leftuser_agent_head">
                  <div className="leftuser_agent_border"></div>
                  <div className="leftuser_agent_head_right">
                    <h6>Web3 AI Agent</h6>
                    <p>In progress</p>
                  </div>
                </div>
                <ul className="p-0 m-0">
                  <li>
                    <img src={left_svg1} alt="Main Info" />
                    <p>Main info</p>
                  </li>
                  <div className="yellow_section_left">
                    <li className="mb-0">
                      <img src={left_svg2} alt="Images and Media" />
                    </li>
                    <p className="mb-0">2/4 : Images and media</p>
                    <div
                      style={{
                        width: "299px",
                        height: "4px",
                        background: "#e5e7eb",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "34px",
                          height: "4px",
                          background: "#5359ea",
                          borderRadius: "12px",
                        }}
                      ></div>
                    </div>
                    <ul className="checkbox_list">
                      <li>
                        <img src={check} alt="Logo" />
                        <p>Logo</p>
                      </li>
                      <li>
                        <img src={check} alt="Header Image" />
                        <p>Header image</p>
                      </li>
                      <li>
                        <img src={check} alt="Gallery" />
                        <p>Gallery</p>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <img src={left_svg3} alt="Makers" />
                    <p>Makers</p>
                  </li>
                  <li>
                    <img src={left_svg4} alt="Extras" />
                    <p>Extras</p>
                  </li>
                  <li>
                    <img src={left_svg5} alt="Launch Checklist" />
                    <p>Launch checklist</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about_product_right about_product_right_mx_width">
                <h5 className="mb-0 fw-bold">Thumbnail</h5>
                <p>Lets make your product nice!</p>
                <div className="leftuser_agent_head mt-4 mb-2">
                  <div className="leftuser_agent_border">
                    {thumbnailImage && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${thumbnailImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="leftuser_agent_head_right">
                    <button
                      className="leftuser_agent_head_right_upload mb-2"
                      onClick={() => handleFileInputClick("thumbnail-input")}
                    >
                      Select an image
                    </button>
                    <input
                      type="file"
                      className="d-none"
                      id="thumbnail-input"
                      name="thumbnail"
                      onChange={(e) => handleImageChange(e, "thumbnail")}
                    />
                    <p className="fw-light">
                      or <a href="#" style={{ fontSize: "12px" }}>Paste a URL</a>
                    </p>
                    <p className="fw-light">
                      Recommended size: 240*240 | JPG, PNG, GIF. Max size: 2MB
                    </p>
                  </div>
                </div>
                <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                <h5 className="mb-0 fw-bold">Header image</h5>
                <div className="leftuser_agent_head mt-4 mb-2">
                  <div className="leftuser_agent_border">
                    {headerImage && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${headerImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="leftuser_agent_head_right">
                    <button
                      className="leftuser_agent_head_right_upload mb-2"
                      onClick={() => handleFileInputClick("header-input")}
                    >
                      Select an image
                    </button>
                    <input
                      type="file"
                      className="d-none"
                      id="header-input"
                      name="header_image"
                      onChange={(e) => handleImageChange(e, "header")}
                    />
                    <p className="fw-light">
                      or <a href="#" style={{ fontSize: "12px" }}>Paste a URL</a>
                    </p>
                    <p className="fw-light">
                      Recommended size: 240*240 | JPG, PNG, GIF. Max size: 2MB
                    </p>
                  </div>
                </div>
                <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                <h5 className="mb-0 fw-bold">Gallery</h5>
                <p>
                  The first image will be used as the social preview when your
                  link is shared online. We recommend at least 3 or more images.
                </p>
                <div
                  className="gallery_box_here"
                  style={{
                    backgroundImage: `url(${gallery})`,
                  }}
                ></div>
                <div className="add_button_here">
                  <button>
                    <img src={plus} alt="Add More" />
                  </button>
                  <button>
                    <img src={plus} alt="Add More" />
                  </button>
                  <button>
                    <img src={plus} alt="Add More" />
                  </button>
                </div>
                <p>Recommended size: 240*240 | JPG, PNG, GIF. Max size: 2MB</p>
                <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                <h5 className="mb-0 fw-bold">Video/Loom</h5>
                <p>
                  Upload an optional video from YouTube or Loom to show people
                  how to use your product or share your maker story. Video helps
                  you connect with viewers.
                </p>
                <form action="" onSubmit={handleSubmit}>
                  <label>
                    Link to the video
                    <span style={{ float: "right", color: "#808494" }}>
                      optional
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Video link of the product"
                    name="video_link"
                    value={videoLink}
                    onChange={handleVideoLinkChange}
                  />
                  <button type="submit" className="border_bottom">
                    Next Step: Images & Media
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent3;
