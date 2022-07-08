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

