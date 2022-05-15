import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./App/Pages/Home";
import PageNotFound from "./App/Pages/PageNotFound";
import About from "./App/Pages/About";
import Game from "./App/Pages/Game";

const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/start" element={<Game />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
