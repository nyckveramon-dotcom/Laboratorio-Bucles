
let usuarios = [
    {
        nombre: "Ana",
        movimientos:[500000, -40000, 10000, 45000, -35000, -60000] 
    },
    {
        nombre: "Nycol",
        movimientos: [200000, -10000, -10000, 55000, -35000, -60000]
    },
    {
        nombre: "Vanesa",
        movimientos: [1000000, -500000, 10000, -45000, -35000, 60000]
    }
];

let mayorTotal = 0;
let usuarioMayor = "";

for(const usuario of usuarios){

    let totalUsuario = 0;
    let cantidadRetiros = 0;

    for(const movimiento of usuario.movimientos){
        totalUsuario = totalUsuario + movimiento;

        if(movimiento < 0){
            cantidadRetiros++;
        }
        
    }

    if(totalUsuario > mayorTotal){
        mayorTotal = totalUsuario;
        usuarioMayor = usuario.nombre
    }
    
    console.log(usuario.nombre);
    console.log(totalUsuario);
    console.log(cantidadRetiros);
}

console.log("Usuario con mayor total: ", usuarioMayor);
console.log("Mayor total", mayorTotal);



