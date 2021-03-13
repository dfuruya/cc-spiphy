function setCss(property, value) {
  return `${property}: ${value};`;
}

export function setFlex() {
  return setCss("display", "flex");
}
