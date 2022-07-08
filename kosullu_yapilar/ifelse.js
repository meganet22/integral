let notOrtalama = 120;

if ( notOrtalama > 0 && notOrtalama <= 40 ) {
    console.log("Kaldı");
} else if ( notOrtalama <= 65 ) {
    console.log("Orta");
} else if ( notOrtalama <= 85 ) {
    console.log("İyi");
} else if ( notOrtalama <= 100 ) {
    console.log("Pekiyi");
} else {
    console.log("Not geçersiz.");
}

/*let isim = "Ahmet";
let soyisim = "Yılmaz";
let yas = 25;
let dil = "İngilizce";
if ( yas < 30 && dil == "İngilizce" ) {
    console.log("İşe alındınız: " + isim + " " + soyisim)
} else{
    console.log("İşe alınamadınız: " + isim + " " + soyisim)
}*/

/*console.log(1);
let a = 6;
if ( a != 5 && true || a) {
    console.log(2);
    console.log(3);
}
console.log(4);
console.log(5);
console.log(6);*/

-

// "hangisiBuyuk" adında bir fonksiyon oluşturun. 
// Fonksiyon 2 parametre alacaktır
// Fonksiyon geriye eğer ilk parametre değeri büyükse 1, aksi halde 2 değeri döndürecektir

function hangisiBuyuk(sayi1, sayi2){
  if(sayi1 > sayi2) return 1;
  if(sayi2 > sayi1) return 2;
}

console.log(hangisiBuyuk(9,4));
console.log(hangisiBuyuk(3,8));

-
    
console.log(' "tekmi" adında bir fonksiyon oluşturun, fonksiyon kendisine verilen 1 sayı değeri eğer tek ise true, değilse false boolean değeri döndürsün ');

function tekmi(sayi){
  if(sayi % 2 === 1) return true; 
  else 
    return false;
}

console.log(tekmi(5));
console.log(tekmi(6));

-
    
// "hesapMakinesi" adıyla bir fonksiyon oluşturun.
// Fonksiyon 3 parametre alacaktır
// 1. parametre string bir değer olacaktır ve şu karakterlerden oluşabilir: + - / *  (artı eksi bölü yıldız)
// Fonksiyon 2. ve 3. parametrede gelen sayısal değerlere 1. parametrede gelen değere göre işlem uygulayacaktır ve sonucu döndürecektir.
// Eğer 1. parametre belirtilen 4 karakterden birine eşit değilse geriye false değer döndürecektir.


function hesapMakinesi(p1, p2, p3){
  if( p1 == "-") return p2 - p3;
  else if(p1 == "*") return p2 * p3;
  else if(p1=="/") return p2 / p3;
  else if(p1 == "+") return p2 + p3;
  else return false;
}

console.log(hesapMakinesi("-",3,9));
console.log(hesapMakinesi("*",3,9));
console.log(hesapMakinesi("/",3,9));
console.log(hesapMakinesi("+",3,9));
console.log(hesapMakinesi("b",3, 9));

-
    
