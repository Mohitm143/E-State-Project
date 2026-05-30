import React from "react";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Testimonial from "./Component/Testimonial";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        scroll-smooth
      "
    >
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;