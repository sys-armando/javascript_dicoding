/**
 * Konsep yang kedua adalah immutability. 
 * Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
 * Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.
 * Konsep immutability sangat kental pada paradigma FP. 
 * Anda bisa lihat sebelumnya pada contoh penggunaan array map. 
 * Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.
 */

const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithexcMark = names.map((name) => `${name}!`)

console.log({
    names,
    newNamesWithexcMark,
});

/**
 * Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contoh seperti ini
 */

const user = {
    firstName: 'Harry',
    lastName: 'Protter', // ups, typo
}

console.log(user)

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);
console.log(user)

/**
 * Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP. 
 * Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. 
 * Lantas bagaimana solusinya? Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, 
 * terapkan perubahan tersebut pada nilai return dalam objek baru.
 */

const user_a = {
    firstName: 'Harry',
    lastName: 'Protter', //ups, typo
}

const createUserWithNewLastName = (newLastName, user) => {
    return {...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user)
console.log(newUser);

/**
 * Hasilnya sama kan? Selain itu, Anda juga bisa menyesuaikan nama fungsinya dari renameLastNameUser menjadi createUserWithNewLastName.
 * Hal itu perlu untuk mengindikasikan bahwa fungsi mengembalikan atau menghasilkan objek user baru.
 */