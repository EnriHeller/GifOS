let verMas = document.getElementById("verMas");

nightModeButton.addEventListener("click",()=>{
    if(body.className.includes("night--style")){
        verMas.src = "/src/img/icons/favoritos-main/ver+-modo-noc.svg";
    }else{
        verMas.src = "/src/img/icons/favoritos-main/ver-mas.svg"
    }
});

hover(verMas,"/src/img/icons/favoritos-main/ver-mas-hover.svg","/src/img/icons/favoritos-main/ver-mas.svg");

Nighthover(verMas, "/src/img/icons/favoritos-main/ver+hover-modo-noc.svg", "/src/img/icons/favoritos-main/ver+-modo-noc.svg");



