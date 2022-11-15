import React from "react";

const Tentang = () => {
  return (
    <section>
      <svg
        id="svg1"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 w-full h-full"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
            <stop offset="5%" stopColor="#2b558e"></stop>
            <stop offset="95%" stopColor="#0da35c"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 94.11538461538461,125.47692307692307 188.23076923076923,117.95384615384614 261,114 C 333.7692307692308,110.04615384615386 385.1923076923076,109.66153846153847 457,103 C 528.8076923076924,96.33846153846153 621,83.39999999999999 696,97 C 771,110.60000000000001 828.8076923076924,150.73846153846156 918,151 C 1007.1923076923076,151.26153846153844 1127.7692307692307,111.64615384615382 1220,102 C 1312.2307692307693,92.35384615384618 1376.1153846153848,112.67692307692309 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
            <stop offset="5%" stopColor="#2b558e"></stop>
            <stop offset="95%" stopColor="#0da35c"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 50.656410256410254,274 101.31282051282051,282 195,281 C 288.6871794871795,280 425.4051282051282,270 515,270 C 604.5948717948718,270 647.0666666666667,280 726,288 C 804.9333333333333,296 920.3282051282049,301.99999999999994 996,307 C 1071.671794871795,312.00000000000006 1107.6205128205129,316 1175,309 C 1242.3794871794871,302 1341.1897435897436,284 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
      <div
        className="bg-gradient-to-r from-biru-logo to-hejo-logo p-6 scroll-mt-20"
        id="tentang"
      >
        <div className="container mx-auto md:flex md:flex-row-reverse text-white">
          <div className="md:w-1/2">
            <img
              src="/images/team-nusa.jpeg"
              alt="Team Nusa"
              className="rounded-lg w-8/12 mx-auto"
            />
          </div>
          <div className="md:w-1/2 flex mt-6 md:mt-0">
            <div className="m-auto text-center md:text-right">
              <h5 className="text-xl font-semibold uppercase my-2">
                tentang kami
              </h5>
              <h3 className="text-3xl font-semibold uppercase my-3">
                kembangkan bisnis anda bersama kami
              </h3>

              <p>
                Di era yang serba digital ini, digital marketing dan web
                development merupakan pilihan yang tepat dan efisien untuk bisa
                mengembangkan bisnis Anda .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
