import PortfolioCard from "./PortfolioCard";
import { attributes, react as PortfolioContent } from "../content/portfolio.md";

function Portfolio() {
  let { projects } = attributes;
  return (
    <section id="portfolio" className="pt-28">
      <h1 className="text-center mb-10 font-orbitron">Portfolio</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, key) => (
          <PortfolioCard
            key={key}
            ImgProps={{
              src: project.image,
              alt: project.title,
            }}
            skills={project.skills}
            bgColor={project.color}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
