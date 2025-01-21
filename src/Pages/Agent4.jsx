import React from "react";
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import left_svg1 from "../assets/images/left_svg1.png";
import left_svg2 from "../assets/images/left_svg2.png";
import left_svg3 from "../assets/images/left_svg3.png";
import left_svg4 from "../assets/images/left_svg4.png";
import left_svg5 from "../assets/images/left_svg5.png";
import check from "../assets/images/check.png";
import checked from "../assets/images/checked.png";
import new_circle from "../assets/images/new_circle.png";
import plus from "../assets/images/plus.png";

const Agent4 = () => {
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
                    <img src={left_svg1} alt="Main Info" />
                    <p>Main info</p>
                  </li>
                  <li>
                    <img src={left_svg2} alt="Images and Media" />
                    <p>Images and media</p>
                  </li>
                  <div className="yellow_section_left">
                    <li className="mb-0">
                      <img src={left_svg3} alt="Makers" />
                    </li>
                    <p className="mb-0">3/5 : Makers</p>
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
                <h5 className="mb-0 fw-bold">Did you work on this product?</h5>
                <p>It’s fine either way. Just need to know.</p>
                <div className="checkbox_pro_row_main">
                  <div className="checkbox_pro_row active">
                    <div className="checkbox_pro_row_left">
                      <img src={checked} alt="Checked" className="checked" />
                      <img src={new_circle} alt="Unchecked" className="unchecked" />
                    </div>
                    <div className="checkbox_pro_row_left">
                      <h6>I worked on this product</h6>
                      <p>
                        I'll be listed as both Hunter and Maker of this product.
                      </p>
                    </div>
                  </div>
                  <div className="checkbox_pro_row">
                    <div className="checkbox_pro_row_left">
                      <img src={checked} alt="Checked" className="checked" />
                      <img src={new_circle} alt="Unchecked" className="unchecked" />
                    </div>
                    <div className="checkbox_pro_row_left">
                      <h6>I didn't work on this product</h6>
                      <p>
                        I'll be listed as Hunter of this product, not Maker.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-4" style={{ borderColor: "#706f6f" }} />
                <h5 className="pb-4 fw-bold">Who worked on this product</h5>
                <form action="#">
                  <label>Makers </label>
                  <input type="text" placeholder="" />
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
                  <button className="border_bottom">Next Step: Extras</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent4;
