import React from "react"
import './home.css';
import Clients from "./Clients";
import Intro from "./Intro";


const Home = () => {

  return (
    <>
      <section className="hero">
        <h1>
          Experience the Power of Robotics: <span>Empower Yourself</span> with
          STEM Education!
          <span role="img" aria-label="high_voltage">
            ⚡
          </span>
        </h1>
        <div className="blur-gradient" />
      </section>
      <Intro />
      <Clients />
    </>
  );
}
export default Home
