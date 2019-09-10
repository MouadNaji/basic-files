function getColorString(red, green, blue) {
  return `rgb(${red},${green}, ${blue})`;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return getColorString(r, g, b);
}
console.log(randomColor());

function hex2rgb(hexColor) {
  const r = Number.parseInt(hexColor.substring(1, 3), 16);
  const g = Number.parseInt(hexColor.substring(3, 5), 16);
  const b = Number.parseInt(hexColor.substring(5, 7), 16);
  let rgb = { r, g, b };
  return rgb;
}
console.log(hex2rgb("#343434"));

//svar
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("mouadNAJI"));
