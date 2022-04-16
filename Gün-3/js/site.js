function selamla() {
  //camelCase
  console.log(degisken1);
  console.log(typeof degisken1);
}

var degisken1 = "Merhaba Dünya"; //String
degisken1 = 10; //Number
degisken1 = 10.5; //Number
degisken1 = true; //Boolean

degisken1 = [1, 2, 3]; //Object (Array)
degisken1[3] = 4;

degisken1 = {
  isim: "Mehmet",
  soyisim: "Kaya",
  yas: 25,
  ekranaYaz: function () {
    console.log(this.isim + " " + this.soyisim);
  },
};

degisken1 = new Date(); //Object (Date)
