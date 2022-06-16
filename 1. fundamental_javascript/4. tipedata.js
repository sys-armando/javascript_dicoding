/**
 * Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. 
 * Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. 
 * Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. 
 * Pada JavaScript terdapat beberapa tipe data sebagai berikut:
 * 
 * UNDEFINED
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

//NUMBER
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

//BIGINT

/**
 * Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). 
 * Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. 
 * Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, 
 * seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.
 * Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt.
 * Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka.
 * Contohnya adalah seperti kode di bawah ini. Bandingkan dengan yang bertipe Number.
 */

const bigNumber = 12345678901234567890123456789n;
const myInt = 12345678901234567890123456789

console.log(bigNumber)
console.log(myInt)

// Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.
const bigInbutSmall = 7n
console.log(bigInbutSmall)

/**
 * Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya.
 * Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. Contohnya adalah seperti ini:
*/  

console.log(5n+2n)
console.log(5n-2n)
console.log(5n*2n)
console.log(5n/2n)
console.log(5n%2n)

//STRING

/**
 * Tipe data selanjutnya adalah string yang merupakan sebuah teks.
 * Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya:
*/

let greet = 'Hello'
console.log(typeof(greet))

/**
 * Tidak ada perbedaan antara menggunakan petik satu atau petik dua.
 * Anda dapat menggunakan tanda petik secara bergantian,
 * khususnya jika Anda memiliki teks yang mengandung tanda petik.
 */

const question = '"What do you think of Javascript? I asked"'
console.log(question)

/**
 * Lalu bagaimana kalau teks mempunyai tanda seperti ini :
 * const answer = '"I think it's awesome!" he answered confidently';
 * 
 * Tentunya kode di atas akan menghasilkan eror. 
 * Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. 
 * Mekanisme ini juga dikenal dengan nama escape string. 
 * Sehingga kode di atas akan menjadi seperti berikut:
 */

const answer = '"I think it\'s awesome!" he answered confidetenly'
console.log(answer)

/**
 * Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas string.
 * Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.
 */

console.log("Windows Path : C:\\Program Files\\Visual Studio Code")

/**
 * Pada String, kita juga dapat menggunakan operator plus (+).
 * Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
 */

let sapa = "Hello"
let sapasapa = sapa + sapa
console.log(sapasapa)

/**
 * Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, 
 * sehingga jika Anda ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.
 * contohnya seperti berikut :
 */

let sapa2 = 'Hello'
let concat = sapa2 + " " + sapa2
console.log(concat)

/**
 * Selain concatenation, string pada JavaScript juga mendukung string interpolation.
 * Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. 
 * Contohnya adalah seperti berikut:
 */

const myName = 'Luke'
console.log(`Hello My Name is ${myName}`)

/**
 * Perhatikan bahwa untuk mendefinisikan string template, Anda perlu menggunakan backticks (`),
 * biasanya terletak di keyboard di bawah tombol Esc . 
 * Di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder ${myName}.
 */

//BOOLEAN
/**
 * Boolean hanya memiliki dua nilai, yaitu true atau false. 
 * Tipe data ini menjadi kunci utama dalam penentuan logika. 
 * Kita akan banyak menggunakannya nanti dalam materi if/else statement. 
 * Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false seperti di bawah ini.
 */

let xy = true;
let yz = false;

console.log(typeof(xy))
console.log(typeof(yz))

/**
 * Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:
 */

const bil1 = 10;
const bil2 = 8;

let lebihBesar = bil2 > bil1
let lebihKecil = bil2 < bil1

console.log(lebihBesar)
console.log(lebihKecil)


//improvisasi
if (bil1 < bil2){
    console.log(`Bilangan ${bil1} lebih kecil ${bil2}`)
}else{
    console.log(`Bilangan ${bil1} lebih besar ${bil2}`)
}

