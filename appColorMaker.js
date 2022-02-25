const btn = document.querySelector(".btn");
const btnCopy = document.querySelector(".btn2");
const display = document.querySelector(".display");
const body = document.querySelector("body");
const colorValueText = document.querySelector(".colorValueText");
const hexPage = document.querySelector(".hexPage");
const rgbPage = document.querySelector(".rgbPage");
const hslPage = document.querySelector(".hslPage");
let page = "hex"

hexPage.addEventListener("click", () => {
    page = "hex" 
})
hslPage.addEventListener("click", () => {
    page = "hsl"
})
rgbPage.addEventListener("click", () => {
    page = "rgb"
})
btn.addEventListener("click", () => {
    if (page == "rgb") createRGB()
    if (page == "hsl") createHSL()
    if (page == "hex") createHEX()
})

function createRGB() {
   
    resetDarkStyle()
    r = Math.floor((Math.random() * 255)) + 1;
    g = Math.floor((Math.random() * 255)) + 1;
    b = Math.floor((Math.random() * 255)) + 1;
    changeColor(`rgb(${r}, ${g}, ${b})`)
    if ((r + g + b) < 200) makeDarkStyle()
}
function createHEX() {
    resetDarkStyle()
    const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    color = '';
    sum = 0;
    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16);
        sum += index;
        let value = arrayOfColorFunctions[index];
        color += value;
    }
    changeColor(`#${color}`)
    if (sum < 37) makeDarkStyle() 
}
function createHSL() {
    resetDarkStyle()
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    changeColor(`hsl(${h}, ${s}%, ${l}%)`)
    if (l < 30) makeDarkStyle()
}

function changeColor(color) {
    colorValueText.textContent = color;
    colorValueText.style.color = color;
    body.style.backgroundColor = color;
}
function makeDarkStyle() {
    btn.classList.add("toDark")
    display.style.backgroundColor = "lightgrey";
    display.style.color = "black";
}
function resetDarkStyle() {
    btn.classList.remove("lightTeame")
    display.style.backgroundColor = "black";
    display.style.color = "white"
}




