console.log("map.js loaded");

let konumBul = function () {
    if (navigator.geolocation) {
        console.log("Konum bulma desteği var");
        navigator.geolocation.getCurrentPosition(konumBulundu, konumBasarisiz);
    } else {
        console.log("Konum bulma desteği yok");
    }
}

let konum;

function initMap() {
    console.log("Google Map js kütüphanesi yüklendi");
    if (konum == undefined) {
        console.log("Konum bilgisi olmadığı için tekrar deneniyor");
        setTimeout(initMap, 2000);
    }
    console.log(konum);
    const mapDiv = document.getElementById("map");
    const map = new google.maps.Map(mapDiv, {
        center: konum,
        zoom: 17,
        mapTypeId: "satellite",
    });

    map.setTilt(45);

    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    // const marker = new google.maps.Marker({
    //     position: konum,
    //     map: map,
    // });

    map.addListener("click", (pos) => {
        console.log("haritaya tıklandı");
        console.log(pos);
        let div = document.getElementById("konum");
        div.innerHTML = `Enlem: ${pos.latLng.lat()} - Boylam: ${pos.latLng.lng()}`;
        var newPos = {
            lat: pos.latLng.lat(),
            lng: pos.latLng.lng()
        };
        newMarker(map, newPos);
    });

}

let newMarker = (map, position) => {
    console.log("new marker");
    console.log(position);
    map
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        draggable: true
    });

    marker.addListener("dragend", (pos) => {
        console.log("dragend");
        console.log(pos);
    });

    marker.addListener("click", () => {
        marker.setMap(null);
    });
}

let konumBulundu = function (positions) {
    console.log(positions);
    let div = document.getElementById("konum");
    div.innerHTML = `Enlem: ${positions.coords.latitude} - Boylam: ${positions.coords.longitude}`;
    konum = {
        lat: positions.coords.latitude,
        lng: positions.coords.longitude
    };
}

let konumBasarisiz = function (error) {
    console.log(error);
    alert(error.message);
}

konumBul();