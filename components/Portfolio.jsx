import Image from "next/image";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <div className="mt-20">
      <h1 className="text-center mb-10 font-orbitron">Portfolio</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <PortfolioCard
          ImgProps={{
            src: "/portfolio/clean-power-on-logo.png",
            alt: "Clean Power On",
            width: 160,
            height: 56,
          }}
          skills={[
            "React",
            "Gatsby",
            "Node.js",
            "Material-UI",
            "CraftCMS",
            "GraphQL",
            "Responsive Design",
          ]}
          bgColor="bg-green-800"
          href="https://cleanpoweron.com/"
        />
        <PortfolioCard
          ImgProps={{
            src: "/portfolio/j3-logo.png",
            alt: "J3 Capital Group",
            width: 184,
            height: 50,
          }}
          skills={["React.js", "Gatsby", "Material-UI", "Responsive Design"]}
          bgColor="bg-indigo-600"
          href="https://j3capitalgroup.com/"
        />
        <PortfolioCard
          ImgProps={{
            src: "/portfolio/moreactive-logo.png",
            alt: "More Active",
            width: 376,
            height: 97,
          }}
          skills={["HTML 5", "PostCSS", "Javascript ES6", "Responsive Design"]}
          bgColor="bg-green-300"
          href="https://www.moreactive.com/"
        />
        <PortfolioCard
          ImgProps={{
            src: "/portfolio/loanzify-logo.png",
            alt: "Loanzify",
            width: 218,
            height: 62,
          }}
          skills={["HTML 5", "PostCSS", "Javascript ES6", "Responsive Design"]}
          bgColor="bg-pink-300"
          href="https://www.loanzify.com/"
        />
        <PortfolioCard
          ImgProps={{
            src: "/portfolio/keystone-logo.png",
            alt: "Keystone Funding",
            width: 398,
            height: 82,
          }}
          skills={["HTML 5", "PostCSS", "Javascript ES6", "Responsive Design"]}
          bgColor="bg-blue-900"
          href="https://www.keystonefunding.com/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
