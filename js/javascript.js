const nappula = document.querySelector("output");

nappula.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = `<img src="./kuvat/${randomNumber}.png">`;
});
