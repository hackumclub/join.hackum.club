import Head from "next/head";
import Navigation from "@/components/Navigation";
import MiniBanner from "../components/miniBanner"

export default function Home() {
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    </>
  );
}