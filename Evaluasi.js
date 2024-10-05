// Tipe data 

// 1. Number = Data yang berisikan number/ angka.
// Contoh :
var nilai = 15
console.log(nilai)

// 2. String = Data yang berisikan kata.
// Contoh :
var kata = "Selamat Pagi"
document.write(kata)

// 3. Boolean = Data yang berisikan 2 pilihan "true atau false".
// Contoh : 
let BB = 75
let TB = 175
console.log(BB >= 80 && TB >= 170 ? true : false)

// Variabel 

// Variabel = Wadah untuk menyimpan nilai, nilai ini berupa tipe data.

// 1. Var = Variabel yang mendeklarasikan data secara cakupan global atau fungsi/lokal.
// Contoh :
var word = "Hai"
word = "Salam kenal"
console.log(word)

// 2. Let = Variabel yang mendeklarasikan suatu data yang hanya bisa diakses di dalam block kode.
// Contoh : 
let namaDepan = "Upin"
let namaBelakang = "Ipin"
console.log(namaDepan + namaBelakang)

// 3. Const = Variabel yang mendeklarasikan suatu data secara konstan.
// Contoh : 
const user = {
    nama : 'Tians',
    umur : 19
}
console.log(user)

// Operator aritmetika 
var nilai1 = 30
var nilai2 = 5
var Tambah = nilai1 + nilai2
var Kurang = nilai1 - nilai2
var Kali = nilai1 * nilai2
var Bagi = nilai1 / nilai2
console.log(Tambah)
console.log(Kurang)
console.log(Kali)
console.log(Bagi)

// Operator Penugasan 

// Operator penugasan = Sistem operasi untuk membandingkan 2 buah nilai.
// Contoh : 
var angka = 50
 angka += 5
 angka -= 15
 angka /= 2
 angka *= 20
console.log(angka)

// Operator logika 

// Operator logika = Operasi yang berisikan 2 pilihan : true atau false.

// 1. Or
var netto = 100
if ((netto - 50 < 100) || (netto < 150)) {  
    console.log("Hasilnya true");  
} else {  
    console.log("Hasilnya salah");  
}
// Hasil yang akan di tampilkan adalah true, karena hasilnya netto - 50 = < 100 atau netto < 150. Yang dimana kedua pilihan tersebut true.

// 2. And
let umur = 20
let statusPekerjaan = "bekerja"
if (umur >= 18 && statusPekerjaan === "bekerja") {  
    console.log("Anda memenuhi syarat.");  
} else {  
    console.log("Anda tidak memenuhi syarat.");  
}
// Hasil yang akan ditampilkan Anda adalah seorang dewasa yang bekerja, karena apabila umur >= 18 dan status pekerjaannya bekerja, maka hasilnya Anda memenuhi syarat.

// 3. Not
console.log(!false)
// Hasil yang akan ditampilkan adalah true, karena di dalam logika not antonim terhadap nilai sebenarnya.

// Pengkodisian

// (If, Else if, Else)
// Contoh :
let angka = prompt("Masukkan angka");
angka = parseInt(angka);
if (angka % 2 === 0) {
    console.log(angka + " adalah angka genap.");
} else {
    console.log(angka + " adalah angka ganjil.");
}
// 1. User akan memasukkan angka,
// 2. Komputer akan  mengubah input menjadi tipe data angka,
// 3. Komputer akan mengecek apakah angka genap atau ganjil, karena dalam matematika jika kita ingin mengecek suatu angka itu ganjil atau tidak dari kita moduluskan angka tersebut dengan 2.

// Switch
// Contoh :
switch (operator){
  case "+":
    alert (nilai1 + nilai2)
    break;
  case "-":
    alert (nilai1 - nilai2)
    break;
  case "*":
    alert (nilai1 * nilai2)
    break;
  case "/":
    alert (nilai1 / nilai2)
    break;
  case "%":
    alert (nilai1 % nilai2)
    break;
  default:
    alert ("Error")
    break;
}

// Perulangan

var nomor = 1
var count = 10
for(nomor ; nomor<=count ; nomor++) {
    if(nomor <= 5){
        console.log("Barang no: "+ nomor + " Masih tersedia")
    }else{
        console.log("Barang no: "+ nomor + " Tidak tersedia")
    }
}
// 1. var nomor = 1 ; Menyatakan variabel nomor dengan nilai awal 1. Variabel ini akan menjadi penghitung di dalam perulangan.
// 2. var count = 10; Menyatakan variabel count dengan nilai 10. Variabel ini menentukan batas perulangan.
// 3. komputer akan memulai dari nomor satu sampai nomor 10 yang selalu increment (++).
// 4.Komputer memisahkan menjadi dua bagian : 
// Bagian 1 - apabila nomor <= 5, maka komputer akan menambahkan "Barang no" dengan nomor yang selalu increment dan ditambah penjelasan masih tersedia. 
// Bagian 2 - apabila nomor > 5, maka komputer akan menambahkan "Barang no" dengan nomor yang selalu increment dan ditambah penjelasan tidak tersedia.

// Operator perbandingan 

// ==

// Operator ini membandingkan dua nilai tanpa memperhatikan tipe data.
// Contoh : 
let x = 1;
let y = '1';

if (x == y) {
    console.log("x sama dengan y (==)"); // Akan dieksekusi karena '1' diubah menjadi 1
} else {
    console.log("x tidak sama dengan y (==)");
}

// ===

// Operator ini membandingkan dua nilai dengan memperhatikan tipe data.
// Contoh : 
let x = 1;
let y = '1';

if (x === y) {
    console.log("x sama dengan y (===)");
} else {
    console.log("x tidak sama dengan y (===)"); // Akan dieksekusi karena tipe data berbeda
}

// Kombinasi String dengan number

let string = "Jumlah uangku ada"
let number = 42
let combined = string + number
console.log(combined)
// Komputer akan menggabungkan kedua data tersebut menjadi satu kalimat, karena jika kedua data dalam bentuk angka komputer akan memprosesnya secara matematis dan apabila kedua data tidak dalam bentuk angka melainkan salah satunya saja, maka komputer akan menggabungkannya menjadi satu kalimatG