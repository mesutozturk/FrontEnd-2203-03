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
    //console.log(liste);
    // listele();
    listeleTablo();
}

function listeleTablo() {
    var table = document.getElementById("sinif-listesi");
    table.innerHTML = "";

    for (var i = 0; i < liste.length; i++) {
        var item = liste[i];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.innerHTML = i + 1;
        td2.innerHTML = item.ad;
        td3.innerHTML = item.soyad;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
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