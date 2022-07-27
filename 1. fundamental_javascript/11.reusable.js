/**
Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. 
Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. 
Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.
Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. 
Kami percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.
Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di JavaScript.
Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.
 */

//Array Map

/**
 * Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. 
 * Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
 */

//  ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });
//  Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

//  ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
//  Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya.
//  Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
console.log(newArray);

//Array Filter

/**
 * Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript.
 * Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. 
 * Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.
 * Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. 
 * Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.
 * Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.
 * Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai falsy pada array:
 */

const truthArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthArray)

//Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.

const students = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents)

//Array Reduce

/**
 * Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array 
 * yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
 */

//  arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]),[initialValue])
//  [...] adalah opsional parameter

/**
Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator.
Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.
Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa
*/

const students_a = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students_a.reduce((acc, student) => acc + student.score, 0)
console.log(totalScore);