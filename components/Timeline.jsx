import Image from "next/image";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="relative overflow-hidden h-full">
      <div className="absolute border-opacity-20 border-gray-700 h-full border left-6 lg:left-1/2"></div>
      <TimelineItem />
      <TimelineItem side="left" />
    </div>
  );
}

export default Timeline;
