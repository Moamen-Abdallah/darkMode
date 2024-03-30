window.onload = function () {
  let isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "true") {
    document.body.classList.add("dark-mode");
  }
};

function changeColor() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode"))
    localStorage.setItem("darkMode", "true");
  else localStorage.removeItem("darkMode");
}
