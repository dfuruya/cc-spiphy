import React from "react";
import styled from "styled-components";

import { setFlex } from "./helpers/styled.util";

const Container = styled.div`
  ${setFlex()}
  width: 600px;
  margin-bottom: 40px;
  background: lightgray;
`;

const ImageLink = styled.a`
  cursor: pointer;
  width: 100%;
`;

const ItemRow = styled.div`
  ${setFlex()}
  width: 100%;
  align-items: center;
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;

const ItemLink = styled.div`
  margin: 0 auto;
`;

function ListItem(props) {
  const { url, images } = props.data;

  function handleClick(evt) {
    evt.preventDefault();
    props.onSelect(images.fixed_width.url);
  }

  // return (
  //   <Container>
  //     <ImageLink target="_blank" rel="noreferrer" href={url}>
  //       <ItemRow>
  //         <ItemImage image={images.fixed_height_small.webp} />
  //         <ItemLink>{url}</ItemLink>
  //       </ItemRow>
  //     </ImageLink>
  //   </Container>
  // );
  return (
    <Container>
      <ImageLink onClick={handleClick}>
        <ItemRow>
          <ItemImage image={images.fixed_height_small.webp} />
          <ItemLink>{url}</ItemLink>
        </ItemRow>
      </ImageLink>
    </Container>
  );
}

export default ListItem;
