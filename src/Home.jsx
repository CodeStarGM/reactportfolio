import React from "react";
import HomeImg from "../src/images/home.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Common
        HeadingOne="Grow Your Business 10X faster with Me "
        Strong="I'm Ghous Muhammad"
        HeadingTwo="The Professional & Skilled Full Stack developer"
        BtnText="Hire Me"
        link="/contact"
        img={HomeImg}
      />
    </>
  );
}

export default Home;
