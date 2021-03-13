import React, { Fragment, useEffect, useRef } from "react";
import styled from "styled-components";

const boxWidth = 400;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.5;
`;

const Box = styled.div`
  position: fixed;
  margin: 0 calc(50% - ${boxWidth / 2}px) auto;
  margin-top: 120px;
  width: ${boxWidth}px;
  height: ${boxWidth}px;
  background: white;
`;

const BoxImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.selected});
`;

function Lightbox(props) {
  const ref = useRef();

  function handleClickOutside(evt) {
    const { current } = ref;
    if (current && !current.contains(evt.target)) {
      props.onClickOutside();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Fragment>
      <Container />
      <Box ref={ref}>
        <BoxImage selected={props.selected} />
      </Box>
    </Fragment>
  );
}

export default Lightbox;
