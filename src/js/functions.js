//NIGHT MODE

let nightClass = function(element){
    element.classList.toggle("night--style");
}

let nightClass2 = function(element){
    element.classList.toggle("night--style2");
}
let nightClass3 = function(element){
    element.classList.toggle("night--style3");
}
let nightBorders = function(element){
    element.classList.toggle("nightBorders");
}

//Cambiar botones del menu desplegable, dependiendo si esta en nocturno o diurno:

let cambiarMenu = function(){
    if(body.className.includes("night--style")){
        if(burgerMenu.className.includes("open")){
            burgerMenu.src = "../src/img/icons/header/close-modo-noct.svg";
        }else{
            burgerMenu.src = "../src/img/icons/header/burger-modo-noct.svg";
        }
    }else{
        if(burgerMenu.className.includes("open")){
            burgerMenu.src = "../src/img/icons/header/close.svg";
        }else{
            burgerMenu.src = "../src/img/icons/header/burger.svg";
        }
    }
}

//Funcion cambiar imagen al hacerles hover, modo diurno:

function hover(elemento,imagenOver,imagenOut){
    elemento.addEventListener("mouseover",()=>{
        if (!body.className.includes("night--style")){
            elemento.src = imagenOver;
        }
    });
    elemento.addEventListener("mouseout",()=>{
        if(!body.className.includes("night--style")){
            elemento.src = imagenOut;
        }
    });
}


//Funcion cambiar imagen de iconos al hacerles hover, modo nocturno:

function Nighthover(elemento,imagenOver,imagenOut){
    elemento.addEventListener("mouseover",()=>{
        if (body.className.includes("night--style")){
            elemento.src = imagenOver;
        }
    });
    elemento.addEventListener("mouseout",()=>{
        if(body.className.includes("night--style")){
            elemento.src = imagenOut;
        }
    });
}

//Funcion para añadir o sacar la clase active a un elemento:

function activeClass(element, activeImage, inactiveImage, hoverImage){
    if(element.className.includes("active")){
        element.src = activeImage;
        hover(element,activeImage,activeImage);
        Nighthover(element,activeImage,activeImage) ;
    }
    element.addEventListener("click", ()=>{
        element.classList.toggle("active");
        if(!element.className.includes("active")){
            element.src = inactiveImage;
            hover(element,inactiveImage,hoverImage);
            Nighthover(element,inactiveImage,hoverImage);
        }else{
            element.src = activeImage;
            hover(element,activeImage,activeImage);
            Nighthover(element,activeImage,activeImage);
        }
    });
}

//Funciónes para añadir clases a elementos de un array:

function nightClassForArray(array){
    for(element of array){
        nightClass(element);
    }
}

function nightBordersForArray(array){
    for(element of array){
        nightBorders(element);
    }
};

//ASYNC FUNCTIONS

const apikey = "G9CuhKrAX6tHRAawnwsHTER482T7FSZK";

//Crear los contenedores con los gifs, el titulo, usuario, hoverWindow, etc.

let favArray = [];
let favArrayLS = localStorage.getItem("favArray")
if(favArrayLS !== null){
    favArray = JSON.parse(favArrayLS);
}

let openWindow = document.getElementById("openWindow");
let closeOpenWindow = document.getElementById("closeOpenWindow");
let gifsContainerOpenWindow = document.getElementById("gifsContainerOpenWindow");

if(closeOpenWindow !==null){
    closeOpenWindow.addEventListener("click",()=>{
        openWindow.classList.add("hidden");
    });
}

let misGifosArray = [];
let misGifosArrayLS = localStorage.getItem("misGifosArray");

