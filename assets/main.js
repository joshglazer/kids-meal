// When the app loads, check if we already have a stored name
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("username");
  const userDisplay = document.getElementById("user-display");
  if (name && userDisplay) {
    userDisplay.textContent = `Logged in as ${name}`;
  }
});
