// Declaración de arreglo
let nombres = ["Luke", "Leia", "Han", "Obi-Wan"];

// Recorriendo el arreglo con ciclo for
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
};

console.log("**********");

// Recorriendo el arreglo con ciclo while
let i = 0;

while(i < nombres.length) {
    console.log(nombres[i]);
    i++;
};

console.log("**********");

// Implementando una función que filtre elementos si tienen la letra "a"
function filtro(arr) {
    return arr.filter(el => el.includes("a"));
};

console.log(filtro(nombres));