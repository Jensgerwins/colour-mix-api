const randomBtn = document.querySelector("#button-random");
const redRange = document.querySelector("#red-range");
const greenRange = document.querySelector("#green-range");
const blueRange = document.querySelector("#blue-range");
const colourHex = document.querySelector("#colour-hex");
const hintergund = document.querySelector("body");



randomBtn.addEventListener("click", () => {
    fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const redColor = data.rgb.r;
            const greenColor = data.rgb.g;
            const blueColor = data.rgb.b;

            greenRange.value = greenColor;
            blueRange.value = blueColor;
            const redString = redColor.toString(16);
            const greenString = greenColor.toString(16);
            const blueString = blueColor.toString(16);
            const colorHexValue = "#" + redString + greenString + blueString;
            const hexColor = data.color;
            colourHex.innerText = colorHexValue;
            document.body.style.backgroundColor = hexColor;

            console.log(hexColor);
        })













})