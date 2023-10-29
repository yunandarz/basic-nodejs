/* Modularisasi dalam pemrograman merupakan teknik pemisahan kode menjadi modul-modul yang bersifat independen, 
tetapi bisa saling digunakan untuk membentuk suatu program yang kompleks. Pemisahan kode menjadi modul-modul
terpisah inilah yang dapat membuat kode JavaScript lebih mudah dikelola. */

const Tiger = require("./Tiger")
const Wolf = require("./Wolf")

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if(wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    }

    console.log("Tiger and Wolf have the same strength")
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);