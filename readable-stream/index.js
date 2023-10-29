/* Teknik stream merupakan salah satu konsep fundamental yang mendukung aplikasi Node.js bekerja. 
Teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apa pun
agar dapat berjalan dengan lebih efisien */

// Import modul 'fs' untuk berkas I/O (input/output) dan 'path' untuk manajemen path.
const fs = require('fs');
const { resolve } = require('path');

// buat Readable Stream untuk membaca berkas 'article.txt' dengan buffer sebesar 15 byte.
const readableStream = fs.createReadStream(resolve(__dirname, './article.txt'), {
  highWaterMark: 15,
});

// Membuat Writable Stream untuk menulis ke berkas 'output.txt'.
const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

// Event listener untuk saat data siap dibaca.
readableStream.on('readable', () => {
  try {
    // Membaca data dari Readable Stream dan menulisnya ke Writable Stream
    // dengan menambahkan karakter newline '\n' pada setiap data yang ditulis.
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // Menangani kesalahan jika terjadi saat membaca atau menulis data.
    // Biasanya, ini digunakan untuk menangani kesalahan dalam operasi I/O.
  }
});

// Event listener untuk saat proses membaca selesai (end of file).
readableStream.on('end', () => {
  // Menandai bahwa operasi penulisan ke berkas selesai.
  writableStream.end();
});