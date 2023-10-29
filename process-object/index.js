/* Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.

Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini, kita dapat menyimpan nilai atau mendapatkan informasi 
mengenai environment yang digunakan selama proses sedang berlangsung. */




// TODO 1: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1

//TODO 2: Isi dengan nilai index ke-2 dari process.argv.
const yourName = process.argv[2];   // TODO 2

//TODO 3: Isi dengan nilai NODE_ENV dari process.env.
const environment = process.env.NODE_ENV;// TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}

//TODO 4: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const currentMemoryUsage = process.memoryUsage().heapUsed;   // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);


// lalu coba eksekusi di terminal dengan perintah $env:NODE_ENV = "development"; node .\process-object\index.js Yunan
// output 
// Hai, Yunan
// Mode environment: development
// Penggunaan memori dari 5736512 naik ke 5738264