import React from "react";
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import left_svg1 from "../assets/images/left_svg1.png";
import left_svg2 from "../assets/images/left_svg2.png";
import check from "../assets/images/check.png";
import left_svg3 from "../assets/images/left_svg3.png";
import left_svg4 from "../assets/images/left_svg4.png";
import left_svg5 from "../assets/images/left_svg5.png";
const Agent2 = () => {
  return (
    <section className="common_spacing" style={{ paddingTop: "77px" }}>
      <div
        className="container_cutom"
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
          paddingTop: "40px",
        }}
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
                    <img src={left_svg1} alt="Main info" />
                    <p>Main info</p>
                  </li>
                  <div className="yellow_section_left">
                    <li className="mb-0">
                      <img src={left_svg2} alt="Images and media" />
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
                        <img src={check} alt="Header image" />
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
                    <img src={left_svg5} alt="Launch checklist" />
                    <p>Launch checklist</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about_product_right about_product_right_mx_width">
                <h5 className="mb-0 fw-bold">Thumbnail</h5>
                <p>Lets make your product nice!</p>
                <div className="leftuser_agent_head mt-4">
                  <div className="leftuser_agent_border"></div>
                  <div className="leftuser_agent_head_right">
                    <button className="leftuser_agent_head_right_upload mb-2">
                      Select an image
                    </button>
                    <p className="fw-light">
                      or{" "}
                      <a href="#" style={{ fontSize: "12px" }}>
                        Paste a URL
                      </a>
                    </p>
                    <p className="fw-light">
                      Recommended size: 240*240 | JPG, PNG, GIF. Max size: 2MB
                    </p>
                    <p className="fw-light">In progress</p>
                  </div>
                </div>
                <form action="">
                  <label htmlFor="ai-agent-name">Name of the AI Agent</label>
                  <input type="text" id="ai-agent-name" placeholder="AIXBT" />
                  <label htmlFor="tagline">Tagline</label>
                  <input type="text" id="tagline" />
                  <label htmlFor="category">Category</label>
                  <select
                    className="buttondown"
                    id="category"
                    aria-label="Default select example"
                  >
                    <option value="" selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                  <h5 className="mb-0 fw-bold">Links</h5>
                  <label htmlFor="product-links">Links to the product</label>
                  <input
                    type="text"
                    id="product-links"
                    placeholder="https://aixbt.tech/"
                  />
                  <p>
                    <a href="#add-more-links">+ Add more links </a>“App store,
                    Google Play, Steam...”
                  </p>
                  <label htmlFor="x-account">X account of the product</label>
                  <input type="text" id="x-account" placeholder="" />
                  <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                  <h5 className="fw-bold">Description</h5>
                  <label htmlFor="description">
                    Description of the product
                  </label>
                  <textarea id="description" rows="5"></textarea>
                  <button type="button" className="border_bottom">
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

export default Agent2;
