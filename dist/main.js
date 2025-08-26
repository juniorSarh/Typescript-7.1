"use strict";
function setGreeting(name) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome, ${name}!`;
}
setGreeting("Developer");
