//alert("Hola")

function crearLista(){

	//Crea lista
	var nuevaLista = document.createElement("ul"); //crea elemento unordered list
	var nombreIngresado = document.getElementById("nombreLista").value; //obtiene el valor del input nombre de nueva lista
	var nombreLista= document.createTextNode(nombreIngresado);//transforma el valor anterior en un nodo texto

	nuevaLista.appendChild(nombreLista);//adjunta el nombre al elemento lista, elemento lista nueva

	var listas= document.getElementById("cajaListas");//crea el identificador de la posicion en el html

	listas.appendChild(nuevaLista);//adjunta la lista nueva en el sitio que le indicamos

	nuevaLista.id = Date(); //crea un id unico a cada lista

	var addTarea= document.createElement("h5");//crea un elemento subtitulo
	var nombreAdd= document.createTextNode("Agrega tareas a esta lista");//es el nombre que va a llevar el subtitulo
	addTarea.appendChild(nombreAdd);//adjunta el elemento subtitulo y el nombre asignado

	var botonTareas = document.createElement("button");//crea un boton
	var nombreboton = document.createTextNode("Agregar");//indica el texto del boton
	botonTareas.onclick= function agregaTarea(){ //asigna la funcionalidad onclick al boton dinamico, la funcion agrega las tareas a la lista
		var nuevaTarea= document.createElement("li"); //dentro del evento on click crea un elemento de lista
		//var tareaIngresada= document.getElementById("ingresTarea").value;//deberia extraer el valor del input, nombre de la tarea 
		var tarea= document.createTextNode("sip");//(nuevaTarea);//convierte el texto en nodo texto ("sip") texto prueba
		
		//document.getElementById("nuevaTarea").value = "";
		//var botonBorraTarea=document.createElement("button");//crea un boton
		//var nombrebotonBorrar = document.createTextNode("Tarea Cumplida");//indica el texto del boton
		
		//botonBorraTarea.appendChild(nombrebotonBorrar);//adjunta el nombre al boton
		nuevaTarea.appendChild(tarea);//adjunta el elemento de la lista al nombre de la tarea
		nuevaLista.appendChild(nuevaTarea); // adjunta el elemento completo a la lista asignada
	}
	
	botonTareas.appendChild(nombreboton);//adjunta el nombre al boton
	

	var ingresTarea = document.createElement("input");// crea elemeto input
	ingresTarea.placeholder= "Agrega tarea"//coloca indicacion en el placeholder
	
	var btnBorrar= document.createElement("button");//crea boton
	//botonTareas.onclick= function borraLista(){};//aplica funcionalidad on clik al boton
	var nombreBorrar= document.createTextNode("Borrar Lista"); // nombra boton
	btnBorrar.appendChild(nombreBorrar);// adjunta nombre al boton

	nuevaLista.appendChild(btnBorrar);//agrega boton borrar a nueva lista
	nuevaLista.appendChild(addTarea);//Agrega subtitulo a nueva lista
	nuevaLista.appendChild(ingresTarea);//agreaga caja input
	nuevaLista.appendChild(botonTareas);//agrega boton agregar

	document.getElementById("nombreLista").value = "";// regresa placeholder nueva lista a valor inicial
}


