// Funciones para cada operación matemática
function suma(a, b) {
    return a + b;
};

function resta(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};

// Función que recibe como parametro una operación
function resultado(op) {
    let num1 = prompt("Ingrese el primer numero: ");
    let num2 = prompt("Ingrese el segundo numero: ");
    
    valNum(num1, num2, op);
};

// Función para validar los números
function valNum(a, b, op) {
    a = Number(a);
    b = Number(b);

    if(isNaN(a) || isNaN(b)) {
        console.log("Los numeros ingresados no son validos.");
    } else {
        mostrarRes(a, b, op);
    };
};

// Función para mostrar en consola el resultado
function mostrarRes(a, b, op) {
    if(op == "suma") {
        return console.log(`El resultado de la suma es: ${suma(a, b)}`);
    } else if(op == "resta") {
        return console.log(`El resultado de la resta es: ${resta(a, b)}`);
    } else if(op == "multiplicacion") {
        return console.log(`El resultado de la multiplicacion es: ${mult(a, b)}`);
    } else if(op == "division") {
        if(b != 0) {
            return console.log(`El resultado de la division es: ${div(a, b)}`);
        } else {
            return console.log(`El numero ${a} no es divisible por ${b}`);
        };
    } else {
        return console.log("La operacion no es valida");
    };
};

// resultado("suma");
// resultado("resta");
// resultado("multiplicacion");
resultado("division");