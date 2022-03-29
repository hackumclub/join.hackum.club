import Head from "next/head";
import styled from "@emotion/styled";

import Arrow from "@/components/Arrow";
import About from "@/components/About";
import Banner from "components/Banner";
import CustomButton from "@/components/CustomButton";
import { Col, Grid, Row } from "@/components/Grid";
import Hint from "@/components/Hint";
import MiniBanner from "../components/miniBanner";
import Navigation from "@/components/Navigation";
import Text from "@/components/text1";
import Vision from "@/components/Vision";

const BANNER_DATA = [
  {
    id: 1,
    color: "red",
    title: "Сонирхол нэгтэй хамт олонтой болох",
    icon: "/icon1.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
  {
    id: 2,
    color: "yellow",
    title: "Мэргэжилтэйгээ илүү танилцах",
    icon: "/icon2.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
  {
    id: 3,
    color: "green",
    title: "Workshops & Techmeetups",
    icon: "/icon3.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
  {
    id: 4,
    color: "blue",
    title: "Сонирхолтой төслүүдэд гар бие оролцох",
    icon: "/icon4.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
  {
    id: 5,
    color: "red",
    title: "Бусад үйл ажиллагаа",
    icon: "/icon5.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
  {
    id: 6,
    color: "yellow",
    title: "Stickers & Hoodie",
    icon: "/icon9.svg",
    description:
      "Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглалаа",
  },
];

export default function Home() {
  const ButtonCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <Head>
        <title>Бүртгэл - Hackum.club</title>
        <meta name="description" content="HACKUM клубийн бүртгэл эхэллээ" />
      </Head>
      <Grid>
        <Navigation />

        <Banner img="/bannerBg.png" button="yes">
          Мэдээллийн технологийн Hackum <br key="1" /> клубийн бүртгэл эхэллээ
        </Banner>
        <Arrow />
        <About />
        <Vision />
        <Text>
          <Col>
            {BANNER_DATA.map((el) => (
              <MiniBanner
                key={el.id}
                color={el.color}
                title={el.title}
                icon={el.icon}
              >
                {el.description}
              </MiniBanner>
            ))}
          </Col>
        </Text>
        <Grid>
          <Row>
            <Col lg={4}>
              <Hint color="blue" title="1. Хүсэлт илгээх" icon="/icon7.svg">
                Бидний бэлдсэн формийг үнэн зөв бөглөж элсэх хүсэлтээ явуулах
              </Hint>
            </Col>
            <Col lg={4}>
              <Hint color="red" title="2. Шалгаруулалт" icon="/icon8.svg">
                Таны явуулсан хүсэлттэй манай үндсэн гишүүд танилцаж 80 оюутанд
                тэнцсэн мэдээг хүргэх
              </Hint>
            </Col>
            <Col lg={4}>
              <Hint color="yellow" title="3. Нэгдсэн уулзалт" icon="/Icon6.svg">
                Хэрэв та клубдээ амжилттай тэнцсэн бол манай элсэлтийн нэгдсэн
                уулзалт дээр ирж илүү дотно танилцаарай
              </Hint>
            </Col>
          </Row>
        </Grid>
        <Banner img="/cover1.png" />
        <Row center="xs" style={{ marginBottom: "100px" }}>
          <CustomButton variant="solid">Бүртгүүлэх</CustomButton>
        </Row>
        <Row>
          <p style={{ color: "white" }}>
            <b style={{ color: "#606e7c" }}>Developed by:</b> Ш. Ганболд, Т.
            Билгүүн, О. Даваадулам, Х. Очирсүх
          </p>
        </Row>
      </Grid>
    </>
  );
}
