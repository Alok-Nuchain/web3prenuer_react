import "./assets/css/style.css";
import "./assets/css/style-2.css";
import "./assets/css/index.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Agent from "./Pages/Agent";
import Agent1 from "./Pages/Agent1";
import Agent2 from "./Pages/Agent2";
import Agent3 from "./Pages/Agent3";
import Agent4 from "./Pages/Agent4";
import Agent5 from "./Pages/Agent5";
import Agent6 from "./Pages/Agent6";
import AllRoutes from "./AllRoutes/AllRoutes";
import { Dashboard } from "./Components/Dashboard";
import { AgentProvider } from "./Context/AgentContext";

function App() {
  return <>
    {/* <AgentProvider> */}
      <Dashboard/>
    {/* </AgentProvider>  */}
  </>
}

export default App;
