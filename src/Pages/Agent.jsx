import React, { useState } from 'react';
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import leftImage from "../assets/images/left_Img.png"
import { Link, useNavigate } from 'react-router-dom';
import { useAgentData } from '../Context/AgentContext';
const Agent = () => {
  const { agentData, setAgentData } = useAgentData();
  const [link, setLink] = useState('');
  const navigate = useNavigate();
  function handleLinkChange(e) {
    setLink(e.target.value); // Update the local state for the link field
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAgentData(prevState => ({
      ...prevState,
      link: [...prevState.link, link], // Add the new link to the existing array
    }));
    // console.log(agentData)
    navigate('/agent1');
  }

  
  return (
    <section
      className="common_spacing pb-0"
      style={{ paddingTop: '77px' }}
    >
      <div
        className="container_cutom"
        style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}
      >
        <div className="row">
          <div className="col-lg-5">
            <div className="iiner_img_bg">
              <img
                src={leftImage}
                alt="Agent illustration"
              />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="iiner_list_agent">
              <h4>List your AI Agent</h4>
              <p>
                Found a cool Web3 AI Agent you want everyone to know about? Or
                maybe you made one yourself and want the world to know about it?
                You're in the right place. So relax and follow the steps.
              </p>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="product-link">Link to the product</label>
                <input
                  type="text"
                  id="product-link"
                  placeholder="https://"
                  onChange={handleLinkChange}
                />
                <Link to=""><button type="submit" onClick={handleSubmit}>Get Started</button></Link>
                <span>press “Enter” to continue</span>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Agent;
