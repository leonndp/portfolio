import Image from "next/image";
import Link from "next/link";
import { MailIcon, DocumentDownloadIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { attributes, react as AboutContent } from "../content/about.md";

function AboutCard() {
  return (
    <section id="about" className="bg-gray-800 w-full shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-6 lg:p-12">
        <div className="relative col-span-1 h-96 lg:h-auto">
          {/* <Image src='/me.jpg' layout="responsive" width="1072" height="1440" /> */}
          <Image src={attributes.img} layout="fill" objectFit="cover" />
          {/* <img src={require("./images/me.jpg")} alt="" /> */}
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h1>
            I'm <strong className="font-orbitron">{attributes.name}</strong>
          </h1>
          <h3>{attributes.title}</h3>
          <hr className="my-5 border-gray-700" />
          <table className="leading-6">
            <tbody>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  Age
                </td>
                <td>{attributes.age}</td>
              </tr>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  Based in
                </td>
                <td>{attributes.hometown}</td>
              </tr>
              <tr>
                <td className="font-orbitron font-bold uppercase text-blue-500 pr-16">
                  E-mail
                </td>
                <td>{attributes.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex space-x-6 items-center my-5">
            <a
              href={`mailto:${attributes.email}`}
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
              href="https://www.github.com/leonndp"
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
              href="https://www.linkedin.com/in/leonndp/"
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
          <p>{attributes.summary}</p>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1NOeTpQu0T4bGYKeedWaOKH-Nn4Nd4pUx/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="group w-full bg-purple-500 hover:bg-indigo-700 py-8 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200 font-orbitron"
      >
        <DocumentDownloadIcon className="h-10" />
        <span>Download CV</span>
      </a>
    </section>
  );
}

export default AboutCard;
