import React from "react";
import Helmet from "react-helmet";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Beranda &mdash; Nusa Agency</title>
        <meta
          name="description"
          content="Nusa Agency merupakan perusahaan yang bergerak di dunia digital, web development dan digital marketing."
        />
      </Helmet>
      <main className="bg-gradient-to-t from-[#8299fc] to-white">
        <div className="container mx-auto md:flex md:flex-row-reverse md:h-screen p-10">
          <div className="text-center md:w-7/12 md:m-auto md:text-right">
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              <span className="text-4xl md:text-7xl">Web Development</span> &
              Digital Marketing
            </h1>
            <h3 className="text-lg md:text-3xl font-semibold uppercase">
              Grow Up Your Business
            </h3>
          </div>
          <div className="md:w-5/12 relative">
            <img
              src="/images/hero-2.png"
              alt="Hero"
              className="md:absolute md:bottom-1 md:-right-10 md:w-full"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
