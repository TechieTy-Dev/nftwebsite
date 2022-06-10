import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Portfolio,
  Header,
  Features,
  Possibility,
  WhatThoth,
} from "./containers";
import { CTA, Brand, Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Sidebar />
      </div>
      <Portfolio />
      <WhatThoth />
      <Features />
      <Blog />
      <Possibility />
      <CTA />
      <Brand />
      <Footer />
    </div>
  );
};

export default App;
