import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home, Kontak } from "../pages/importPages";
import NoPage from "../pages/NoPage";

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <nav className="fixed bg-white shadow-lg top-0 w-full z-50 invisible md:visible">
        <div className="container mx-auto flex p-4">
          <div className="w-7/12">
            <NavLink to={"/"}>
              <img src="/images/logo.png" alt="Nusa Agency" className="w-11" />
            </NavLink>
          </div>
          <div className="w-5/12 flex items-center justify-end">
            <ul className="flex space-x-10">
              <li>
                <NavLink to={"/"} className="menu-navbar">
                  Beranda
                </NavLink>
              </li>
              <li>
                <a href={"/#layanan"} className="menu-navbar">
                  Layanan
                </a>
              </li>
              <li>
                <a href={"/#tentang"} className="menu-navbar">
                  Tentang
                </a>
              </li>
              <li>
                <NavLink to={"/kontak"} className="menu-navbar">
                  Kontak
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 w-full bg-white rounded-t-lg z-50 md:invisible p-2">
        <div className="flex justify-evenly items-center">
          <NavLink to={"/"}>
            <img
              src="/images/logo.png"
              alt="Logo Navbar Mobile"
              className="w-9"
            />
          </NavLink>
          <a href={"/#layanan"} className="menu-navbar">
            layanan
          </a>
          <a href={"/#tentang"} className="menu-navbar">
            tentang
          </a>
          <a to={"/kontak"} className="menu-navbar">
            kontak
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
