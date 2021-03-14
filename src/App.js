import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

import Search from "./Search";
import Gifs from "./Gifs";
import Lightbox from "./Lightbox";

const Heading = styled.h1``;

export default function App() {
  const [gifs, setGifs] = useState();
  const [curSelected, setCurSelected] = useState("");

  function updateGifsList(gifs) {
    setGifs(gifs);
  }

  function setSelected(image) {
    setCurSelected(image);
  }

  function handleClickOutside() {
    setCurSelected("");
  }

  return (
    <div className="App">
      <Heading>SPIPHY</Heading>
      <Search updateSearch={updateGifsList} />
      <Gifs list={gifs} onSelect={setSelected} />
      {curSelected && (
        <Lightbox selected={curSelected} onClickOutside={handleClickOutside} />
      )}
    </div>
  );
}
