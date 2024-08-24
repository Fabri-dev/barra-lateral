//constantes
const barras= document.querySelector(".barras");
const menuAside= document.querySelector(".menu");
const textoFunciones= document.querySelectorAll(".texto-funciones");
const funcionesWrap= document.getElementById("funciones");
let listas= document.getElementsByTagName('li');

//cuando yo toco boton hamburguesa tengo que expandir el menu agregandole .abierto y tambien tengo que cambiar la forma del boton a una cruz

barras.addEventListener("click",()=>{
    menuAside.classList.toggle('abierto');
    funcionesWrap.style.justifyContent
    barras.classList.toggle('enCruz');
    expandirTextos(textoFunciones);
});


function expandirTextos(arregloDeEtiquetas){
    arregloDeEtiquetas.forEach(texto => {
        texto.classList.toggle('activo');
    });
}




