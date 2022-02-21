import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import SkillIcon from "./SkillIcon";
import { attributes, react as SkillsContent } from "../content/skills.md";
import Bounce from "react-reveal/Bounce";

function Skills() {
  let { frontend, backend, database } = attributes;

  return (
    <section id="skills" className="pt-28">
      <h1 className="text-center mb-10 font-orbitron">Professional Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div className="col-span-1">
          <Bounce left>
            <div className="bg-gray-800 p-8 shadow-2xl border-t-8 border-pink-500 h-full">
              <h2 className="font-orbitron text-center">
                <FontAwesomeIcon
                  icon={faDesktop}
                  size="lg"
                  className="text-pink-500 mb-3"
                />
                <br />
                <strong>Front-End</strong>
              </h2>
              <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                {frontend.map((item, key) => (
                  <SkillIcon key={key} src={item.icon}>
                    {item.skill}
                  </SkillIcon>
                ))}
              </div>
            </div>
          </Bounce>
        </div>
        <div className="col-span-1">
          <Bounce class="" left>
            <div className="bg-gray-800 p-8 shadow-2xl border-t-8 border-pink-500 h-full">
              <h2 className="font-orbitron text-center">
                <FontAwesomeIcon
                  icon={faCogs}
                  size="lg"
                  className="text-pink-500 mb-3"
                />
                <br />
                <strong>Back-End</strong>
              </h2>
              <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                {backend.map((item, key) => (
                  <SkillIcon key={key} src={item.icon}>
                    {item.skill}
                  </SkillIcon>
                ))}
              </div>
            </div>
          </Bounce>
        </div>
        <div className="col-span-1">
          <Bounce left>
            <div className="bg-gray-800 p-8 shadow-2xl border-t-8 border-pink-500 h-full">
              <h2 className="font-orbitron text-center">
                <FontAwesomeIcon
                  icon={faDatabase}
                  size="lg"
                  className="text-pink-500 mb-3"
                />
                <br />
                <strong>Database</strong>
              </h2>
              <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                {database.map((item, key) => (
                  <SkillIcon key={key} src={item.icon}>
                    {item.skill}
                  </SkillIcon>
                ))}
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}

export default Skills;
