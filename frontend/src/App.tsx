import Main from "components/layout/Main";
import HomePage from "pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<div>about</div>}></Route>
        </Routes>
      </Main>
    </Router>
  );
};

export default App;
