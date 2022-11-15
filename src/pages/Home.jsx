import React from "react";

import Hero from "./Hero";
import Layanan from "./Layanan";
import Tentang from "./Tentang";
import Konsultasi from "../components/Konsultasi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Layanan />
      <Tentang />
      <Konsultasi />
      <Footer />
    </>
  );
};

export default Home;
