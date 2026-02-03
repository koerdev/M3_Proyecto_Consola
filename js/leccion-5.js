// Se crea un objeto con propiedades y valores
const planeta = {
    color: "cafe",
    clima: "desertico",
    poblacion: 200000,
    lunas: 3,
    soles: 2,
};

// Se utilizan metodos en el objeto para obtener las claves y los valores
const claves = Object.keys(planeta);

console.log(claves);

const valores = Object.values(planeta);

console.log(valores);

// Se declara un arreglo de objetos
const personas = [
    { nombre: "Luke", apellido: "Skywalker", edad: "19" },
    { nombre: "Leia", apellido: "Organa", edad: "19" },
    { nombre: "Han", apellido: "Solo", edad: "32" },
    { nombre: "Obi-Wan", apellido: "Kenobi", edad: "57" },
];

// Se recorre el arreglo de personas con el metodo forEach()
personas.forEach((persona) => {
    return console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);
});