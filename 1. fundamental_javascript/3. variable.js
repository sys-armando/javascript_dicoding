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