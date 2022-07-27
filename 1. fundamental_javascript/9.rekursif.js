/**
Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.
Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.
 */

const countDown_a = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
};

countDown_a(10)

// Maka, bentuk rekursinya adalah sebagai berikut:

const countDown_b = start => {
    console.log(start);
    if (start > 0) countDown_b(start - 1);
};

countDown_b(10);