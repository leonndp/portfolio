import { useState, useEffect } from "react";
import Link from "next/link";
import { MailIcon, DocumentDownloadIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  attributes as aboutAttributes,
  react as AboutContent,
} from "../content/about.md";
import {
  attributes as linksAttributes,
  react as LinksContent,
} from "../content/links.md";

const AboutCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="about"
      className={`bg-gray-800 w-full shadow-2xl transition-all ease-in-out duration-700 ${
        !isLoaded && "translate-y-96"
      } ${!isLoaded ? "opacity-0" : "opacity-100"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-6 lg:p-12">
        <div className="relative col-span-1 h-96 lg:h-auto">
          <img
            className="object-cover w-full h-full"
            src={aboutAttributes.img}
            alt="Leon N. Dela Pena"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h1>
            I'm{" "}
            <strong className="font-orbitron">{aboutAttributes.name}</strong>
          </h1>
          <h3>{aboutAttributes.title}</h3>
          <hr className="my-5 border-gray-700" />
          <table className="leading-6">
            <tbody>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  Age
                </td>
                <td>{aboutAttributes.age}</td>
              </tr>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  Based in
                </td>
                <td>{aboutAttributes.hometown}</td>
              </tr>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  E-mail
                </td>
                <td>{linksAttributes.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex space-x-6 items-center my-5">
            <a
              href={`mailto:${linksAttributes.email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="text-purple-500 hover:text-indigo-700 duration-150"
              />
            </a>
            <a
              href={linksAttributes.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-purple-500 hover:text-indigo-700 duration-150"
              />
            </a>
            <a
              href={linksAttributes.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-purple-500 hover:text-indigo-700 duration-150"
              />
            </a>
          </div>
          <p>{aboutAttributes.summary}</p>
        </div>
      </div>
      <a
        href={linksAttributes.resume}
        target="_blank"
        rel="noreferrer"
        className="group w-full bg-purple-500 hover:bg-indigo-700 py-8 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200 font-orbitron"
      >
        <DocumentDownloadIcon className="h-10" />
        <span>Download CV</span>
      </a>
    </section>
  );
};

export default AboutCard;
