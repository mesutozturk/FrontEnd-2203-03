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

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    th1.innerHTML = "Sıra";
    th2.innerHTML = "Ad";
    th3.innerHTML = "Soyad";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

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