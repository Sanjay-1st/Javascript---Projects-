const body = document.body;
const text = document.querySelector(".random");
const button = document.querySelector("button");

function color() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;
    return rgb;

}
button.addEventListener("click", () => {
    const randomColor = color();
    body.style.backgroundColor = randomColor;
    text.textContent = randomColor;
})