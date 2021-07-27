let verMas = document.getElementById("verMas");
let grillaMisGifos = document.getElementById("grillaMisGifos");
let noCreatedGifosYet = document.getElementById("noCreatedGifosYet");

if(body.className.includes("night--style")){
    verMas.src = "./../img/icons/favoritos-main/ver+-modo-noc.svg";
}else{
    verMas.src = "./../img/icons/favoritos-main/ver-mas.svg"
}

nightModeButton.addEventListener("click",()=>{
    if(body.className.includes("night--style")){
        verMas.src = "./../img/icons/favoritos-main/ver+-modo-noc.svg";
    }else{
        verMas.src = "./../img/icons/favoritos-main/ver-mas.svg"
    }
});

hover(verMas,"./../img/icons/favoritos-main/ver-mas-hover.svg","./../img/icons/favoritos-main/ver-mas.svg");

Nighthover(verMas, "./../img/icons/favoritos-main/ver+hover-modo-noc.svg", "./../img/icons/favoritos-main/ver+-modo-noc.svg");

let verMasCount = 0;

let grillaMisGifosFunctions = function(limit){
    if(misGifosArray.length !== 0){
        verMas.classList.remove("hidden");
        grillaMisGifos.classList.remove("hidden");
        noCreatedGifosYet.classList.add("hidden");
        printGifs(misGifosArray,grillaMisGifos, limit, "alternative");
    }else{
        verMas.classList.add("hidden");
        grillaMisGifos.classList.add("hidden");
        noCreatedGifosYet.classList.remove("hidden");
    }
}

grillaMisGifosFunctions(12);

if(misGifosArray.length <= 12){
    verMas.classList.add("hidden");
}else{
    verMas.classList.remove("hidden");
}

verMas.addEventListener("click", ()=>{
    verMasCount ++;
    grillaMisGifos.innerHTML = "";
    if(verMasCount === 1){
        grillaMisGifosFunctions(24);
        if(misGifosArray.length <= 24){
        verMas.classList.add("hidden");
        }
    }else if(verMasCount === 2){
        grillaFavFunctions(favArray.length);
        verMas.classList.add("hidden");
    }
});
