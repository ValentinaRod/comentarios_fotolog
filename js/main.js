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
