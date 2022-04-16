var hesapla = function () {
  var sayi = parseInt(document.getElementById("txtSayi").value);
  if (sayi >= 1 && sayi <= 6) {
    zarAt(sayi);
  } else if (isNaN(sayi)) {
    alert("Lütfen bir sayı giriniz");
    return;
  } else {
    alert("Lütfen 1 ile 6 arasında bir sayı giriniz");
    return;
  }
};
var zarAt = function (sayi) {
  var sayac = 0;
  while (true) {
    var zar1 = Math.floor(Math.random() * 6) + 1;
      var zar2 = Math.floor(Math.random() * 6) + 1;
      console.log(zar1 + " " + zar2);
    sayac++;
    if (zar1 == zar2 && sayi == zar1) {
      alert(sayac + ". denemede " + zar1 + " " + zar2 + " çifti geldi");
      break;
    }
  }
  return sayac;
};
