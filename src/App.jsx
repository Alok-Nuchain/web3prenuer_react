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

function App() {
  return <>
  <Navbar/>
  {/* <Agent/> */}
  {/* <Agent1/> */}
  {/* <Agent2/> */}
  {/* <Agent3/> */}
  {/* <Agent4/> */}
  {/* <Agent5/> */}
  <Agent6/>
  <Footer/>
  </>;
}

export default App;
