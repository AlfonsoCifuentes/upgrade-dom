//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let divContainer = document.createElement("div");
divContainer.style.cssText = "background:tomato";
document.body.appendChild(divContainer);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let parrafo22 = document.createElement("p");
divContainer.appendChild(parrafo22);
parrafo22.innerHTML= "Hola, soy el <strong>p</strong> insertado del apartado 2.2, este div es el del apartado 2.1";


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div23 = document.createElement("div");
div23.style.cssText = "background:green";
document.body.appendChild(div23);

for (i=1; i<=6; i++){
	let parrafo23 = document.createElement("p");
	div23.appendChild(parrafo23);
	parrafo23.innerHTML= "Hola, soy el <strong>p</strong> (número " +i+ ") insertado por bucle en el apartado 2.3";
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let soyDinamico = document.createElement("p");
document.body.appendChild(soyDinamico);
soyDinamico.innerHTML="Soy dinámico!";

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let rickCatchPhrase = document.getElementsByClassName("fn-insert-here") && document.getElementsByTagName("h2");
rickCatchPhrase[0].innerHTML = "Wubba Lubba dub dub"

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let appsList = document.createElement("ul");
document.body.appendChild(appsList);

for (i=0; i<= apps.length; i++){
	let appsElement = document.createElement("li");
	appsElement.innerHTML= apps[i];
	appsList.appendChild(appsElement);
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eliminame = document.getElementsByClassName("fn-remove-me");


for (i=0; i= eliminame.length; i++){
	document.body.removeChild(eliminame[0]);
}


/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

let divList = document.querySelectorAll("div");
let div28 = document.createElement("p");
div28.innerHTML="Voy en medio!";
divList[1].before (div28);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let insertHereDivs = document.querySelectorAll("div.fn-insert-here");



	
	for (i=0; i<=insertHereDivs.length; i++){
		let elementoActual = insertHereDivs[i];
		let p29 = document.createElement("p");
		p29.innerHTML = "Voy dentro!";
		elementoActual.appendChild(p29);

	}



console.log (InsertHereDivs);