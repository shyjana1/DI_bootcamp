let pixels = document.querySelectorAll(".canvas > *");
let buttonColors = document.querySelectorAll('.color');
let color = "";
let mouse_down = false;
let clear = document.querySelector("#clear");
let colorRandom = document.querySelector("#random");

function colorandom(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    color = "rgb(" + red + ", " + green + ", " + blue + ")";
}
colorRandom.addEventListener("mousedown", colorandom);

function pixelDown(e) {
    mouse_down = true;
}

function pixelEnter(e) {
    if (mouse_down) {
        e.target.style.backgroundColor = color;
    }
}

function pixelUp(e) {
    mouse_down = false;
}

clear.addEventListener("mousedown", clearCanvas);

function clearCanvas(e) {
    for (pixel of pixels) {
        pixel.style.backgroundColor = "white";
    }
}

for (const pixel of pixels) {
    pixel.addEventListener("mousedown", pixelDown);
    pixel.addEventListener("mouseenter", pixelEnter);
    pixel.addEventListener("mouseup", pixelUp);

}

for (const button of buttonColors) {
    button.addEventListener("mousedown", (e) => {
        color = e.target.style.backgroundColor;
    })
}