import React from "react";
import Common from "./Common";
import AboutImage from "./images/home.jpg";
function About() {
  const Bio =
    "I am a professional web developer with over 5 years of experience in building cool and modern websites I have have created thousands of websites for my clients and i also work on upwork and fiverr And i have studied software engineering in the international Information technology institute called Aptech COmputer Education.";
  return (
    <>
      <Common
        HeadingOne="Here Is Something  About Me 🔥 "
        Strong=" I have Created Thousands Of Websites "
        HeadingTwo={Bio}
        BtnText="My Services"
        link="/service"
        img={AboutImage}
      />
    </>
  );
}

export default About;
