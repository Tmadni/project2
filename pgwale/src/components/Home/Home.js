import React, { useEffect } from "react";
import Slide from "./Couresel";
import Safety from "../Home_components/safety";
import Footer from "../Home_components/footer";
import ContentsCard from "../Home_components/contents_card";
import Contents2 from "../Home_components/contents_2";
import Navbar from "../Home_components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      easing: "ease",
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Slide />
      <ContentsCard />
      <Contents2 />
      <Safety />
      <Footer />
    </>
  );
}
export default Home;
