import { useState } from "react";
import Clone from "../components/Clone.js"
import Personal from "../components/Personal.js"
import Practical from "../components/Practical.js"
import Team from "../components/Team.js"
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
            <Team />
            <Clone />
            <Personal />
            <Practical />
          </>
        )}

        {active === "team" && <Team />}
        {active === "clone" && <Clone />}
        {active === "personal" && <Personal />}
        {active === "practical" && <Practical />}
      </div>
    </div>
  )
}

export default Projects