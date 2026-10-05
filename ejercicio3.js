const prompt =require("prompt-sync")();

let opcion;

do{
    console.log("MENU: \n 1)Ver saldo \n 2)Enviar dinero \n 3)Recargar \n 4)Salir");

    opcion = prompt("Elige una opción: ")
    if(opcion === "1"){
        console.log("Elegiste opción Ver saldo");
    } else if(opcion === "2"){
        console.log("Elegiste opción Enviar dinero");
    } else if(opcion === "3"){
        console.log("Elegiste opción Recargar");
    } else if (opcion === "4"){
        console.log("Elegiste opción Salir");
    }else{
        console.log("Opción no válida");
    }
    
} while(opcion !=="4");
