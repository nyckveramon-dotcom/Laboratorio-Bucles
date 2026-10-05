let movimientos = [500000, -40000, 10000, 45000, -35000, -60000];
let total = 0;
let cantidadRetiros = 0;

for(const movimiento of movimientos){
    total = total + movimiento

    if(movimiento < 0){
        cantidadRetiros++;
    }
}

console.log(total);
console.log(cantidadRetiros);


