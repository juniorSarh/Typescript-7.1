function setGreeting(name: string): void {
  const greetingElement = document.getElementById("greeting")!;
  greetingElement.textContent = `Welcome, ${name}!`;
}

setGreeting("Developer");
