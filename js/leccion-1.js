// Declaración de variables obtenidas del usuario
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let num1 = prompt("Ingrese un número: ");
let num2 = prompt("Ingrese otro número: ");

// Mostrar en consola un mensaje con datos obtenidos del usuario
console.log("Hola " + nombre + " " + apellido);

// Mostrar una alerta con datos obtenidos del usuario
alert(`La suma de los números es: ${Number(num1) + Number(num2)}`);