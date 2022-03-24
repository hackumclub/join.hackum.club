import Head from "next/head";
import Banner from "components/Banner";
import Navigation from "@/components/Navigation";
import CustomButton from "@/components/CustomButton";
import Arrow from "@/components/Arrow";

export default function Home() {
  const LineBreak = <br/>;
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
      </Head>
      <Banner>Мэдээллийн технологийн Hackum {LineBreak} клубийн бүртгэл эхэллээ</Banner>
      <Navigation />
    </>
  );
}
