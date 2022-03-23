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
      <MiniBanner title="Сонирхол нэг хамт олонтой болох" text="Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглана"
      // link={[<i class="fa-duotone fa-alicorn"></i>]}
      />
    </>
  );
}