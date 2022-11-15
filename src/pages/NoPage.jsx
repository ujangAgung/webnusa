import React from "react";

import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>404 &mdash; Nusa Agency</title>
      </Helmet>
      <div className="flex h-screen bg-gradient-to-r from-biru-logo to-hejo-logo">
        <div className="m-auto text-center text-white">
          <h1 className="text-9xl">404</h1>
          <h3 className="text-2xl uppercase font-squarePeg">
            Halaman Tidak di temukan!
          </h3>
          <Link to={"/"} className="underline">
            « Halaman Utama
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoPage;
