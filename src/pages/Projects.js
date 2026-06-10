import { useState } from "react";
import Clone from "../components/Clone.js"
import Personal from "../components/Personal.js"
import Practical from "../components/Practical.js"
import Team from "../components/Team.js"
import Popup from "../components/Popup.js";
import "./projects.scss";

const TABS = [
  { key: "all", label: "All" },
  { key: "team", label: "Team" },
  { key: "clone", label: "Clone" },
  { key: "personal", label: "Personal" },
  { key: "practical", label: "Practical" },
];
const Projects = () => {
    const [active, setActive] = useState("all");
    const [selectedSlide, setSelectedSlide] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const openPopup = (projectData)=>{
      setSelectedSlide(projectData);
      setIsClosing(false);
    }
    const closePopup = ()=>{
     setIsClosing(true);

    setTimeout(() => {
      setSelectedSlide(null);
      setIsClosing(false);
    }, 450);
    }
    return (
    <div className="projects">
      <ul className="tabs">
        {TABS.map((t) => (
          <li key={t.key}>
            <button
              type="button"
              className={active === t.key ? "tab active" : "tab"}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="panel">
        {active === "all" && (
          <>
            <Team onOpen={openPopup}/>
            <Clone onOpen={openPopup}/>
            <Personal onOpen={openPopup}/>
            <Practical onOpen={openPopup}/>
          </>
        )}
        {active === "team" && <Team onOpen={openPopup}/>}
        {active === "clone" && <Clone onOpen={openPopup}/>}
        {active === "personal" && <Personal onOpen={openPopup}/>}
        {active === "practical" && <Practical onOpen={openPopup}/>}
      </div>
         {selectedSlide && (
        <Popup data={selectedSlide} onClose={closePopup} isClosing={isClosing}/>
      )}
    </div>
  )
}

export default Projects
