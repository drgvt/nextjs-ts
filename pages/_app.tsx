import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";
import superImg from "../public/image.jpg";
import "../styles/globals.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={superImg}
      width={500}
      height={350}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
