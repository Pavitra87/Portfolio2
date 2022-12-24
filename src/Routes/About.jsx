import React from 'react'
import AboutContent from '../components/AboutContent';
import Footer from "../components/Footer";
import Hero1 from '../components/Hero1';
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero1 heading="ABOUT" text="Im a friendly Front-End-Developer"/>
      <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About
