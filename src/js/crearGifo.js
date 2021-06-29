let parrafosCrearGifo = document.getElementsByClassName("parrafo__creargifo");
let steps = document.getElementsByClassName("step");
let pelicula = document.getElementById("pelicula");
let botonComenzar = document.getElementById("botonComenzar");
let cinta1 = document.getElementById("cinta1");
let cinta2 = document.getElementById("cinta2");
let camBody = document.getElementById("camBody");
let recContainer = document.getElementById("recContainer");

nightModeButton.addEventListener("click",() =>{
    nightBorders(recContainer);
    nightBorders(botonComenzar);
    nightClass(botonComenzar);
    nightClassForArray(parrafosCrearGifo);
    nightBordersForArray(steps);
    if(body.className.includes("night--style")){
        cinta1.src = "/src/img/creargifo/element_cinta1-modo-noc.svg";
        cinta2.src = "/src/img/creargifo/element_cinta2-modo-noc.svg";
        camBody.src = "/src/img/creargifo/camara-modo-noc.png";
        pelicula.src = "/src/img/creargifo/pelicula-modo-noc.svg";
        
    }else{
        cinta1.src = "/src/img/creargifo/element_cinta1.svg";
        cinta2.src = "/src/img/creargifo/element_cinta2.svg";
        camBody.src = "/src/img/creargifo/element-camara.svg";
        pelicula.src = "/src/img/creargifo/pelicula.svg";
    }
});
