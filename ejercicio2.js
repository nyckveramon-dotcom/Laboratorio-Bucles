const pinCorrecto = 562845

const prompt =require("prompt-sync")();

let intento = Number(prompt("Ingresa tu PIN: "))

while(intento !== pinCorrecto){
    console.log("PIN incorrecto");

    intento = Number(prompt("Ingresa de nuevo tu PIN: "))
    
}
console.log("Bienvenid@ a la APP Nequi");
