//////////////////////////////////////

console.warn ("1.1 Usa QuerySelector para mostrar por consola el botón con la clase .showme");

let imprimeBoton = document.querySelector(".showme").innerHTML;

console.log(imprimeBoton);

//////////////////////////////////////

console.warn ("1.2 Usa Query Selector para mostrar por consola el h1 con el id #pillado");

let imprimePillado = document.querySelector("#pillado").innerHTML;
console.log(imprimePillado);

//////////////////////////////////////

console.warn ("1.3 Usa querySelector para mostrar por consola todos los p");

let TodosLosP = document.querySelectorAll("p");

for (i = 0; i < TodosLosP.length; i++) {
  console.log(TodosLosP[i].innerHTML);
}

//////////////////////////////////////

console.warn ("1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon");

let imprimePokemons = document.querySelectorAll(".pokemon");

for (i = 0; i < imprimePokemons.length; i++) {
  console.log(imprimePokemons[i].innerHTML);
}

//////////////////////////////////////

console.warn ("1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function testMe");

let imprimeTestMe = document.querySelectorAll(`[data-function="testMe"]`);

for (i = 0; i < imprimeTestMe.length; i++) {
  console.log(imprimeTestMe[i].innerHTML);
}

//////////////////////////////////////


console.warn ("1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function=testMe");


let imprimeRick = document.querySelectorAll(`[data-function="testMe"]`);

console.log(imprimeRick[2].innerHTML);
