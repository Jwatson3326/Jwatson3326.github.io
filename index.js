function loadStars () {
    //stars support up to 8k resolution
    const vw = 7680
    const vh = 4320
    stars1 = `#stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: `
    stars2 = `#stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: `
    stars3 = `#stars3 {
    width: 3px;
    height: 2px;
    background: transparent;
    box-shadow: `

    //calculates the number of stars to generate based on the screen size, covers up to 8k size
    var starNum1 = 600
    starNum1 = starNum1 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 4320)
    starNum1 = starNum1 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 7680)
    console.log(starNum1)

    var starNum2 = 200
    starNum2 = starNum2 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 4320)
    starNum2 = starNum2 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 7680)

    var starNum3 = 100
    starNum3 = starNum3 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 4320)
    starNum3 = starNum3 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 7680)


    for (let i = 0; i < starNum1; i++) {
        stars1 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff, ";
    }
    for (let i = 0; i < starNum2; i++) {
        stars2 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff, ";
    }
    for (let i = 0; i < starNum3; i++) {
        stars3 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff, ";
    }
    stars1 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    stars2 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    stars3 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    loadCSS(stars1)
    loadCSS(stars2)
    loadCSS(stars3)
}

function loadCSS (cssText) {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = cssText
    document.head.appendChild(styleSheet)
}

document.addEventListener("DOMContentLoaded", loadStars)