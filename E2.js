const {sum, rest, mult, div, operaciones} = require("./functions.js");

const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.question("Ingrese el primer número: ", (dato1) => {
    readLine.question("Ingrese el segundo número: ", (dato2) => {
        operaciones.forEach((operacion) => {
            console.log(operacion);
        });
        readLine.question("Seleccione la operación que desea realizar: ", (selection) => {
            if(selection==="1"){
                console.log(sum(dato1, dato2))
            } else if (selection==="2"){
                console.log(rest(dato1, dato2))
            } else if (selection==="3"){
                console.log(mult(dato1, dato2))
            } else if (selection==="4"){
                console.log(div(dato1, dato2))
            } else {
                console.log("La operación seleccionada no existe. Vuelva a intertarlo.")
            }
        })
    })
});

