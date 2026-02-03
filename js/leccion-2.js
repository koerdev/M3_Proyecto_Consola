// Declaraciones de variables con let y const
let numero = 50;
const nombre = "David";

// Se le solicitan numeros y operación al usuario
let num1 = prompt("Ingrese el primer numero a operar: ");
let num2 = prompt("Ingrese el segundo numero a operar: ");
let op = prompt("Ingrese que operacion desea hacer: ");

// Se comprueba si la operación no esta vacía
if(op != null) {
    // Se convierte a lower case para no tener problemas con el switch
    op = op.toLowerCase();

    // Se comprueba que los números sean validos utilizando if/else
    if(isNaN(num1) || isNaN(num2)) {
        console.log("Los numeros ingresados no son validos.");
    } else {
        // Se realiza la operación y se imprime en la consola utilizando switch
        switch(op) {
            case "suma":
                console.log(`La suma de los numeros ingresados es: ${Number(num1) + Number(num2)}`);
                break;
            case "resta":
                console.log(`La resta de los numeros ingresados es: ${Number(num1) - Number(num2)}`);
                break;
            case "multiplicacion":
                console.log(`La multiplicacion de los numeros ingresados es: ${Number(num1) * Number(num2)}`);
                break;
            case "division":
                // Se comprueba si la división es valida
                if(Number(num2) === 0) {
                    console.log("No se puede dividir por 0.");
                } else {
                    console.log(`La division de los numeros ingresados es: ${Number(num1) / Number(num2)}`);
                };
                break;
            default:
                console.log("La operacion no es valida, intente con suma/resta/multiplicacion/division.");
        };
    };
} else {
    console.log("La operacion no debe estar vacia, intente con suma/resta/multiplicacion/division.");
};