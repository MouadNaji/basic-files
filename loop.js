"use strict";

//for (let counter = 0; counter < 10; counter++) {
//  console.log(counter);
//}

//for (let i = 1; i < 10; i++) {
//  console.log(i);
//}

//for (let i = 10; i > -1; i--) {
// console.log(i + "liftof");
//}

//for (let i = 1; i < 20; i += 2) {
// console.log(i);
//}

//for (let i = 1; i < 16777216; i *= 2) {
//console.log(i);
//}

//for (let i = 111; i < 138; i += 3) {
// console.log(i);
//}

for (let i = 100; i > -1; i -= 10) {
  console.log(i);
}
setInterval(() => {
  let mig = document.querySelector(".se");
  mig.style.height = "2rem";
  mig.style.width = "2rem";
  mig.style.backgroundColor = "green";
  mig.style.margin = "0rem";
}, 600);

setInterval(() => {
  let mig = document.querySelector(".se");
  mig.style.height = "5rem";
  mig.style.width = "5rem";
  mig.style.backgroundColor = "red";
  mig.style.margin = "3rem";
}, 700);
