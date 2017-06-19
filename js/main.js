/*aquí va tu código*/
/*aquí va tu código*/
/*key es donde se encuentra almacenada la clave ej: nombres*/
/*funcion boton*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardarDatos);
	guardarDatos();
}

/*funcion guardar datos*/
function guardarDatos(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	localStorage.setItem(clave, valor);

	/*limpia contenedor para no repetir valores en html*/
	var contenedor = document.getElementById("ale");
	contenedor.innerHTML="";
/*recorre los valores ingresados*/
	for(var i = 0; i < localStorage.length; i++);
		var kei = localStorage.key(i);/*key toma info y la devuelve como valor string*/
		var values = localStorage.getItem(kei);/*getItem devuelve valor del kei*/
}
  
  	/*creando contenedor*/
	var caja = document.createElement("div");
	caja.classList.add("cajita");

	/*informacion que va dentro del contenedor(nombre usuario)*/
	var titulo = document.createElement("h1");/*titulo es el padre*/
	var nombre = document.createTextNode(kei);/*crea un nodo hijo*/
	titulo.classList.add("datos-usuario");/*agrega una clase al padre*/
	titulo.appendChild(nombre);/*le asigna un padre al nodo hijo*/