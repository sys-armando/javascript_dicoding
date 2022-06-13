/**Ketika menulis sebuah program, kita memberi tahu komputer cara memproses informasi 
 * seperti mencetak teks ke layar atau melakukan operasi perhitungan. 
 * Untuk lebih mudah dalam penggunaan dan pemanggilan data, kita bisa memanfaatkan variabel. 
 * Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program.
 * 
 * Pada JavaScript setidaknya ada tiga cara untuk mendeklarasikan sebuah variabel, 
 * yaitu menggunakan keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan 
 * deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial 
 * dan rawan menimbulkan bug.
 * 
 * Dalam kelas ini, kita akan banyak menggunakan keyword let dan const. 
 * Jika Anda penasaran kenapa var sudah tidak lagi disarankan, silakan simak diskusi berikut.
 * Sekarang bagaimana caranya membuat sebuah variabel dalam JavaScript? Cukup mudah. 
 * Ketikkan keyword let yang diikuti dengan nama variabelnya.
 */

let lastName;

/**
 * Kode untuk mendeklarasikan variabel seperti di atas juga dikenal dengan declaration statement.
 * Selanjutnya, Anda bisa mengisi nilai variabel di atas menggunakan tanda sama dengan (=).
 */

let firstName;
firstName = "SkyWalker";
console.log(firstName)

/**
 * Anda juga bisa langsung menginisialisasi nilai variabel setelah mendeklarasikannya seperti berikut:
 */

let namaPanggilan = "Skywalkere";
console.log(namaPanggilan)

/***
 * Kode untuk menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=) 
 * ini disebut dengan assignment expression.
 * Tunggu sebentar. Kita kembali bertemu dengan istilah statement dan expression.
 * Karena expression pasti menghasilkan nilai, sehingga mereka bisa muncul di mana pun dalam program JavaScript. 
 * Sementara itu, statement merujuk pada aksi. Sehingga, pada bagian kode tertentu yang membutuhkan nilai 
 * tidak bisa kita isi dengan sebuah statement. Contohnya seperti kode berikut:
 */

let fullName =
    let lastName; //Error karena let lastName adalah sebuah statement untuk eklarasi variabel. Statement tidak bisa berada di posisi expression.

let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

/***
 * Melalui contoh kode di atas, kita bisa bayangkan variabel sebagai sebuah kotak atau wadah yang menyimpan nilai.
 * Proses inisialisasi atau assignment berarti kita memasukkan nilai ke dalam kotak tersebut.
 * Variabel lastName di atas akan tersimpan di dalam memori komputer.
 * Setiap variabel memiliki nama yang dapat kita panggil dan gunakan. 
 * Kita dapat menamai variabel dengan nama apa pun, tetapi pastikan penamaannya masih masuk akal 
 * dengan konteksnya supaya kode mudah di-maintenance.
 * Sebaiknya hindari penamaan variabel dengan istilah umum seperti “data”. 
 * Gunakanlah penamaan variabel yang dapat mendeskripsikan nilai dari variabel itu sendiri. 
 * Berikut beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:
 * Harus dimulai dengan huruf atau underscore (_).
 * Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
 * Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, 
 * tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
 * Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
 * Lalu, bagaimana dengan const? Const merupakan kependekan dari constant. 
 * Artinya, kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan
 * dan tidak bisa diubah setelah diinisialisasi nilainya. 
 * Bayangkan variabel bernilai const sebagai sebuah kotak yang ditutup dan disegel setelah diisi, 
 * sehingga nilainya tidak bisa diubah lagi.
 * Jika menginisialisasi kembali nilai variabel yang menggunakan const, 
 * kita akan mendapati eror “TypeError: Assignment to constant variable.”
 */

const z = 100
console.log(z)
z = 200
console.log(z)

/**
 * TypeError : Assignment to constant variable.
 */