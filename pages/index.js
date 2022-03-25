import Head from "next/head";
import Banner from "components/Banner";
import Navigation from "@/components/Navigation";
import MiniBanner from "../components/miniBanner";
import CustomButton from "@/components/CustomButton";
import Arrow from "@/components/Arrow";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Text from "@/components/text1";
import Hint from "@/components/Hint";
import { Col, Grid, Row } from "@/components/Grid";
import styled from "@emotion/styled";

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
        <Col>
          <Navigation />
        </Col>
        <Banner img="/bannerBg.png" button="yes">
          Мэдээллийн технологийн Hackum <br key="1" /> клубийн бүртгэл эхэллээ
        </Banner>
        <Arrow></Arrow>
        <About></About>
        <Vision></Vision>
        <Text>
          <Col>
            <MiniBanner
              color="red"
              title="Сонирхол нэгтэй хамт олонтой болох"
              icon="/icon1.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
            <MiniBanner
              color="yellow"
              title="Мэргэжилтэйгээ илүү танилцах"
              icon="/icon2.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
            <MiniBanner
              color="green"
              title="Workshops & Techmeetups"
              icon="/icon3.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
            <MiniBanner
              color="blue"
              title="Сонирхолтой төслүүдэд гар бие оролцох"
              icon="/icon4.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
            <MiniBanner
              color="red"
              title="Бусад үйл ажиллагаа"
              icon="/icon5.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
            <MiniBanner
              color="yellow"
              title="Stickers & Hoodie"
              icon="/icon9.svg"
            >
              Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ
              текстийг түр ашиглалаа
            </MiniBanner>
          </Col>
        </Text>
        <Grid>
          <Row>
            <Col md={4}>
              <Hint color="blue" title="1. Хүсэлт илгээх" icon="/icon7.svg">
                Бидний бэлдсэн формийг үнэн зөв бөглөж элсэх хүсэлтээ явуулах
              </Hint>
            </Col>
            <Col md={4}>
              <Hint color="red" title="2. Шалгаруулалт" icon="/icon8.svg">
                Таны явуулсан хүсэлттэй манай үндсэн гишүүд танилцаж 80 оюутанд
                тэнцсэн мэдээг хүргэх{" "}
              </Hint>
            </Col>
            <Col md={4}>
              <Hint color="yellow" title="3. Нэгдсэн уулзалт" icon="/Icon6.svg">
                Хэрэв та клубдээ амжилттай тэнцсэн бол манай элсэлтийн нэгдсэн
                уулзалт дээр ирж илүү дотно танилцаарай{" "}
              </Hint>
            </Col>
          </Row>
        </Grid>
        <Banner img="/cover1.png"></Banner>
        <ButtonCon>
          <CustomButton type="solid">Бүртгүүлэх</CustomButton>
        </ButtonCon>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Grid>
    </>
  );
}
