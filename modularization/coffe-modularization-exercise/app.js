const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();

// Fungsi yang akan dijalankan ketika event coffe-order terjadi

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

// mendaftarkan fungsi makeCoffe sebagai listener event coffee-order. on berfungsi untuk
// menerima dua argumen. argumen pertama nama event, kedua untuk jalankan fungsi
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

/* atau bisa ditulis seperti berikut. tulis listener pada akhir penamaannya
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener); */

// Memicu event 'coffee-order' terjadi dengan kode emit.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000});