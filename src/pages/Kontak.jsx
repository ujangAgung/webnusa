import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillEnvironment,
} from "react-icons/ai";

const Kontak = () => {
  return (
    <>
      <Helmet>
        <title>Kontak &mdash; Nusa Agency</title>
        <meta
          name="description"
          content="Kontak Nusa Agency, Digital Marketing, Web Development, OJS"
        />
      </Helmet>
      <section className="bg-slate-100 px-10 md:pt-20">
        <div className="container mx-auto text-center pt-7">
          <h1 className="text-5xl font-bold mb-10">Kontak</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.5381580337951!2d107.76003987248494!3d-6.937064447665394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3f791c4c91b%3A0xd2ed18e235bf3b3f!2sHookey%20Graph%2099!5e0!3m2!1sid!2sid!4v1667882338592!5m2!1sid!2sid"
            className="border-0 rounded-xl w-full h-96 shadow-2xl mb-10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <ul className="grid gap-5 grid-cols-1 md:grid-cols-4 md:grid-rows-3">
              <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer md:row-span-3 md:col-span-2">
                <div className="m-auto group-hover:text-white">
                  <AiFillEnvironment className="w-16 h-16 mx-auto mb-2 " />
                  <p>
                    Jl. Raya Jatinangor, No 21 A, Cibeusi, Jatinangor, Sumedang
                  </p>
                </div>
              </li>
              <a
                href={"https://www.instagram.com/nusaagency/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiFillInstagram className="w-16 h-16 mx-auto mb-2 " />
                    <p>nusaagency</p>
                  </div>
                </li>
              </a>
              <a
                href={"tel:+6282121001145"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiFillPhone className="w-16 h-16 mx-auto mb-2 " />
                    <p>0821 2100 1145</p>
                  </div>
                </li>
              </a>
              <a
                href={"mailto:admin@nusaagency.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiFillMail className="w-16 h-16 mx-auto mb-2 " />
                    <p className="md:text-xs lg:text-base">
                      admin@nusaagency.com
                    </p>
                  </div>
                </li>
              </a>
              <a
                href={"https://www.linkedin.com/in/nusa-agency-a43a8024a"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiFillLinkedin className="w-16 h-16 mx-auto mb-2 " />
                    <p>Nusa Agency</p>
                  </div>
                </li>
              </a>
              <a
                href={"https://m.facebook.com/NusaAgency2022/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiFillFacebook className="w-16 h-16 mx-auto mb-2 " />
                    <p>Nusa Agency</p>
                  </div>
                </li>
              </a>
              <a
                href={"https://twitter.com/nusaagency"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo hover:cursor-pointer">
                  <div className="m-auto group-hover:text-white">
                    <AiOutlineTwitter className="w-16 h-16 mx-auto mb-2 " />
                    <p>nusaagency</p>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kontak;
