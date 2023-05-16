const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const imgButtonTheme = document.querySelector(".img-button");

themeButton.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode");

    if (darkModeOn) {
        imgButtonTheme.setAttribute("src", "./src/img/sun.png");
    } else {
        imgButtonTheme.setAttribute("src", "./src/img/moon.png");
    };
});
