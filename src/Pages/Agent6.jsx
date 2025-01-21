import React from "react";
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import left_svg1 from "../assets/images/left_svg1.png";
import left_svg2 from "../assets/images/left_svg2.png";
import left_svg3 from "../assets/images/left_svg3.png";
import left_svg4 from "../assets/images/left_svg4.png";
import left_svg5 from "../assets/images/left_svg5.png";
import checked from "../assets/images/checked.png";
import new_circle from "../assets/images/new_circle.png";
import { useAgentData } from "../Context/AgentContext";
import axios from "axios";

const Agent6 = () => {
    const { agentData, setAgentData } = useAgentData(); // Access context

    async function handleSubmit(){
        console.log(agentData)
        try {
          const res = await axios.post(`http://47.236.124.38:8000/create-ai-product/`,agentData,{
            headers: {
              "Content-type": "multipart/form-data",
            },
          })
          console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
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
                    <li className="lunch_wrapper">
                      <img src={left_svg5} alt="" />
                      <p>Launch checklist</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about_product_right about_product_right_mx_width">
                  <h5 className="mb-3 fw-bold">
                    Required <span className="tag_h5">67% Complete</span>
                  </h5>
                  <p>
                    Check that you’ve completed all of the required information.
                  </p>

                  <div className="required_list_items row">
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked pink_bg pink_border">
                          ✓
                        </div>
                        <p>Product name</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked light_green_bg light_green_border">
                          ✓
                        </div>
                        <p>Thumbnail</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked purple_bg purple_border">
                          ✓
                        </div>
                        <p>Product tagline</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked orange_border orange_bg">
                          ✓
                        </div>
                        <p>Add images to the gallery</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked blue_border blue_bg">
                          ✓
                        </div>
                        <p>Description</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked green_border green_bg">
                          ✓
                        </div>
                        <p>Description</p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" style={{ borderColor: "#706f6f" }} />

                  <h5 className="fw-bold">Strongly Recommended</h5>
                  <p>
                    Go the extra mile and add suggested information. Successful
                    launches usually do.
                  </p>

                  <div className="required_list_items row">
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked pink_border"></div>
                        <p>Access Model</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked light_green_border"></div>
                        <p>Write the first comment</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked purple_border"></div>
                        <p>Additional Makers</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="required_list_items_box">
                        <div className="required_list_items_boxchecked orange_border"></div>
                        <p>Video / Loom</p>
                      </div>
                    </div>
                  </div>

                  <ul className="waring_box_here">
                    <li>• Description is required</li>
                    <li>• Access Model is required</li>
                  </ul>

                  <button className="border_bottom px-5" onClick={handleSubmit}>Submit</button>
                  <p className="mb-0 text-dark mt-3">
                    Please complete the necessary steps to launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agent6;
