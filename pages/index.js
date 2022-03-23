import Head from "next/head";
import Banner from "/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner text={["Мэдээллийн технологийн Hackum", <br/>, "клубийн бүртгэл эхэллээ"]}/>
    </>
  );
}
