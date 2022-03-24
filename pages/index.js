import Head from "next/head";
import Banner from "components/Banner";

export default function Home() {
  const LineBreak = <br/>;
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>Мэдээллийн технологийн Hackum {LineBreak} клубийн бүртгэл эхэллээ</Banner>
    </>
  );
}
