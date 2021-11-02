import Image from "next/image";

function Banner() {
  return (
    <div className="w-screen h-66vh relative border-b-8 border-blue-500 -z-50">
      <Image
        src="/hero-bg.jpg"
        alt="Cyberpunk Banner"
        priority={true}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
