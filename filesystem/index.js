// TODO: tampilkan teks pada notes.txt pada console.
// modul yang digunakan adalah fs (file system) di Node.js

const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    } 
    console.log(data);
};

/* Untuk mengakses berkas pada komputer, kita dapat menggunakan method fs.readFile(). 
Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback function 
yang akan terpanggil bila berkas berhasil/gagal diakses. */

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

/* Output : Di hari minggu saya akan:
1. berolahlaraga pagi.
2. membersihkan halaman rumah.
3. menonton film.
4. membaca buku Laskar Pelangi.
*/

