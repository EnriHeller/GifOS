let verMas = document.getElementById("verMas");
let grillaFav = document.getElementById("grillaFav");
let nofavoritesYet = document.getElementById("noFavoritesYet");
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

let grillaFavFunctions = function(limit){
    if(favArray.length !== 0){
        verMas.classList.remove("hidden");
        grillaFav.classList.remove("hidden");
        nofavoritesYet.classList.add("hidden");
    
        printGifs(favArray,grillaFav, limit);
        let activeFavIcons = document.querySelectorAll("#grillaFav .favIcon");
        for (let i = 0; i < activeFavIcons.length; i++) {
            const activeIcon = activeFavIcons[i];
            activeIcon.src = "/src/img/icons/home-main/hoverIcons/icon-fav-active.svg";
            activeIcon.classList.add("active");
            hover(activeIcon,"/src/img/icons/home-main/hoverIcons/icon-fav-active.svg","/src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
            Nighthover(activeIcon,"/src/img/icons/home-main/hoverIcons/icon-fav-active.svg","/src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
        }
    }else{
        verMas.classList.add("hidden");
        grillaFav.classList.add("hidden");
        nofavoritesYet.classList.remove("hidden");
    }
}

grillaFavFunctions(12);
if(favArray.length <= 12){
    verMas.classList.add("hidden");
}else{
    verMas.classList.remove("hidden");
}

verMas.addEventListener("click", ()=>{
    verMasCount ++;
    grillaFav.innerHTML = "";
    if(verMasCount === 1){
        grillaFavFunctions(24);
        if(favArray.length <= 24){
        verMas.classList.add("hidden");
        }
    }else if(verMasCount === 2){
        grillaFavFunctions(favArray.length);
        verMas.classList.add("hidden");
    }
});

