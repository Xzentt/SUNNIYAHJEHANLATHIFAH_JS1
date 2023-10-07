// if statement 1
let nilai = 85;

if (nilai >= 85) {
  console.log('Selamat! Anda memenuhi syarat untuk lulus.');
} else {
  console.log('Maaf, Anda tidak memenuhi syarat untuk lulus.');
}

// if statement 2
let angka = 40;

if (angka % 2 === 0) {
  console.log('Angka ini adalah bilangan genap.');
} else {
  console.log('Angka ini adalah bilangan ganjil.');
}


// else statement 1
let negara = 'Jepang';

if (negara === 'Jepang') {
  console.log('Saya berada di negara Jepang.');
} else {
  console.log('Saya tidak berada di negara Jepang.');
}

// else statement 2
let cuaca = 'cerah';

if (cuaca === 'hujan') {
  console.log('Cuaca di Malang sedang cerah.');
} else {
  console.log('Cuaca di Malang tidak cerah.');
}

// else statement 3
let ujian = 88;

if (ujian >= 90) {
  console.log('Anda lulus.');
} else {
  console.log('Anda tidak lulus.');
}

// nested if statement
let umur = 25;
let izinorangtua = true;

if (umur >= 20) {
  if (izinorangtua) {
    console.log('Anda lulus dengan izin orang tua.');
  } else {
    console.log('Anda lulus tanpa izin orang tua.');
  }
} else {
  console.log('Anda tidak lulus.');
}

// switch case
let hari = 'Kamis';
let aktivitas;

switch (hari) {
  case 'Senin':
    aktivitas = 'Membaca buku.';
    break;
  case 'Selasa':
    aktivitas = 'Recook makanan.';
    break;
  case 'Rabu':
    aktivitas = 'Koordinasi lukisan.';
    break;
  case 'Kamis':
    aktivitas = 'Menonton anime.';
    break;
  case 'Jumat':
    aktivitas = 'Hari libur!.';
    break;
  default:
    aktivitas = 'Hari tidak valid.';
}

console.log(`Hari ini (${hari}) dan saya sedang: ${aktivitas}`);

// switch cases use strict comparison
let P = "10";
let output;

switch (P) {
  case "10":
    output = 'P adalah 10.';
    break;
  case "20":
    output = 'P adalah 20.';
    break;
  default:
    output = 'P tidak dikenali.';
}

console.log(output);

// for statement 1
for (let i = 1; i <= 10; i++) {
  console.log("Iterasi ke-" + i);
}

// for statement 2
for (let i = 2; i < 8; i++) {
  console.log("Iterasi ke-" + i);
}

// for statement for/in
let buku = {
  Judul: 'Laut bercerita: Ciputat,1991',
  Penulis: 'leila S. Chudori',
  Tahun: 2023
};

for (let prop in buku) {
  console.log(prop + ': ' + buku[prop]);
}

// for statement for/of
let mangajepang = ['Haikyuu', 'One Piece', 'Death Note', 'Hunter x Hunter', 'My Hero Academia'];

for (let judul of mangajepang) {
  console.log('Judul: ' + judul);
}

// while
let angkaAwal = 6;
let total = 0;

while (angkaAwal <= 8) {
  if (angkaAwal % 2 === 0) {
    total += angkaAwal;
    console.log(`Angka genap ditambahkan: ${angkaAwal}`);
  } else {
    console.log(`Angka ganjil dilewati: ${angkaAwal}`);
  }

  angkaAwal++;
}

console.log(`Total angka genap dari 6 hingga 8 adalah: ${total}`);

// do while
let hasil = [15, 30, 25, 30, 10];
let nilaitotal = 0;
let index = 0;

do {
  nilaitotal += hasil[index];
  console.log(`Nilai ke-${index + 1}: ${hasil[index]}`);
  index++;
} while (nilaitotal < 100);

console.log(`Total nilai: ${nilaitotal}`);

// function 
// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  const luas = (alas * tinggi) / 2;
  return luas;
}

// Menggunakan fungsi untuk menghitung luas segitiga
const alasSegitiga = 10;
const tinggiSegitiga = 16;

const luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

console.log(`Luas segitiga dengan alas ${alasSegitiga} dan tinggi ${tinggiSegitiga} adalah ${luasSegitiga}`);
