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
            let backColor = data.rgb;
            let redColor = data.rgb.r;
            let greenColor = data.rgb.r;
            let blueColor = data.rgb.r;
            const redString = redColor.toString();
            const greenString = greenColor.toString();
            const blueString = blueColor.toString();
            const hexColor = data.color;
            colourHex.innerText = hexColor;
            redRange.value = redColor;
            greenRange.value = greenColor;
            blueRange.value = blueColor;


            console.log(redString);
        })













})