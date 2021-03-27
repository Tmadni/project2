import React from "react";
import Slide from "./Couresel";
import Safety from "../Home_components/safety";
import Footer from "../Home_components/footer";
import ContentsCard from "../Home_components/contents_card";
import Contents2 from "../Home_components/contents_2";
function Home() {
  return (
    <>
      <Slide />
      <ContentsCard />
      <Contents2 />
      <Safety />
      <Footer />
    </>
  );
}
export default Home;
