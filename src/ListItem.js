import React from "react";
import styled from "styled-components";
import DefaultThumb from "./Defaultthumb";

import { setBoxShadow, setFlex } from "./helpers/styled.util";
import { BOX_SHADOW } from "./styles/common";

const thumbSize = 100;
const bgColor = "rgba(190, 190, 190, 0.3)";

const Container = styled.div`
  ${setFlex()}
  width: 600px;
  margin-bottom: 40px;
  background: ${bgColor};
  &:hover {
    ${setBoxShadow(BOX_SHADOW)}
    background: white;
    transition: all 150ms ease-in-out;
  }
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

const ThumbContainer = styled.div`
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  background: black;
`;

const ItemImage = styled.div`
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;

const DefaultThumbContainer = styled.span`
  ${setFlex()}
  text-align: center;
  width: 50px;
  margin: 0 25px auto;
  height: ${thumbSize}px;
`;

const ItemLink = styled.div`
  margin: 0 auto;
  padding: 10px;
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

  const thumbImage =
    images && images.fixed_height_small && images.fixed_height_small.webp;

  return (
    <Container>
      <ImageLink onClick={handleClick}>
        <ItemRow>
          {thumbImage ? (
            <ThumbContainer>
              <ItemImage image={thumbImage} />
            </ThumbContainer>
          ) : (
            <DefaultThumbContainer>
              <DefaultThumb />
            </DefaultThumbContainer>
          )}
          <ItemLink>{url}</ItemLink>
        </ItemRow>
      </ImageLink>
    </Container>
  );
}

export default ListItem;
