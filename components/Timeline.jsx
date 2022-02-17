import TimelineItem from "./TimelineItem";
import {
  attributes,
  react as ExperienceContent,
} from "../content/experience.md";

function Timeline() {
  let { work } = attributes;
  return (
    <div className="relative overflow-hidden h-full">
      <div className="absolute border-opacity-20 border-gray-700 h-full border left-6 lg:left-1/2"></div>
      {work.map((item, key) => (
        <TimelineItem
          key={key}
          ImageProps={{
            src: item.icon,
            alt: item.company,
          }}
          dates={item.dates}
          company={item.company}
          role={item.role}
          description={item.description}
          side={key % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
}

export default Timeline;
