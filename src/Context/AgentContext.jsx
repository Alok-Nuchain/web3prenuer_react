import React, { createContext, useState, useContext } from 'react';

// Create the context
const AgentContext = createContext();

// Create a provider component
export const AgentProvider = ({ children }) => {
  const [agentData, setAgentData] = useState({
    name: "",
    tagline: "",
    category: "",
    link: [],
    x_account:"",
    description: "",
    thumbnail: "",
    gallery: [],
    video_link: "",
    maker: [],
    pricing: "",
    access_model: "",
    header_image: "",
  });

  return (
    <AgentContext.Provider value={{ agentData, setAgentData }}>
      {children}
    </AgentContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAgentData = () => useContext(AgentContext);