function printGifs(gifArrayObjetos, gifsContainer, limit, type){
    if(gifArrayObjetos.length !== 0){
        for(let i = 0; i < limit; i++){
            let gifObject = gifArrayObjetos[i];
            if(gifObject !== undefined){
                if(type === "alternative"){
                    var receivedImage = gifObject.data.images.fixed_width.url;
                    var receivedUser = gifObject.data.username;
                    var receivedTitle = gifObject.data.title;
                }else{
                    var receivedImage = gifObject.images.fixed_width.url;
                    var receivedUser = gifObject.username;
                    var receivedTitle = gifObject.title;
                }
    
                let gifContent = document.createElement("div");
                let gifImage = document.createElement("img");
                let hoverWindow = document.createElement("div");
                let hoverIcons = document.createElement("div");
                let favIcon = document.createElement("img");
                let downloadIcon = document.createElement("img");
                let expandIcon = document.createElement("img");
                let removeIcon = document.createElement("img");
                let gifInfo = document.createElement("gifInfo");
                let user = document.createElement("p");
                let gifTitle = document.createElement("p");
            
                gifsContainer.appendChild(gifContent);
                gifContent.appendChild(gifImage);
                gifContent.appendChild(hoverWindow);
                
                gifImage.src = receivedImage;
                user.textContent = receivedUser;
                gifTitle.textContent = receivedTitle;
                
                hoverWindow.appendChild(hoverIcons);
                hoverWindow.appendChild(gifInfo);
                if(type === "alternative"){
                    hoverIcons.appendChild(removeIcon);
                }else{
                    hoverIcons.appendChild(favIcon);
                }
                hoverIcons.appendChild(downloadIcon);
                hoverIcons.appendChild(expandIcon);
                gifInfo.appendChild(user);
                gifInfo.appendChild(gifTitle);
    
                favIcon.src = "../src/img/icons/home-main/hoverIcons/icon-fav.svg";
                downloadIcon.src = "../src/img/icons/home-main/hoverIcons/icon-download.svg";
                expandIcon.src = "../src/img/icons/home-main/hoverIcons/icon-max-normal.svg";
                removeIcon.src = "../src/img/icons/home-main/hoverIcons/icon-trash-normal.svg";
    
                gifContent.classList.add("gif-content");
                gifImage.classList.add("gif-image");
                hoverWindow.classList.add("hoverWindow");
                hoverIcons.classList.add("hoverIcons");
                gifInfo.classList.add("gifInfo");                                                     
                gifTitle.classList.add("gifTitle");
                favIcon.classList.add("favIcon");
                downloadIcon.classList.add("downloadIcon");
                expandIcon.classList.add("expandIcon");
    
                //Configuracion para cada hover button

                const favIconSettings = function(icon){

                    hover(icon,"../src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                    "../src/img/icons/home-main/hoverIcons/icon-fav.svg", "../src/img/icons/home-main/hoverIcons/icon-fav-active.svg");

                    Nighthover(icon,
                        "../src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-fav.svg", "../src/img/icons/home-main/hoverIcons/icon-fav-active.svg"); 

                    activeClass(icon, 
                        "../src/img/icons/home-main/hoverIcons/icon-fav-active.svg", 
                        "../src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-fav.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-fav-hover.svg");

                    icon.addEventListener("click", ()=>{
                        localStorage.setItem("favIconClassName",icon.className)
                    })
                }

                const downloadSettings = function(icon){
                    hover(icon, 
                        "../src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-download.svg");

                    Nighthover(icon, 
                        "../src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-download.svg");
                }

                const expandSettings = function(icon){
                    hover(icon,
                        "../src/img/icons/home-main/hoverIcons/icon-max-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-max-normal.svg");
                    
                    Nighthover(icon,
                        "../src/img/icons/home-main/hoverIcons/icon-max-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-max-normal.svg");
                }
                const removeSettings = function(icon){
                    hover(icon,
                        "../src/img/icons/home-main/hoverIcons/icon-trash-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-trash-normal.svg");
                    
                    Nighthover(icon,
                        "../src/img/icons/home-main/hoverIcons/icon-trash-hover.svg",
                        "../src/img/icons/home-main/hoverIcons/icon-trash-normal.svg");
                }
                //Acciones para cada hover button

                const addFavGif = function(icon){
                    if(icon.className.includes("active")){
                        favArray.push(gifObject);
                    }else{
                        favArray.push(favArray.splice(favArray.indexOf(gifObject),1)[0]);
                        favArray.pop();
                    }
                
                    localStorage.setItem("favArray", JSON.stringify(favArray));
                    
                    let favArrayInLocalStorage = localStorage.getItem("favArray");

                    let FavArraySaved = JSON.parse(favArrayInLocalStorage);
    
                }

                const removeGif = function(){
                    misGifosArray.push(misGifosArray.splice(misGifosArray.indexOf(gifObject),1)[0]);
                    misGifosArray.pop();
                    localStorage.setItem("misGifosArray", JSON.stringify(misGifosArray));
                    misGifosArrayLS = localStorage.getItem("misGifosArray");
                    misGifosArray = JSON.parse(misGifosArrayLS);
                    if(misGifosArray.length !== 0){
                        grillaMisGifos.innerHTML = "";
                        printGifs(misGifosArray, grillaMisGifos, 12, "alternative")
                        noCreatedGifosYet.classList.add("hidden");
                        grillaMisGifos.classList.remove("hidden");
                    }else if(noCreatedGifosYet.className.includes("hidden")){
                        grillaMisGifos.classList.add("hidden");
                        noCreatedGifosYet.classList.remove("hidden");
                        verMas.classList.add("hidden");
                    }
                }
    
                const downloadGif = function(){
                    (async () => {
                        let a = document.createElement('a');
                        let response = await fetch(`${receivedImage}`);
                        let file = await response.blob();
                        a.download = 'GIFO';
                        a.href = window.URL.createObjectURL(file);
                        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                        a.click();
                    })();
                }
    
                const createElementsOpenWindow = function(){
                    gifsContainerOpenWindow.innerHTML = "";
                    openWindow.classList.remove("hidden");
                    if(body.className.includes("night--style")){
                        openWindow.classList.add("openWindowNightStyle");
                        closeOpenWindow.src = "../src/img/icons/header/close-modo-noct.svg";
                    }else{
                        openWindow.classList.remove("openWindowNightStyle");
                        closeOpenWindow.src = "../src/img/icons/header/close.svg";
    
                    }
                
                    let gifImageOpenWindow = gifImage.cloneNode();
                    let openWindowOptions = document.createElement("div");
                        let openWindowInfo = document.createElement("div");
                            let userOpenWindow = document.createElement("div");
                            let gifTitleOpenWindow = document.createElement("div");
                
                        let openWindowIcons = document.createElement("div");
                            let openWindowFav = favIcon.cloneNode();
                            let openWindowDownload = downloadIcon.cloneNode();
                            let openWindowRemove = removeIcon.cloneNode();
                
                    gifImageOpenWindow.classList.remove("gif-image");
                    gifImageOpenWindow.classList.add("gif-image__open-window");
                    openWindowOptions.classList.add("open-window-options");
                    openWindowInfo.classList.add("openWindowInfo")
                    gifTitleOpenWindow.classList.add("gifTitle");
                    openWindowIcons.classList.add("openWindowIcons");
                
                    gifsContainerOpenWindow.appendChild(gifImageOpenWindow);
                    gifsContainerOpenWindow.appendChild(openWindowOptions);
                    openWindowOptions.appendChild(openWindowInfo);
                    openWindowOptions.appendChild(openWindowIcons);
                    openWindowInfo.appendChild(userOpenWindow);
                    openWindowInfo.appendChild(gifTitleOpenWindow);
                    if(type === "alternative"){
                        openWindowIcons.appendChild(openWindowRemove);
                    }else{
                        openWindowIcons.appendChild(openWindowFav);
                    }
                    openWindowIcons.appendChild(openWindowDownload);
    
                    userOpenWindow.textContent = receivedUser;
                    gifTitleOpenWindow.textContent = receivedTitle; 
    
                    favIconSettings(openWindowFav);
                    openWindowFav.addEventListener("click",()=>{
                        addFavGif(openWindowFav);
                    });
    
                    downloadSettings(openWindowDownload);
                    openWindowDownload.addEventListener("click", ()=>{
                        downloadGif();
                    });

                    removeSettings(openWindowRemove);
                    openWindowRemove.addEventListener("click", () => {
                        removeGif();
                    });
                }
    
                let grillaFav = document.getElementById("grillaFav");
                let noFavoritesYet = document.getElementById("noFavoritesYet");

                favIconSettings(favIcon);
                favIcon.addEventListener("click", ()=>{
                    addFavGif(favIcon);
                    if(favArray.length !==0){
                        grillaFav.innerHTML = "";
                        printGifs(favArray,grillaFav,12);
                        let activeFavIcons = document.querySelectorAll("#grillaFav .favIcon");
                        for (let i = 0; i < activeFavIcons.length; i++) {
                            const activeIcon = activeFavIcons[i];
                            activeIcon.classList.add("active");
                            activeIcon.src = "../src/img/icons/home-main/hoverIcons/icon-fav-active.svg";
                            hover(activeIcon,"../src/img/icons/home-main/hoverIcons/icon-fav-active.svg","../src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
                            Nighthover(activeIcon,"../src/img/icons/home-main/hoverIcons/icon-fav-active.svg","../src/img/icons/home-main/hoverIcons/icon-fav-active.svg");
                        }
                        noFavoritesYet.classList.add("hidden");
                        grillaFav.classList.remove("hidden");
                        if(favArray.length <= 12){
                            verMas.classList.add("hidden");
                        }

                    }else if(noFavoritesYet.className.includes("hidden")){
                        grillaFav.classList.add("hidden");
                        noFavoritesYet.classList.remove("hidden");
                        verMas.classList.add("hidden");
                    }
                });
    
                downloadSettings(downloadIcon);
                downloadIcon.addEventListener("click", downloadGif)
    
                expandSettings(expandIcon);
                expandIcon.addEventListener("click", createElementsOpenWindow);

                let grillaMisGifos = document.getElementById("grillaMisGifos");
                let noCreatedGifosYet = document.getElementById("noCreatedGifosYet");

                removeSettings(removeIcon);
                removeIcon.addEventListener("click", ()=>{
                    removeGif();
                    
                })
    
                if(screen.width<1200){
                    hoverWindow.addEventListener("click", createElementsOpenWindow);
            }
            }
        }
    } 
}

//Carga de gifos grabados a mis gifos

if(misGifosArrayLS !== null){
    misGifosArray = JSON.parse(misGifosArrayLS);
}