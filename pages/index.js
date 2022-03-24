import Head from "next/head";
import Navigation from "@/components/Navigation";
import CustomButton from "@/components/CustomButton";
import Arrow from "@/components/Arrow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" /> 
      </Head>
      <Navigation />
    </>
  );
}
