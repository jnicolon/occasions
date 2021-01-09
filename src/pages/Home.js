import React from "react";

//Router
import { Link } from "react-router-dom";

//Components
import IntroCard1 from "../components/home/IntroCard1";
import IntroCard2 from "../components/home/IntroCard2";
import IntroCard3 from "../components/home/IntroCard3";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Occasions</h1>
      <div className="home-line"></div>
      <div className="home-intro-container">
        <IntroCard1 />
        <IntroCard2 />
        <IntroCard3 />
      </div>
      <div className="home-line"></div>
      <div className="home-log-container">
        <Link>
          <h2 className="home-log-btn">Log In</h2>
        </Link>
        <Link>
          <h2 className="home-log-btn">Sign Up</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
