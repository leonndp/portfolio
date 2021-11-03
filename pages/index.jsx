import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";

import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  const { title } = attributes;

  return (
    <div className="relative">
      <Head>
        <title>Leon N. Dela Pena | Full-Stack Developer</title>
        <meta
          name="description"
          content="Need a web app done efficiently and reliably? You've come to the right place!"
        />
        <meta
          name="keyword"
          content="leonndp, portfolio, developer, full stack, front end, back end, react, mongo, mongodb, express.js, node.js, react native, javascript"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomeContent />
      <Header />
      <Banner />
      <Content />

      {/* Header */}
      {/* Nav */}
      {/* Results */}
    </div>
  );
}
