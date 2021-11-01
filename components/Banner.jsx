import Image from "next/image";

function Banner() {
    return (
        <div className="w-screen h-66vh relative -z-50">
          <Image src="/hero-bg.jpg" layout="fill" objectFit="cover" />
        </div>
    )
}

export default Banner
