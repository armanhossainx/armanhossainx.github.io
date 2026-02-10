const lampToggle = document.getElementById("lamp-toggle");
const body = document.body;

lampToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
});
