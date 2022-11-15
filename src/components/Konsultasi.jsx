import React from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";

const Konsultasi = () => {
  return (
    <section className="fixed bottom-20 md:bottom-4 right-2 md:right-4 shadow-xl rounded-full">
      <a href={"http://wa.me/6282121001145"} target="_blank" rel="noopener">
        <div className="w-12 h-12 md:w-16 md:h-16 flex bg-gradient-to-br from-biru-logo to-hejo-logo rounded-full text-white">
          <AiOutlineWhatsApp className="m-auto w-8 h-8 md:w-10 md:h-10" />
        </div>
      </a>
    </section>
  );
};

export default Konsultasi;
