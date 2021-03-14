import React, { useState } from "react";
import styled from "styled-components";

import { setFlex } from "./helpers/styled.util";
import { getGifs } from "./services/gifs";

const Container = styled.form`
  ${setFlex()}
  justify-content: space-between;
  width: 600px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  ${setFlex()}
  font-size: 20px;
  flex-grow: 1;
  padding: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`;

function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleOnChange(evt) {
    setSearchInput(evt.target.value);
  }

  async function handleOnSubmit(evt) {
    evt.preventDefault();
    const gifs = await getGifs(searchInput);
    console.log({ gifs });
    setSearchInput("");
    props.updateSearch(gifs);
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input
        value={searchInput}
        placeholder="Search for gifs here"
        onChange={handleOnChange}
      />
      <Button type="button" onClick={handleOnSubmit}>
        Search
      </Button>
    </Container>
  );
}

export default Search;
