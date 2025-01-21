import React from 'react';
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import left_svg1 from "../assets/images/left_svg1.png"
import left_svg2 from "../assets/images/left_svg2.png"
import left_svg3 from "../assets/images/left_svg3.png"
import left_svg4 from "../assets/images/left_svg4.png"
import left_svg5 from "../assets/images/left_svg5.png"
const Agent1 = () => {
  return (
    <section className="common_spacing" style={{ paddingTop: '77px' }}>
      <div
        className="container_cutom"
        style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '40px' }}
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
                    <img src={left_svg1} alt="" />
                    <p>Main info</p>
                  </li>
                  <li>
                    <img src={left_svg2} alt="" />
                    <p>Images and media</p>
                  </li>
                  <li>
                    <img src={left_svg3} alt="" />
                    <p>Makers</p>
                  </li>
                  <li>
                    <img src={left_svg4} alt="" />
                    <p>Extras</p>
                  </li>
                  <li>
                    <img src={left_svg5} alt="" />
                    <p>Launch checklist</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about_product_right about_product_right_mx_width">
                <h5 className="mb-0 fw-bold">Tell us more about this product</h5>
                <p>
                  We’ll need its name, tagline, links, launch tags, and description.
                </p>
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

                  <hr className="my-4" style={{ borderColor: '#706f6f' }} />
                  <h5 className="mb-0 fw-bold">Links</h5>

                  <label htmlFor="product-links">Links to the product</label>
                  <input
                    type="text"
                    id="product-links"
                    placeholder="https://aixbt.tech/"
                  />
                  <p>
                    <a href="">+ Add more links </a>“App store, Google Play, Steam...”
                  </p>
                  <label htmlFor="x-account">X account of the product</label>
                  <input type="text" id="x-account" placeholder="" />
                  <hr className="my-4" style={{ borderColor: '#706f6f' }} />

                  <h5 className="fw-bold">Description</h5>
                  <label htmlFor="description">Description of the product</label>
                  <textarea id="description" rows="5"></textarea>

                  <button className="border_bottom">
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

export default Agent1;
