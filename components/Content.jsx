import About from "./AboutCard";
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function Content() {
  return (
    <div className="absolute w-full top-36 md:top-52 lg:top-1/3">
      <div className="container mx-auto px-5 sm:px-10 xl:px-40 2xl:px-72">
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <h4 className="my-20 text-center">Leon N. Dela Pena © 2021</h4>
      </div>
    </div>
  );
}

export default Content;
