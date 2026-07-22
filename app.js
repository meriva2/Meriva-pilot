const meriva = {
  sistem: "Meriva Pilot",
  bolge: "Malatya",
  durum: "Sistem Başlatıldı",
  kullanici: "Gerçek Kişi"
};

document.getElementById("durum").innerHTML =
  meriva.durum + " - " + meriva.bolge;
