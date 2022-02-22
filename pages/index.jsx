import Head from "next/head";
import Script from "next/script";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";

import ScrollContext from "../contexts/ScrollContext";
import useScrollPosition from "../hooks/useScrollPosition";

import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  const { title } = attributes;

  const scrollPos = useScrollPosition();
  return (
    <ScrollContext.Provider value={scrollPos}>
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

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
              `,
            }}
          />

          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>

          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <HomeContent />
        <Header />
        <Banner />
        <Content />
      </div>
    </ScrollContext.Provider>
  );
}
