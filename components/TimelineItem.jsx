import Image from "next/image";

function TimelineItem({
  side = "right",
  ImageProps = {
    src: "/graphetal.jpg",
    alt: "Graphetal Branding and Design",
  },
  dates = "2020 - Present",
  company = "Graphetal Branding and Design",
  role = "Lead Front-End Developer",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}) {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full ${
        side === "left" && "lg:flex-row-reverse"
      }`}
    >
      <div className="hidden lg:block order-1 w-5/12"></div>
      <div className="relative z-20 flex items-center order-1 shadow-xl w-12 h-12">
        {/* <h1 className="mx-auto font-semibold text-lg text-white">1</h1> */}
        <Image
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          {...ImageProps}
        />
      </div>
      <div className="order-1 bg-gray-800 shadow-xl w-3/4 lg:w-5/12 p-8 border-t-8 border-blue-500">
        <div className="text-center space-y-2 mb-5">
          <h4 className="text-blue-500">{dates}</h4>
          <h3 className="text-center font-bold">{company}</h3>
          <h5 className="text-center uppercase">{role}</h5>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
