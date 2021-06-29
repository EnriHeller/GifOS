/////ELEMENTOS HTML
let body = document.getElementById("body");
let header = document.getElementById("header");
let labelMenu = document.getElementById("labelMenu");
let burgerMenu = document.getElementById("burgerMenu");
let logoContainer = document.getElementById("logoContainer");
let logoMobile = document.getElementById("logoMobile");
let logoDesktop = document.getElementById("logoDesktop");
let headerOpcionMenu = document.getElementsByClassName("opcion-menu__cabecera");
let nightModeButton = document.getElementById("nightModeButton");
let newGifButton = document.getElementById("newGifButton");
let menuDesplegable = document.getElementById("menuDesplegable");
let hideSearchContainer = document.getElementById("hideSearch");
let hideSearchInput = document.querySelector("header input")
let searchIcon2 = document. getElementById("searchIcon2");
let iconoBusqueda = document.querySelector("#hideSearch label img");

//ESTADO DE NIGHT MODE GUARDADO EN LOCAL STORAGE

let localSetHeader = function(){

    localStorage.setItem("bodyClassname", body.className);
    localStorage.setItem("headerClassname", header.className);
    localStorage.setItem("menuDesplegableClassname", menuDesplegable.className);
    localStorage.setItem("iconoBusquedaClassname", iconoBusqueda.className);
    localStorage.setItem("iconoBusquedaClassname", iconoBusqueda.className);
    localStorage.setItem("hideSearchContainerClassname", hideSearchContainer.className);
    localStorage.setItem("hideSearchInputClassname", hideSearchInput.className);
    localStorage.setItem("nightModeButtonTextContent", nightModeButton.textContent);
    localStorage.setItem("newGifButtonSrc", newGifButton.src);
    localStorage.setItem("logoMobileSrc", logoMobile.src);
    localStorage.setItem("logoDesktopSrc", logoDesktop.src);
    localStorage.setItem("searchIcon2Src", searchIcon2.src);
    localStorage.setItem("burgerMenuSrc", burgerMenu.src);
}

localSetHeader();

body.className = localStorage.getItem("bodyClassname");
header.className = localStorage.getItem("headerClassname");
menuDesplegable.className = localStorage.getItem("menuDesplegableClassname");
iconoBusqueda.className = localStorage.getItem("iconoBusquedaClassname");
iconoBusqueda.className = localStorage.getItem("iconoBusquedaClassname");
hideSearchContainer.className = localStorage.getItem("hideSearchContainerClassname");
hideSearchInput.className = localStorage.getItem("hideSearchInputClassname");
nightModeButton.textContent = localStorage.getItem("nightModeButtonTextContent");
newGifButton.src = localStorage.getItem("newGifButtonSrc");
logoMobile.src = localStorage.getItem("logoMobileSrc");
logoDesktop.src = localStorage.getItem("logoDesktopSrc");
searchIcon2.src = localStorage.getItem("searchIcon2Src"); 
cambiarMenu(); 

if(body.className.includes("night--style")){
    if(screen.width >= 1220){
        for (opcion of headerOpcionMenu){
            opcion.classList.toggle("night--style");
        }; 
    }
}

////EVENTOS
nightModeButton.addEventListener("click",() =>{
    nightClass(body);
    nightClass(header);
    nightClass2(menuDesplegable);
    nightClass(iconoBusqueda);
    nightBorders(hideSearchContainer);
    nightClass(hideSearchInput);

    if(screen.width >= 1220){
        for (opcion of headerOpcionMenu){
            opcion.classList.toggle("night--style");
        }; 
    }
    
    if(body.className.includes("night--style")){
        nightModeButton.textContent = "Modo Diurno";
        newGifButton.src = "/src/img/icons/header/crear-gifo-modo-noc.svg";
        logoMobile.src = "/src/img/icons/header/logo-mobile-modo-noct.svg";
        logoDesktop.src = "/src/img/icons/header/logo-desktop-modo-noc.svg";
        searchIcon2.src = "/src/img/icons/home-main/icon-search-modo-noct.svg";
    }else{
        nightModeButton.textContent = "Modo Nocturno";
        newGifButton.src = "/src/img/icons/header/button-crear-gifo.svg";
        logoMobile.src = "/src/img/icons/header/logo-mobile.svg";
        logoDesktop.src = "/src/img/icons/header/logo-desktop.svg";
        searchIcon2.src = "/src/img/icons/home-main/icon-search.svg";
    }
    cambiarMenu();
    localSetHeader();
});

hover(newGifButton, "/src/img/icons/header/crear-gifo-hover.svg","/src/img/icons/header/button-crear-gifo.svg" );

Nighthover(newGifButton,"/src/img/icons/header/crear-gifo-hover-modo-noc.svg","/src/img/icons/header/crear-gifo-modo-noc.svg");

labelMenu.addEventListener("click",() => {
    burgerMenu.classList.toggle("open");
    cambiarMenu();
    localStorage.setItem("burgerMenuSrc", burgerMenu.src);
});


function viewHeaderSearch(){
    //Variable que me indica que tanto se alejo el usuario de arriba de todo, haciendo scroll:
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    if(scrollTop >= 450 && window.screen.width >= 1220){
        hideSearch.classList.add("search-container__header");
        logoContainer.classList.add("fixLogo");

    }else{
        hideSearch.classList.remove("search-container__header");
        logoContainer.classList.remove("fixLogo");

    }
}

window.onscroll = viewHeaderSearch;




