import { createDealWithPerson } from "./js/APICall";

const myForm = document.querySelector("#form");
myForm.addEventListener("submit", createDealWithPerson);
