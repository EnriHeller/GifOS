//ELEMENTOS HTML
let searchContainer = document.getElementById("searchContainer");
let searchIcon = document.getElementById("searchIcon");
let busquedaHeader = document.getElementById("busquedaHeader");
let busquedaMain = document.getElementById("busquedaMain");
let resultadosTitle = document.getElementById("resultadosTitle");
let grillaGif = document.getElementById("grillaGif");
let verMas = document.getElementById("verMas");
let inputSearchIconContainer = document.getElementById("inputSearchIconContainer");
let inputSearchIconContainer2 = document.getElementById("inputSearchIconContainer2");
let searchIconMain = document.getElementById("searchIconMain");
let searchIconHeader = document.getElementById("searchIconHeader");
let wordsContainer = document.getElementById("wordsContainer");

if(body.className.includes("night--style")){
    nightClass(busquedaMain);
    nightBorders(searchContainer);
    searchIcon.setAttribute("src", "/src/img/icons/home-main/icon-search-modo-noct.svg");
    verMas.src = "/src/img/icons/favoritos-main/ver+-modo-noc.svg";
}

//EVENTOS
nightModeButton.addEventListener("click",() =>{
    nightClass(busquedaMain);
    nightBorders(searchContainer);
    
    if(body.className.includes("night--style")){
        searchIcon.setAttribute("src", "/src/img/icons/home-main/icon-search-modo-noct.svg");
        verMas.src = "/src/img/icons/favoritos-main/ver+-modo-noc.svg";

    }else{
        searchIcon.setAttribute("src", "/src/img/icons/home-main/icon-search.svg");
        verMas.src = "/src/img/icons/favoritos-main/ver-mas.svg";
    }
});

hover(verMas,"/src/img/icons/favoritos-main/ver-mas-hover.svg","/src/img/icons/favoritos-main/ver-mas.svg");

Nighthover(verMas, "/src/img/icons/favoritos-main/ver+hover-modo-noc.svg", "/src/img/icons/favoritos-main/ver+-modo-noc.svg");

buscarEscribiendoEnElInput(busquedaMain, grillaGif, busquedaHeader);

buscarEscribiendoEnElInput(busquedaHeader, grillaGif, busquedaMain);

busquedaMain.addEventListener("keyup",()=>{
    let q = busquedaMain.value;
    autocomplete(q, busquedaMain, grillaGif);
});

busquedaHeader.addEventListener("keyup",()=>{
    let q = busquedaHeader.value;
    autocomplete(q, busquedaMain, grillaGif);
});

busquedaMain.addEventListener("click", ()=>{
    viewSearchButton(inputSearchIconContainer,busquedaMain, grillaGif, searchIconMain);
});

busquedaHeader.addEventListener("click", ()=>{
    viewSearchButton(inputSearchIconContainer2,busquedaHeader, grillaGif, searchIconHeader);
}); 


changeSearchIcon(busquedaMain,searchIcon);

changeSearchIcon(busquedaHeader,searchIcon2);

let verMasCount = 0;

verMas.addEventListener("click", ()=>{
    verMasCount ++;
    let input = busquedaMain.value;
    if(verMasCount === 1){
        buscarGifs(input, grillaGif, 12);
    }else if(verMasCount === 2){
        buscarGifs(input, grillaGif, 24);
    }else if(verMasCount === 3){
        buscarGifs(input, grillaGif, 32);
    }else if(verMasCount === 4){
        buscarGifs(input, grillaGif, 48);
    }
});

trendingWords(wordsContainer,busquedaMain,grillaGif);

trendingGifs(sliderContainer);