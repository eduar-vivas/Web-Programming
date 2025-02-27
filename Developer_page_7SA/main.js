// Selecciona el elemento con el id "menu-icon" () y lo guarda en la variable 'menu'.
let menu = document.querySelector('#menu-icon'); //sirve para buscar el elemento htlm que tiene  el id="menu-icon" 
//se asigna a la variable menu, en pocas palabras es el icono el menu

// Selecciona el elemento con la clase "side-navbar" (la barra lateral de navegación) y lo guarda en la variable 'sidenavbar'.
let sidenavbar = document.querySelector('.side-navbar'); //es para poder ocultar o mostrar
//mostrar u ocultar

// Selecciona el elemento con la clase "content" es para darle movilidad al icono de la pag para que se mueva junto
// con el menu'.
let content = document.querySelector('.content');//es para ajustar el icono del menu cuando se abra o cierre


// Cuando se hace clic en el elemento 'menu' (el icono del menú)
//En pocas palabaras es la accion cuando haces click en el icono 
menu.onclick = () => 
    {
    // alterna la clase 'active' en el elemento 'sidenavbar' (la barra lateral).
    sidenavbar.classList.toggle('active');

    //alterna la clase 'active' en el elemento 'content' (el contenido principal).
    content.classList.toggle('active');
}
//window.addEventListener("scroll", function () 
//{
 //  let footer = document.querySelector(".footer");
   // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) 
     //   {
       // footer.style.bottom = "0"; // Lo mostramos
    //} else 
    //{
    //    footer.style.bottom = "-100px"; // Lo ocultamos cuando no está en el final
    //}
//});

//https://github.com/eduar-vivas/Web-Programming.git