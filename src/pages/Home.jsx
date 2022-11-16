import React from "react";

import Hero from "./Hero";
import Layanan from "./Layanan";
import Keunggulan from "./Keunggulan";
import Testimonial from "./Testimonial";
import Tentang from "./Tentang";
import Konsultasi from "../components/Konsultasi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Layanan />
      <Keunggulan />
      {/* <Testimonial /> */}
      <Tentang />
      <Konsultasi />
      <Footer />
    </>
  );
};

export default Home;
