let movimientos = [
    {tipo: "ingreso", valor: 500000},
    {tipo: "retiro", valor: -150000},
    {tipo: "comercio", valor: -30000},
    {tipo: "ingreso", valor: 0},
    {tipo: "ingreso", valor: 100000},
    {tipo: "retiro", valor: 0},
    {tipo: "comercio", valor: -80000},
]

let posicionEncontrada = -1;

for(let i = 0; i < movimientos.length; i++){

    if(movimientos[i].valor === 0){
        continue;
    }

    if(movimientos[i].tipo === "comercio"){
        posicionEncontrada = i;
        break
    }
}

console.log("El primer pago a comercio esta en la posición: ", posicionEncontrada);

