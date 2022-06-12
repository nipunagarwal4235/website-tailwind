import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery"
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Services></Services>
      <ContactUs></ContactUs>
    </>
  )
}

export default App;
