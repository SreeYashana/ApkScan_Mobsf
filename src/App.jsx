import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componets/Benefits";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Collaboration from "./componets/Collaboration";
// import Mobsf from "./componets/Mobsf"; // Import corrected
// import Apk from "./componets/Apk";
import Roadmap from "./componets/Roadmap";
const App = () => {
  return (
    <div>
      {/* Navigation */}
      <Header />
      <nav className="my-4">
        <Link to="/" className="mr-4">
          Hero
        </Link>
        <Link to="/benefits" className="mr-4">
          Benefits
        </Link>
        <Link to="/collaboration" className="mr-4">
          Collaboration
        </Link>
        {/* <Link to="/mobsf">Mobsf</Link> */}
        {/* <Link to="/apk">Apk</Link> */}
        {/* <a href="https://app-scaner86.vercel.app/">hi</a> */}
      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/collaboration" element={<Collaboration />} />
        {/* <Route path="/apk" element={<Apk />} /> */}
      </Routes>

      {/* Shared Components */}
      <ButtonGradient />
      <Benefits />
      <Collaboration />
      <Roadmap />
    </div>
  );
};

export default App;
