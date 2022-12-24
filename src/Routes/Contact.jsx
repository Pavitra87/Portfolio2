import React from 'react'
import Footer from "../components/Footer";
import Form from '../components/Form';
import Hero1 from '../components/Hero1';
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero1 heading="CONTACT" text=" Lets have a chat"/>
      <Form/>
     <Footer/>
    </div>
  )
}

export default Contact
