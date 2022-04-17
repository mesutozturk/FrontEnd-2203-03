console.log("slider.js");

function changeColor() {
    var red = document.getElementById("in-red").value;
    var green = document.getElementById("in-green").value;
    var blue = document.getElementById("in-blue").value;

    var color = "rgb(" + red + "," + green + "," + blue + ")";
    var color2 = `rgb(${red},${green},${blue})`;

    console.log(color);
    console.log(color2);
}