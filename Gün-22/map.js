console.log("map.js loaded");

let konumBul = function () {
    if (navigator.geolocation) {
        console.log("Konum bulma desteği var");
        navigator.geolocation.getCurrentPosition(konumBulundu, konumBasarisiz);
    } else {
        console.log("Konum bulma desteği yok");
    }
}

let konumBulundu = function (positions) {
    console.log(positions);
    let div = document.getElementById("konum");
    div.innerHTML = `Enlem: ${positions.coords.latitude} - Boylam: ${positions.coords.longitude}`;
}

let konumBasarisiz = function (error) {
    console.log(error);
    alert(error.message);
}

konumBul();