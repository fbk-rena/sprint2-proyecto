//alert("Hola")

function crearLista(){

	var listas= document.getElementById("cajaListas");
	var secLista= document.createElement("article");
	secLista.id= Date.now();

	var hNombreLista=  document.createElement("h3");
	var nombreIngresado= document.getElementById("nombreLista").value;
	hNombreLista.innerText= nombreIngresado;

	var addTarea= document.createElement("h4");
	var nombreAdd= document.createTextNode("Agrega tareas a esta lista");
	addTarea.appendChild(nombreAdd);

	var btnBorrarLista= document.createElement("button");
	btnBorrarLista.innerHTML= "Borrar Lista";
	btnBorrarLista.className="borrarLista";
	btnBorrarLista.onclick= function(){
		listas.removeChild(secLista);
	}

	var inputTarea= document.createElement("input");
	inputTarea.type="text";
	inputTarea.placeholder="Agrega nueva tarea";
	inputTarea.id= "inputPendiente";

	var btnAgregaTarea=document.createElement("input");
	btnAgregaTarea.type= "submit";
	btnAgregaTarea.value= "Agregar";

	var iniciaLista= document.createElement("ul");
	var li= document.createElement("li");


	secLista.appendChild(hNombreLista);
	secLista.appendChild(btnBorrarLista);
	secLista.appendChild(addTarea);
	secLista.appendChild(inputTarea);
	secLista.appendChild(btnAgregaTarea);
	secLista.appendChild(iniciaLista);

	iniciaLista.appendChild(li);

	listas.appendChild(secLista);

	document.getElementById("nombreLista").value = "";

	btnAgregaTarea.onclick=function (){
        
        var borrar=document.createElement("button");
        borrar.className="borrar";
        borrar.innerHTML="borrar tareas";

        li.innerHTML= document.getElementById(inputPendiente).value;

        return li;
        }

        var nuevoInput=document.createElement("input");

        borrar.onclick=function(){
            Lista.removeChild(li);
          }




}







