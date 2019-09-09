"use strict";

const firstName = "Mouad";
const lastName = "Naji";

SayHello(lastName, firstName);

function SayHello(firstName, lastName) {
  console.log(`hello ${firstName + " " + lastName}`);
}
