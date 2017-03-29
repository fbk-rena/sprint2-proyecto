//alert("Hola")

function crearLista(){

	var nuevaLista = document.createElement("ul");
	var nombreIngresado = document.getElementById("nombreLista").value;
	var nombreLista= document.createTextNode(nombreIngresado);

	nuevaLista.appendChild(nombreLista);

	var listas= document.getElementById("cajaListas");

	listas.appendChild(nuevaLista);

	var addTarea= document.createElement("h5");
	var nombreAdd= document.createTextNode("Agrega tareas a esta lista");

	addTarea.appendChild(nombreAdd);

	var botonTareas = document.createElement("button");
	var nombreboton = document.createTextNode("Agregar");

	botonTareas.appendChild(nombreboton);
	

	var ingresTarea = document.createElement("input");
	

	ingresTarea.appendChild(addTarea);

	nuevaLista.appendChild(addTarea);
	nuevaLista.appendChild(ingresTarea);
	nuevaLista.appendChild(botonTareas);

	nombreIngresado= "";

	console.log(listas);
}