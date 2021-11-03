import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function PortfolioCard({
  ImgProps = {
    src: "/portfolio/keystone-logo.png",
    alt: "Keystone Funding",
    width: 398,
    height: 82,
  },
  skills = ["HTML 5", "PostCSS", "Javascript ES6", "Responsive Design"],
  bgColor = "bg-blue-900",
  href = "https://www.keystonefunding.com/",
}) {
  return (
    <div className="group relative col-span-1 w-full h-72 shadow-2xl">
      <div
        className={`relative w-full h-full ${bgColor} group-hover:brightness-50 duration-300`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:scale-125 duration-300 z-10">
          <Image {...ImgProps} />
        </div>
      </div>
      <div className="opacity-0 absolute z-20 w-full py-8 px-16 top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center space-x-6 flex-wrap group-hover:opacity-100 group-hover:top-1/2 duration-300">
        {skills.map((skill) => (
          <span key={skill} className="badge mb-2">
            {skill}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="opacity-0 absolute bottom-5 right-5 bg-gray-800 p-3 rounded-full shadow-xl group-hover:opacity-100 group hover:bg-gray-400 duration-150 z-50"
      >
        <FontAwesomeIcon
          className="text-blue-500 group-hover:text-blue-700 duration-150"
          icon={faLink}
          size="lg"
        />
      </a>
    </div>
  );
}

export default PortfolioCard;