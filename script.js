"use strict";
let help = prompt("Sizga kerakli kishini kiriting ");
if (help == "Admin") {
  let password = prompt("Parolni kiriting:");
  if (password == "Cansel") {
    console.log("Canseled");
  } else if ((password = "TheMaster")) {
    console.log("Welcome!!!");
  } else {
    console.log("Parol xato");
  }
} else if (help == "Cansel") {
  console.log("Canseled");
} else {
  console.log("Men sizni tanimayman");
}
