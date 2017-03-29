//alert("Hola")

function crearLista(){

	var nuevaLista = document.createElement("ul");
	var nombreIngresado = document.getElementById("nombreLista").value;
	var nombreLista= document.createTextNode(nombreIngresado);

	nuevaLista.appendChild(nombreLista);

	var listas= document.getElementById("cajaListas");

	listas.appendChild(nuevaLista);

	nuevaLista.id = Date();

	var addTarea= document.createElement("h5");
	var nombreAdd= document.createTextNode("Agrega tareas a esta lista");
	addTarea.appendChild(nombreAdd);

	var botonTareas = document.createElement("button");
	var nombreboton = document.createTextNode("Agregar");
	botonTareas.onclick= function agregaTarea(){
		var nuevaTarea= document.createElement("li");
		var tarea= document.getElementById("ingresTarea");
		nuevaTarea.appendChild(tarea);
		nuevaLista.appendChild(nuevaTarea);
	}

	
	botonTareas.appendChild(nombreboton);
	

	var ingresTarea = document.createElement("input");
	ingresTarea.appendChild(addTarea);
	ingresTarea.placeholder= "Agrega tarea"
	
	var btnBorrar= document.createElement("button");
	//btnBorrar.setAttribute("onclick",callJavascriptFunction); function(){alert("OnClick");};
	var nombreBorrar= document.createTextNode("Borrar Lista");
	btnBorrar.appendChild(nombreBorrar);

	nuevaLista.appendChild(btnBorrar);
	nuevaLista.appendChild(addTarea);
	nuevaLista.appendChild(ingresTarea);
	nuevaLista.appendChild(botonTareas);

	document.getElementById("nombreLista").value = "";
}


