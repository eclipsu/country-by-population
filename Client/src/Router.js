import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import PageNotFound from "./App/Pages/PageNotFound";
import Game from "./App/Pages/Game";

const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
