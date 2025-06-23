function showWelcome() {
  const name = document.getElementById("nameInput").value.trim();
  const messageElement = document.getElementById("welcomeMessage");

  if (name) {
    messageElement.textContent = `Welcome, ${name}! We're glad you're here.`;
  } else {
    messageElement.textContent = "Please enter your name.";
  }
}

