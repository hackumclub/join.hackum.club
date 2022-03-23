import Head from "next/head";
import Navigation from "@/components/Navigation";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <CustomButton type="outline" text="Бүртгүүлэх" />
      <CustomButton type="solid" text="Бүртгүүлэх" />
    </>
  );
}
