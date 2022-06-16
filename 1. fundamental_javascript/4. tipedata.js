/**
 * Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. 
 * Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. 
 * Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. 
 * Pada JavaScript terdapat beberapa tipe data sebagai berikut:
 * 
 * Undefined
 * 
 * Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. 
 * Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, 
 * variabel tersebut menjadi undefined. Contoh:
 */

let x;
console.log(typeof(x));

/**
 * Pada contoh kode di atas, kita mendeklarasikan variabel x, 
 * tetapi kita tidak menginisialisasikan dengan nilai apa pun. 
 * Ketika kita memastikan tipe data dengan menggunakan fungsi typeof(), 
 * ia akan menghasilkan output undefined.
 * Fungsi typeof() digunakan untuk memastikan tipe data pada variabel 
 * dengan mengembalikan tipe data tersebut dalam bentuk teks.
 */

//Number
/**
 * Nilai dari tipe data number adalah angka. 
 * Variabel bertipe data number dituliskan seperti angka pada umumnya:
 */

let a = 10
console.log(typeof(a))

let b = 17.75
console.log(typeof(b))

/**
 * Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti 
 * penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam 
 * perhitungan aritmatika pada tipe data number:
 * + -> Penjumlahan, contoh = 10+10=20
 * - -> Pengurangan, contoh = 15-7=8
 * / -> Pembagian, contoh = 21/7=3
 * * -> Perkalian, contoh = 9*9=81
 * % -> Sisa hasil bagi, contoh = 5%2=1
 * ** -> Perpangkatan, contoh = 3**3= 27
 */

let c = 14
let d = 15

console.log(c + d)
console.log(c - d)
console.log(c / d)
console.log(c * d)
console.log(c % d)
console.log(c ** d)

/**
 * Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). 
 * Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel 
 * yang ada sekarang.
 * Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. 
 * Berikut ketentuannya:
 * Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
 * Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
 * Untuk lebih jelasnya, berikut adalah contoh kode penerapan operator tersebut, perhatikan hasil yang didapat.
 */

let postfix = 5;
console.log(postfix++);
console.log(postfix);

let prefix = 5
console.log(++prefix)