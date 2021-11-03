import Image from "next/image";
import Timeline from "./Timeline";

function Portfolio() {
  return (
    <section id="experience" className="pt-28">
      <h1 className="text-center mb-10 font-orbitron">Experience</h1>

      {/* Timeline */}

      <Timeline />
    </section>
  );
}

export default Portfolio;
