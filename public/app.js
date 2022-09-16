let open = document.getElementById('open');
let modalcontainer = document.getElementById('modalcontainer');
let close = document.getElementById('close');
let submit = document.getElementById('submit');
let lista = document.getElementById('lista');
let paginavacia = document.getElementById('paginavacia');
let form = document.getElementById('form');
let formulario = document.getElementById('formulario');
let titulo  = document.getElementById('titulo');
let categoria = document.getElementById('categoria');
let descripcion = document.getElementById('descripcion');
let items = document.getElementById('items');
let contDetalle = document.getElementById('contDetalle');
let detallepadre = document.getElementById('detallepadre');


/*
open.addEventListener('click',() => {
    modalcontainer.classList.add('show');
    console.log('me abrieron');
});

close.addEventListener('click',() => {
    modalcontainer.classList.remove('show');
    console.log('me cerraron');
});


submit.addEventListener('click',() => {
    modalcontainer.style.display = "none";
    paginavacia.style.display = "none";
    lista.style.display = "block";
    console.log('me agregaron');
});
*/

////boton agregar////
let agregar = (e) => {
    console.log("me pincharon");
    modalcontainer.style.display = "block";
    
};

open.addEventListener("click", agregar);

////boton agregar////

////mini botoncito cerrar////

let cerrar = (e) => {
    console.log("me cerraron");
    modalcontainer.style.display = "none";
};
close.addEventListener("click", cerrar);

////mini botoncito cerrar////


////cajita de producto agregado con boton de ver mas////

const addItem = (titulo, categoria, descripcion) => {
    let item = `<li><img src="img/${categoria}">
        <h3>${titulo}</h3>
        <button onClick="verDetalle('${titulo}','${categoria}', '${descripcion}')">Ver más</button>
        </li>`
        
        items.innerHTML += item;
};


////formulario////

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    let titulo = e.target.titulo.value;
    let categoria = e.target.categoria.value; 
    let descripcion = e.target.descripcion.value;

    
addItem (titulo, categoria, descripcion)
    console.log ("me agregaron");
    console.log(titulo, categoria, descripcion);
    modalcontainer.style.display ="none";
    paginavacia.style.display="none";
    lista.style.display ="block";

    form.reset()
});



////cerrar de la cajita detalle////

const verDetalle = (titulo, categoria, descripcion) => {
    console.log(titulo, categoria, descripcion);
    contDetalle.style.display="block";
    

    let detallehijo = `<li><img src="img/${categoria}">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <button onClick="volver()">Cerrar</button>
    </li>`

    detallepadre.innerHTML = detallehijo; 
    

}

    let volver =(e)=>{
        console.log('volvi');
        contDetalle.style.display="none";
    }
    



