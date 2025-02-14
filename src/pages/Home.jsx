import React from "react";
import HeroPage from "../components/HeroPage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "./AboutPage";
import ContactPage from "../pages/ContactPage";
function Home() {
  return (
    <>
      <div>
        <section id="home">
          <HeroPage />
        </section>
        <section id="services">
          <ServicePage />
        </section>
        <section id="about">
          <AboutPage/>
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </>
  );
}

export default Home;
