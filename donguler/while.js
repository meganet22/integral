let sayac2 = 0;
do {
    console.log("Dowhile yapısı");
    sayac2++;
} while ( sayac2 < 4 );

/*let sayac = 0;
while ( sayac < 10 ) {
    console.log(1);
    sayac++;
}*/

/*let sayi = 1;

while ( sayi < 10 ) {
    console.log(1);
    sayi++;
}*/

-
0 ile 100 arasında(0 ve 100 hariç) 10'un katı olan sayıları consola yazdıran bir JavaScript programı yazınız.
console.log("0(dahil) ile 100(dahil) arasında 10'un katları:");
let sayac = 0; //sayac'ın ilk değeri 0 olsun
while ( sayac < 101 ) { //sayac değeri 101'den küçük olduğu sürece
let kalan = sayac % 10; //sayac sayısının 10'a bölümünden kalan
if ( kalan === 0 ) { //kalan 0 ise demek ki sayac 7'nin katıdır
console.log(sayac); //sayac değerini yazdır
}
sayac++; //sayac değerini 1 arttır
}
-
0 ile 100 arasında(0 ve 100 hariç) tek sayıları(2'ye bölümünden kalan 1 olmalı) consola yazdıran bir JavaScript programı yazınız.
console.log("0(dahil) ile 100(dahil) arasında 2'nin katları:");
let sayac = 0; 
while ( sayac < 101 ) { 
let kalan = sayac % 2; 
if ( kalan === 1 ) { 
console.log(sayac); 
}
sayac++; 
}

-
0 ile 100 arasında(0 ve 100 hariç) çift sayıları(2'ye bölümünden kalan 0 olmalı) consola yazdıran bir JavaScript programı yazınız
console.log("0(dahil) ile 100(dahil) arasında 2'nin katları:");
let sayac = 0; 
while ( sayac < 101 ) { 
let kalan = sayac % 2; 
if ( kalan === 0 ) { 
console.log(sayac); 
}
sayac++; 
}

-
0 ile 10 arasında (0 dahil 10 dahil) yer alan sayıların karesini(kendisiyle çarpımı) consola yazdıran bir JavaScript programı yazınız.
console.log("0-10 arası sayıların kareleri 0 ve 10 dahil");
let sayac = 0; 
while ( sayac < 11 ) { 
    console.log(sayac + " sayısının karesi = " + (sayac * sayac));
   sayac++; 
}
-
0 ile 100 arasında(0 dahil 100 dahil) hem 3'ün ve hem 4'ün katı olan sayıları consola yazdıran bir JavaScript programı yazınız.
console.log("0 ile 100 arasında hem 3'ün ve hem 4'ün katı");
let sayac = 0; 
while ( sayac < 101 ) { 
   if ( sayac % 3 === 0 && sayac % 4 === 0 ) { 
     console.log(sayac); 
   }
   sayac++; 
}
-
0 ile 100 arasında(0 ve 100 hariç) 10'un katı olan sayıları consola yazdıran bir JavaScript programı yazınız.
console.log("0 ile 100 arasında(0 ve 100 hariç) 10'un katı olan sayılar");

for(let i = 1; i < 100; i++){
  if(i %10 === 0) console.log(i);
}
-
0 ile 100 arasında(0 ve 100 hariç) tek sayıları(2'ye bölümünden kalan 1 olmalı) consola yazdıran bir JavaScript programı yazınız.
console.log("0 ile 100 arasında(0 ve 100 hariç) tek sayılar");
for(let i = 1;i < 100; i++){
  if(i % 2 === 1) console.log(i);
}
-
0 ile 100 arasında(0 ve 100 hariç) çift sayıları(2'ye bölümünden kalan 0 olmalı) consola yazdıran bir JavaScript programı yazınız.
console.log("0 ile 100 arasında(0 ve 100 hariç) çift sayılar");

for(let i = 1; i < 100; i++){
  if(i % 2 === 0) console.log(i);
}
-
