import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Significance from "./components/Significance";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Modal from "./components/Modal";
import { useState } from "react";
import { SideNav } from "./components/SideNav";

function App() {
  const [modal, setModal] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="relative">
      {modal ? <Modal setModal={setModal} /> : null}
      {sideNav ? <SideNav setSideNav={setSideNav} /> : null}
      <div>
        <NavBar setSideNav={setSideNav} />
        <HeroSection />
        <Significance />
        <Section1 />
        <Section2 />
        <Section3 setModal={setModal} />
      </div>
    </div>
  );
}

export default App;
