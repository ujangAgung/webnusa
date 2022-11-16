import React from "react";

const Keunggulan = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center p-5">
        <h5 className="text-xl font-semibold uppercase">Keunggulan</h5>
        <h1 className="text-4xl md:text-5xl font-semibold mt-5 text-hejo-logo">
          Kenapa Harus
          <span className="underline decoration-solid decoration-biru-logo ml-2">
            Nusa Agency
          </span>
          ?
        </h1>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-10 text-justify">
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Kostumisasi Website</h4>
            <p className="font-light">
              Nusa Agency menyediakan fitur yang sangat baik untuk web
              development sehingga client bisa mengajukan kostumisasi pada
              website yang diinginkan.
            </p>
          </div>
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Responsive Website</h4>
            <p className="font-light">
              Nusa Agency membangun website dengan prinsip "Mobile First"
              sehingga design yang Nusa Agency buat kompatibel di segala
              perangkat dari mulai tampilan mobile, tablet, hingga personal
              computer sekalipun.
            </p>
          </div>
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Integrasi</h4>
            <p className="font-light">
              Nusa Agency membuat website agar dapat terintegrasi dengan media
              sosial dan aplikasi pihak ketiga.
            </p>
          </div>
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Pencapaian</h4>
            <p className="font-light">
              Nusa Agency memberikan jasa digital marketing terbaik untuk
              pencapaian pemasaran yang luar biasa dimanapun kapanpun.
            </p>
          </div>
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Target Spesifik </h4>
            <p className="font-light">
              Anda dapat memilih target sesuai keinginan anda dari segi usia,
              lokasi, pekerjaan, dan lain sebagainya!
            </p>
          </div>
          <div className="hover:shadow-lg rounded-lg p-3 hover:text-white hover:bg-gradient-to-r hover:from-biru-logo hover:to-hejo-logo">
            <h4 className="text-2xl font-semibold mb-3">Berpengalaman</h4>
            <p className="font-light">
              Tim kami merupakan praktisi digital marketing expert yang telah
              teruji di bidangnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;
