let verMas = document.getElementById("verMas");
let grillaFav = document.getElementById("grillaFav");

if(body.className.includes("night--style")){
    verMas.src = "/src/img/icons/favoritos-main/ver+-modo-noc.svg";
}else{
    verMas.src = "/src/img/icons/favoritos-main/ver-mas.svg"
}

nightModeButton.addEventListener("click",()=>{
    if(body.className.includes("night--style")){
        verMas.src = "/src/img/icons/favoritos-main/ver+-modo-noc.svg";
    }else{
        verMas.src = "/src/img/icons/favoritos-main/ver-mas.svg"
    }
});

hover(verMas,"/src/img/icons/favoritos-main/ver-mas-hover.svg","/src/img/icons/favoritos-main/ver-mas.svg");

Nighthover(verMas, "/src/img/icons/favoritos-main/ver+hover-modo-noc.svg", "/src/img/icons/favoritos-main/ver+-modo-noc.svg");

let verMasCount = 0;

//si el array con los gifs favoritos tiene más de 12 gifs, mostrar el botón de ver más y cargar otros 12.

verMas.addEventListener("click", ()=>{
    verMasCount ++;
});

if(favArray.length !== 0){
    verMas.classList.remove("hidden");

    printGifs(favArray,grillaFav);
    let activeFavIcons = document.querySelectorAll("#grillaFav .favIcon");
    for (let i = 0; i < activeFavIcons.length; i++) {
        const activeIcon = activeFavIcons[i];
        activeIcon.src = "/src/img/icons/home-main/hoverIcons/icon-fav-active.svg";
        activeIcon.classList.add("active")
        hover(activeIcon,"/src/img/icons/home-main/hoverIcons/icon-fav-active.svg","/src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
        Nighthover(activeIcon,"/src/img/icons/home-main/hoverIcons/icon-fav-active.svg","/src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
    }
}else{
    verMas.classList.add("hidden");
}

