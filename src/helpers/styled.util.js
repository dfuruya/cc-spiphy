function setCss(property, value) {
  return `${property}: ${value};`;
}

export function setFlex() {
  return setCss("display", "flex");
}

export function setBoxShadow(val) {
  return setCss("box-shadow", val);
}
