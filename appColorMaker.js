const btn = document.querySelector(".btn");
const btnCopy = document.querySelector(".btn2");
const display = document.querySelector(".display");
const body = document.querySelector("body");
const colorValueText = document.querySelector(".colorValueText");
const hexPage = document.querySelector(".hexPage");
const rgbPage = document.querySelector(".rgbPage");
const hslPage = document.querySelector(".hslPage");
let curentTypeOfColor = "hex"
let color = "#fffff"
let previousTypeOfColor="hex"

hexPage.addEventListener("click", () => {
    curentTypeOfColor = "hex"
    console.log(colorValueText.textContent)
    if (previousTypeOfColor !== "hex") changeColorName(colorValueText.textContent, previousTypeOfColor, curentTypeOfColor)
    previousTypeOfColor="hex"
})
rgbPage.addEventListener("click", () => {
    curentTypeOfColor = "rgb"
    console.log(colorValueText.textContent)
    if (previousTypeOfColor !== "rgb") changeColorName(colorValueText.textContent, previousTypeOfColor, curentTypeOfColor)
    previousTypeOfColor = "rgb"
})
hslPage.addEventListener("click", () => {
    curentTypeOfColor = "hsl"
    console.log(colorValueText.textContent)
    if (previousTypeOfColor !== "hsl") changeColorName(colorValueText.textContent, previousTypeOfColor, curentTypeOfColor)
    previousTypeOfColor = "hsl"
})

 
btn.addEventListener("click", () => {
    if (curentTypeOfColor == "rgb") createRGB()
    if (curentTypeOfColor == "hex") createHEX()
    if (curentTypeOfColor == "hsl") createHSL()
})

function createRGB() {
    resetDarkStyle()
    r = Math.floor((Math.random() * 255)) + 1;
    g = Math.floor((Math.random() * 255)) + 1;
    b = Math.floor((Math.random() * 255)) + 1;
    color = `rgb(${r}, ${g}, ${b})`
    changeColor(color)
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
    color = `#${color}`
    changeColor(color)
    if (sum < 37) makeDarkStyle() 
}
function createHSL() {
    resetDarkStyle()
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    color = `hsl(${h},${s}%,${l}%)`
    changeColor(color)
    if (l < 30) makeDarkStyle()
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

function changeColor(color) {
    colorValueText.textContent = color;
    colorValueText.style.color = color;
    body.style.backgroundColor = color;
}

function HEXToRGB(hex) {
    arr = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    return `rgb(${arr[0]},${arr[1]},${arr[2]})`
}
function HEXToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    let color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    console.log(color)
    return color;
}

function RGBToHEX(color) {
        color = "" + color;
        if (!color || color.indexOf("rgb") < 0) {
            return;
        }
        if (color.charAt(0) == "#") {
            return color;
        }
        var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
            r = parseInt(nums[2], 10).toString(16),
            g = parseInt(nums[3], 10).toString(16),
            b = parseInt(nums[4], 10).toString(16);
        color= "#" + (
            (r.length == 1 ? "0" + r : r) +
            (g.length == 1 ? "0" + g : g) +
            (b.length == 1 ? "0" + b : b)
    );
    return `${color}`
}
function RGBToHSL(color) {
    return HEXToHSL(RGBToHEX(color));
}

function HSLToRGB(hsl) {
    return HEXToRGB(HSLToHEX(hsl))
}


function HSLToHEX(hsl) {
    let hue = 0, saturation = 0, lightness = 0;
    let tmp = 0;
    for (let i = 0, j = 0, k = 0; i < hsl.length; i++) {
        let ch = hsl.charCodeAt(i);
        if (ch >= 48 && ch <= 57) {
            tmp = tmp * 10 + (ch - 48);
            k = 1;
            continue;
        } else if (k === 1) {
            switch (j) {
                case 0: hue = (tmp % 360) / 360; break;
                case 1:
                    saturation = (tmp > 100 ? 100 : tmp) / 100; break;
                case 2:
                    lightness = (tmp > 100 ? 100 : tmp) / 100; break;
            }
            j++;
        }
        k = 0;
        tmp = 0;
    }
    let h = (hue / (1 / 6));
    let c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    let x = c * (1 - Math.abs((h % 2) - 1));
    switch (h | 0) {
        case 0: r = c; g = x; b = 0; break;
        case 1: r = x; g = c; b = 0; break;
        case 2: r = 0; g = c; b = x; break;
        case 3: r = 0; g = x; b = c; break;
        case 4: r = x; g = 0; b = c; break;
        case 5: r = c; g = 0; b = x; break;
    }
    let m = lightness - 0.5 * c;
    r += m; g += m; b += m;
    r = r * 255 | 0; g = g * 255 | 0; b = b * 255 | 0;
    let hex = '#';
    k = (r >> 4 & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    k = (r & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    k = (g >> 4 & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    k = (g & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    k = (b >> 4 & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    k = (b & 0xf) + 48;
    if (k > 57) k += 7;
    hex += String.fromCharCode(k);
    color=`${hex}`
    return color;
}

    

    
function changeColorName(color, previousTypeOfColor, curentTypeOfColor) {

    if (curentTypeOfColor === "rgb" || previousTypeOfColor === "hex") {
        console.log(String(HEXToRGB(color)))
        colorValueText.textContent = HEXToRGB(color);
    }
    if (curentTypeOfColor === "hsl" && previousTypeOfColor === "hex") {
        colorValueText.textContent = HEXToHSL(color);
    }

    if (curentTypeOfColor === "hex" && previousTypeOfColor === "rgb") {
        colorValueText.textContent = RGBToHEX(color);
    }
    if (curentTypeOfColor === "hsl" && previousTypeOfColor === "rgb") {
        colorValueText.textContent = RGBToHSL(color);
    }

    if (curentTypeOfColor === "hex" && previousTypeOfColor === "hsl") {
        colorValueText.textContent = HSLToHEX(color);
    }
    if (curentTypeOfColor === "rgb" && previousTypeOfColor === "hsl") {
        colorValueText.textContent = HSLToRGB(color);
    }
 
}
