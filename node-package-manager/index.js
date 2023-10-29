/* Tugas :

Pasang package lodash pada proyek nodejs-basic.
Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik. */


const _ = require('lodash');    // TODO
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

// Output: [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]