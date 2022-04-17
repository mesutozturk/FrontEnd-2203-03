console.log("slider.js");

function changeColor() {
    var red = document.getElementById("in-red").value;
    var green = document.getElementById("in-green").value;
    var blue = document.getElementById("in-blue").value;

    var color = "rgb(" + red + "," + green + "," + blue + ")";
    var colorInvert = `rgb(${255-red},${255-green},${255-blue})`; // string interpolation -- string format
    var div = document.getElementById("dv-color");

    div.innerHTML = color;
    div.style.backgroundColor = color;
    div.style.color = colorInvert;
    
    console.log(color);
    console.log(colorInvert);
}

//init function
//changeColor();