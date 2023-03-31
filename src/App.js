import React from "react";
// import { Switch, Route, NavLink } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// common
import Header from "./components/common/Header";

// main
import Main from "./components/main/Main";

// subpages
import PreRegistration from "./components/sub/PreRegistration";
import GameIntroduction from "./components/sub/GameIntroduction";
import GameIntroductionCopy from "./components/sub/GameIntroductionCopy";
import Characters from "./components/sub/Characters";
import Media from "./components/sub/Media";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main></Main> */}
      {/* <nav>
        <Link to="/">Main</Link>
        <Link to="/preregistration">PreRegistration</Link>
        <Link to="/gameintroduction">GameIntroduction</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/media">Media</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preregistration" element={<PreRegistration />} />
        <Route path="/gameintroduction" element={<GameIntroduction />} />
        <Route
          path="/gameintroductionCopy"
          element={<GameIntroductionCopy />}
        />
        <Route path="/characters" element={<Characters />} />
        <Route path="/Media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
