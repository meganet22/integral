//for
for(var i=0; i<24; i++)
{
  alert("bugün çok güzel geçecek");
}


//değer göndermek
function karebulma()
{
  for (var i=0; i<10; i++)
    {
    karebul (i);
    }
    
    }
    function karebul(say)
    {
  alert("karekök:"+ Math.sqrt(cevap) );
}


//do while
//while
//obje veya dizi tipinde //for .. in
//obje veya dizi tipinde //for .. of
-
"ortalama" adında bir fonksiyon oluşturun, fonksiyon kendisine verilen 3 parametrenin ortalamasını geriye döndürsün.
function ortalama(sayi1, sayi2, sayi3){
  return (sayi1 + sayi2 + sayi3)/3;
}

console.log(ortalama(8,16,24));
-
"hangisiBuyuk" adında bir fonksiyon oluşturun.
a. Fonksiyon 2 parametre alacaktır
b. Fonksiyon geriye eğer ilk parametre değeri büyükse 1, aksi halde 2 değeri döndürecektir
function hangisiBuyuk(sayi1, sayi2){
  if(sayi1 > sayi2) return 1;
  if(sayi2 > sayi1) return 2;
}

console.log(hangisiBuyuk(9,4));
console.log(hangisiBuyuk(3,8));
-
"tekmi" adında bir fonksiyon oluşturun, fonksiyon kendisine verilen 1 sayı değeri eğer tek ise true, değilse false boolean değeri döndürsün.
function tekmi(sayi){
  if(sayi % 2 === 1) return true; 
  else 
    return false;
}

console.log(tekmi(5));
console.log(tekmi(6));

-
"hesapMakinesi" adıyla bir fonksiyon oluşturun.
a. Fonksiyon 3 parametre alacaktır
b. 1. parametre string bir değer olacaktır ve şu karakterlerden oluşabilir: + - / * (artı eksi bölü yıldız)
c. Fonksiyon 2. ve 3. parametrede gelen sayısal değerlere 1. parametrede gelen değere göre işlem uygulayacaktır ve sonucu döndürecektir.
d. Eğer 1. parametre belirtilen 4 karakterden birine eşit değilse geriye false değer döndürecektir
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
Aşağıdaki adımları gerçekleştiren bir JavaScript programı yazınız.
a. "bisikletKiralama" adıyla bir nesne oluşturun.
b. "bisikletKiralama" nesnesine "ad" adıyla bir özellik ekleyin ve bir şahıs ismi değeri atayın.
c. "bisikletKiralama" nesnesine "soyad" adıyla bir özellik ekleyin ve bir şahıs soyadı değeri atayın
d. "bisikletKiralama" nesnesine "gunFiyat" adıyla bir özellik ekleyin ve bisiklet kira bedeli değeri atayın (tam sayı)
e. "bisikletKiralama" nesnesine "kacGun" adıyla bir özellik ekleyin ve bir gün sayısı değeri atayın (tam sayı)
f. "bisikletKiralama" nesnesine "borcHesapla" adıyla bir metod ekleyin metod şu işlemleri yapsın:
i. Nesnenin "gunFiyat" ile "kacGun" çarparak consola yazdırsın
g. Nesne tanımlamanız bittikten sonra "bisikletKiralama.borcHesapla()" yazarak çalıştırın ve sonucu kontrol edin.

let bisikletKiralama ={
  ad:"Can",
  soyad:"Ata",
  gunFiyat:20,
  kacGun:4,
  borcHesapla:function(){console.log("Toplam Fiyat :  " + (this.gunFiyat * this.kacGun));}
}

bisikletKiralama.borcHesapla()
-
Aşağıdaki adımları gerçekleştiren bir JavaScript programı yazınız.
a. 1. sorudaki ilk 6 maddeyi(f'ye kadar) tekrar edin.
b. "bisikletKiralama" nesnesine eklediğiniz "borcHesapla" adlı metod şu işlemleri yapsın:
i. Nesnenin "kacGun" değeri 7 günden azsa;
1. "gunFiyat" ile "kacGun" çarpsın ve "tutar" adlı bir değişkene aktarsın
ii. Nesnenin "kacGun" değeri 7-14 arasındaysa(7 hariç 14 dahil);
1. "gunFiyat" ile "kacGun" çarpsın, yüzde 10 indirim uygulasın ve "tutar" adlı bir değişkene aktarsın.
iii. Nesnenin "kacGun" değeri 14'ten büyükse;
1. "gunFiyat" ile "kacGun" çarpsın, yüzde 25 indirim uygulasın ve "tutar" adlı bir değişkene aktarsın.
iv. "borcHesapla" adlı metod hesaplanan "tutar" değerini yüzde 18KDV ekleyerek geriye döndürsün
c. Nesne tanımlamanız bittikten sonra aşağıdaki kodu ekleyerek çalıştırın ve sonucu kontrol edin

let bisikletKiralama ={
  ad:"Can",
  soyad:"Ata",
  gunFiyat:20,
  kacGun:4,
  tutar:0,
  borcHesapla:function(){
    
    if(this.kacGun <= 7){
      this.tutar = this.kacGun * this.gunFiyat;
    }else if(this.kacGun > 7 && this.kacGun <= 14){
      this.tutar = (this.kacGun * this.gunFiyat) * 0.9;
    }else if(this.kacGun > 14){
      this.tutar = (this.kacGun * this.gunFiyat) * 0.75;
    }
    return this.tutar * 1.18;
  }
}

let borcTutari = bisikletKiralama.borcHesapla();
console.log( "Sayın: " + bisikletKiralama.ad + " " + bisikletKiralama.soyad + " Borcunuz: " + borcTutari + " TL" );


