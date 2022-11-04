import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "../components/Heading";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error!</title>
      </Head>
      <Heading text="404" tag="h1" />
      <Heading tag="h2" text="Something went wrong" />
    </>
  );
};
export default Error;
