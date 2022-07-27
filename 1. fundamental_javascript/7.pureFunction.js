/**
 * Salah satu konsep besar dari paradigma FP adalah Pure Function. 
 * Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi
 * yang mengharuskan fungsi untuk tidak bergantung terhadap nilai
 * yang berada di luar fungsi atau parameternya.
 * Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu
 * menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut
 * diberikan nilai parameter yang berbeda.
 * 
 * Selain dilarang untuk bergantung terhadap nilai luar, 
 * pure function juga dilarang keras untuk mengubah nilai yang berada
 * di luar baik secara sengaja atau tidak sengaja. 
 * Pure function tidak boleh menimbulkan efek samping (no side effect)
 * ketika digunakan.
 */

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
})

/**
 * Fungsi createPersonWithAge bertujuan untuk membuat objek person baru
 * dengan tambahan properti age dari objek person yang ada. 
 * Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai
 * dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge
 * bukanlah pure function.

Lalu bagaimana cara membuat fungsi tersebut menjadi pure? 
Mudah, kita manfaatkan destructuring object daripada 
mengubah objek tersebut secara langsung.
 */

const createPersonWithAge1 = (age, person) => {
    return {...person, age }
};

const person1 = {
    name: 'Bobo'
}

const newPerson1 = createPersonWithAge1(19, person1)

console.log({
    person1,
    newPerson1
})

/**
 * Lihat! Lagi-lagi lebih mudah dan singkat bukan?

Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
Hanya bergantung pada argumen yang diberikan.
Tidak menimbulkan efek samping.
Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.
 */