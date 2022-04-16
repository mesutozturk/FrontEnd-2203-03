var liste = [];

function ekle() {
    var ad = document.getElementById("txtAd").value;
    var soyad = document.getElementById("txtSoyad").value;
    var kisi = {
        ad: ad,
        soyad: soyad,
        toString: function () {
            return this.ad + " " + this.soyad;
        }
    };
    liste.push(kisi);
    document.getElementById("txtAd").value = "";
    document.getElementById("txtSoyad").value = "";
    document.getElementById("txtAd").focus();
    console.log(liste);
    listele();
}

function listele() {
    var ol = document.getElementById("sinif-listesi");
    ol.innerHTML = "";
    
    for (var i = 0; i < liste.length; i++) {
        var item = liste[i];
        var li = document.createElement("li");
        li.innerHTML = item.toString();
        ol.appendChild(li);
    }
}