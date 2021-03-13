import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Gifs(props) {
  const { list, onSelect } = props;

  const isInitial = !Array.isArray(list);
  if (isInitial) {
    return <div>Use the box above to search for GIFs!</div>;
  }

  const isEmpty = isInitial && !(list && list.length);
  if (isEmpty) {
    return <div>No results found</div>;
  }

  return (
    <Container>
      {list.map((gif) => (
        <ListItem key={gif.id} data={gif} onSelect={onSelect} />
      ))}
    </Container>
  );
}

export default Gifs;
