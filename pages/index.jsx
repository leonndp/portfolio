import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leon N. Dela Pena | Full-Stack Developer</title>
        <meta name="description" content="Need a web app done efficiently and reliably? You've come to the right place!" />
        <meta name="keyword" content="leonndp, portfolio, developer, full stack, front end, back end, react, mongo, mongodb, express.js, node.js, react native, javascript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Content />

      {/* Header */}
      {/* Nav */}
      {/* Results */}
    </div>
  );
}
