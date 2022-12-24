import React from "react";
import Footer from "../components/Footer";
import Hero1 from "../components/Hero1";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero1  heading="PROJECTS" text="Same of my most works"/>
      <Work/>
      <Pricing/>
      <Footer />
    </div>
  );
};

export default Project;
