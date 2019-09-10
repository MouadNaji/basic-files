"use strict";

const firstName = "Mouad";
const lastName = "Naji";

SayHello(lastName, firstName);

function SayHello(firstName, lastName) {
  console.log(`hello ${firstName + " " + lastName}`);
}

function presentPet(fName, animalType, animalName) {
  console.log(
    `my name is ${fName} i have a ${animalType} called ${animalName}`
  );
}
let mig = "Mouad";
let dyrNavn = "Simba";
let dyrType = "cat";
presentPet(dyrType, dyrType, dyrType);

function capitalize(name) {
  return console.log(name.charAt(0).toUpperCase() + name.slice(1));
}

let m = "mouad";
capitalize(m);

function fullName(lastName, firstName, middleName) {
  console.log(firstName + lastName + middleName);
}

fullName("Mouad", "Naji");
