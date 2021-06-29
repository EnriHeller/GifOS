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

//cambiar botones del menu desplegable, dependiendo si esta en nocturno o diurno:

let cambiarMenu = function(){
    if(body.className.includes("night--style")){
        if(burgerMenu.className.includes("open")){
            burgerMenu.src = "/src/img/icons/header/close-modo-noct.svg";
        }else{
            burgerMenu.src = "/src/img/icons/header/burger-modo-noct.svg";
        }
    }else{
        if(burgerMenu.className.includes("open")){
            burgerMenu.src = "/src/img/icons/header/close.svg";
        }else{
            burgerMenu.src = "/src/img/icons/header/burger.svg";
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
    element.addEventListener("click", ()=>{
        element.classList.toggle("active");

        if(element.className.includes("active")){
            element.src = activeImage;
            hover(element,activeImage,activeImage);
            Nighthover(element,activeImage,activeImage);
        }else{
            element.src = inactiveImage;
            hover(element,inactiveImage,hoverImage);
            Nighthover(element,inactiveImage,hoverImage);
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

// Funcion asincronica para buscar gifs a partir de una palabra, obtenerlos en forma de objetos y luego hacer algo con ellos mediante el callback.

const buscarGifs = async (q, gifsContainer, offset) => {
    const searchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=12&offset=${offset}`;
    const responseHttp = await fetch(searchEndpoint);
    const responseJson = await responseHttp.json();
    let gifObjects = responseJson.data;
    let verMas = document.getElementById('verMas');
    try {
        if(gifObjects.lenght !== 0){
            gifsContainer.classList.remove("noResultsDistribution");
            verMas.classList.remove('hidden');
            printGifs(gifObjects, gifsContainer);
    }
        else{
            throw new Error();
        }
    } catch (error) {
        console.log("Falló la promesa buscarGifs");
        let noResultsImage= document.createElement("img");
        noResultsImage.src = "/src/img/home/icon-busqueda-sin-resultado.svg";
        let noResultsMessage = document.createElement("h3");
        noResultsMessage.textContent = "Intenta con otra búsqueda.";
        noResultsMessage.classList.add("noResultsMessage");
        gifsContainer.classList.add('noResultsDistribution');
        verMas.classList.add('hidden');
        gifsContainer.appendChild(noResultsImage);
        gifsContainer.appendChild(noResultsMessage);
    }  
}

//Crear los contenedores con los gifs, el titulo, usuario, hoverWindow, etc.

function printGifs(gifArrayObjetos, gifsContainer){
    
    try {
        if(gifArrayObjetos.lenght !== 0){
            for(let i = 0; i < 12; i++){
                let gifObject = gifArrayObjetos[i];
                let receivedImage = gifObject.images.fixed_width.url;
                let receivedUser = gifObject.username;
                let receivedTitle = gifObject.title;
    
                let gifContent = document.createElement("div");
                let gifImage = document.createElement("img");
                let hoverWindow = document.createElement("div");
                let hoverIcons = document.createElement("div");
                let favIcon = document.createElement("img");
                let downloadIcon = document.createElement("img");
                let expandIcon = document.createElement("img");
                let gifInfo = document.createElement("gifInfo");
                let user = document.createElement("p");
                let gifTitle = document.createElement("p");
            
                gifsContainer.appendChild(gifContent);
                gifContent.appendChild(gifImage);
                gifContent.appendChild(hoverWindow);
                hoverWindow.appendChild(hoverIcons);
                hoverWindow.appendChild(gifInfo);
                hoverIcons.appendChild(favIcon);
                hoverIcons.appendChild(downloadIcon);
                hoverIcons.appendChild(expandIcon);
                gifInfo.appendChild(user);
                gifInfo.appendChild(gifTitle);
    
                favIcon.src = "/src/img/icons/home-main/hoverIcons/icon-fav.svg";
                downloadIcon.src = "/src/img/icons/home-main/hoverIcons/icon-download.svg";
                expandIcon.src = "/src/img/icons/home-main/hoverIcons/icon-max-normal.svg";
    
                gifContent.classList.add("gif-content");
                gifImage.classList.add("gif-image");
                hoverWindow.classList.add("hoverWindow");
                hoverIcons.classList.add("hoverIcons");
                gifInfo.classList.add("gifInfo");
                gifTitle.classList.add("gifTitle");
                favIcon.classList.add("favIcon");
                downloadIcon.classList.add("downloadIcon");
                expandIcon.classList.add("expandIcon");
                
                hover(favIcon,"/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                "/src/img/icons/home-main/hoverIcons/icon-fav.svg" );
    
                Nighthover(favIcon,
                    "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-fav.svg");
    
                activeClass(favIcon, 
                    "/src/img/icons/home-main/hoverIcons/icon-fav-active.svg", 
                    "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-fav.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg");
    
                hover(downloadIcon, 
                    "/src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-download.svg");
    
                Nighthover(downloadIcon, 
                    "/src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-download.svg");
    
                hover(expandIcon,
                    "/src/img/icons/home-main/hoverIcons/icon-max-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-max-normal.svg");
                
                Nighthover(expandIcon,
                    "/src/img/icons/home-main/hoverIcons/icon-max-hover.svg",
                    "/src/img/icons/home-main/hoverIcons/icon-max-normal.svg");
                
                gifImage.src = receivedImage;
                user.textContent = receivedUser;
                gifTitle.textContent = receivedTitle;
            }
        }else{
            throw new Error()
        }
    } catch (error) {
        console.log("Falló la promesa printGifs");
        
    }
    
} 

//Busqueda por input, apretando en el icono de busqueda o PRESIONANDO ENTER teniendo en cuenta el input secundario para que contengan el mismo.
let resultsContainer = document.getElementById("resultsContainer");
let recomendations = document.getElementById("recomendations");

function buscarEscribiendoEnElInput(input, gifsContainer, input2){
    input.addEventListener("keypress",(e)=>{
        if(e.key == "Enter"){
            let keyword = input.value;
            input2.value = input.value;
            resultadosTitle.textContent = keyword;
            gifsContainer.innerHTML = "";
            if(resultsContainer.className.includes("hidden") && input.value !== ""){
                resultsContainer.classList.remove("hidden");
                recomendations.classList.add("hidden");
            }else if(!resultsContainer.className.includes("hidden") && input.value !== ""){
            }else{
                resultsContainer.classList.add("hidden");
                recomendations.classList.remove("hidden");
            }
            buscarGifs(keyword, gifsContainer, 0);
        }
    }); 
}

//Cambiar icono de busqueda según si hay escrita o no una palabra y borrar contenido cuando se clickea

let changeSearchIcon = function(input, searchIcon){
    input.addEventListener("keyup", ()=>{
        if(input.value !== "" && !body.className.includes("night--style")){
            searchIcon.src = "/src/img/icons/header/close.svg";
        }else if(input.value !== "" && body.className.includes("night--style")){
            searchIcon.src = "/src/img/icons/header/close-modo-noct.svg";
        }
        
        else if(input.value === "" && !body.className.includes("night--style")){
            searchIcon.src = "/src/img/icons/home-main/icon-search.svg";
        }else if(input.value === "" && body.className.includes("night--style")){
            searchIcon.src = "/src/img/icons/home-main/icon-search-modo-noct.svg";
        }
    });

    searchIcon.addEventListener("click",()=>{
        input.value = "";
        resultsContainer.classList.add("hidden");
        recomendations.classList.remove("hidden");
        let ul = document.querySelector(".searchSuggestionsContainer");
        let iconSearchInput= document.querySelector(".iconSearchInput");
        ul.classList.add("hidden");
        iconSearchInput.classList.add("hidden");
        if(!body.className.includes("night--style")){
            searchIcon.src = "/src/img/icons/home-main/icon-search.svg";
        }else{
            searchIcon.src = "/src/img/icons/home-main/icon-search-modo-noct.svg";
        }
    });
} ;


//Sugerencias de busqueda

let searchSuggestionsContainer = document.querySelector(".searchSuggestionsContainer");

//Funcion para hacer busqueda con el textContent de un container

const searchWithClick = function(clickContainer,gifsContainer, input){
    clickContainer.addEventListener("click",()=>{
        let q = clickContainer.textContent;
        input.value = q;
        resultadosTitle.textContent = q;
        gifsContainer.innerHTML = "";
        if(resultsContainer.className.includes("hidden") && input.value !== ""){
            resultsContainer.classList.remove("hidden");
            recomendations.classList.add("hidden");
        }else if(!resultsContainer.className.includes("hidden") && input.value !== ""){}
        else{
            resultsContainer.classList.add("hidden");
            recomendations.classList.remove("hidden");
        }
        buscarGifs(q, gifsContainer, 0);
    });
}

const autocomplete = async(q,input,gifsContainer) =>{
    const autocompleteEndpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikey}&q=${q}`;
    const responseHttp = await fetch(autocompleteEndpoint);
    const responseJson = await responseHttp.json();
    let arraySugerencias = responseJson.data;                                                           
    if(q !== ""){
        searchSuggestionsContainer.innerHTML = "";
        searchSuggestionsContainer.classList.remove("hidden");
        for(objetoSugerencia of arraySugerencias){
            let sugerencia = document.createElement("li");
            let iconSearchSugerencia = document.createElement("img");
            iconSearchSugerencia.src = "/src/img/icons/home-main/white-search-icon-png-18.png";
            sugerencia.classList.add("sugerencia");
            iconSearchSugerencia.classList.add("iconSearchSugerencia");

            searchSuggestionsContainer.appendChild(sugerencia);
            sugerencia.textContent = objetoSugerencia.name; 
            sugerencia.appendChild(iconSearchSugerencia); 

            searchWithClick(sugerencia,gifsContainer, input);
        }
    }else{
        searchSuggestionsContainer.innerHTML = "";
        searchSuggestionsContainer.classList.add("hidden");
    }
}


//Que aparezca un botón de busqueda en el input que se clickeó

const viewSearchButton = function(busquedaContainer, input, gifsContainer, searchButton){
    busquedaContainer.addEventListener("keyup",()=>{
        if(input.value !== ""){
        searchButton.classList.remove("hidden");
        searchButton.classList.add("iconSearchInput");
    }else{
        searchButton.classList.add("hidden");
        searchButton.classList.remove("iconSearchInput");
    }
    });

    searchButton.addEventListener("click", ()=>{
        let q = input.value;
        resultadosTitle.textContent = q;
        gifsContainer.innerHTML = "";
        if(resultsContainer.className.includes("hidden") && q !== ""){
        resultsContainer.classList.remove("hidden");
        recomendations.classList.add("hidden");
    }else if(!resultsContainer.className.includes("hidden") && q !== ""){}
    else{
        resultsContainer.classList.add("hidden");
        recomendations.classList.remove("hidden");
    }
    buscarGifs(q, gifsContainer, 0);

    });

    }

const trendingWords = async function(wordsContainer, input, gifsContainer){
    const trendingWordsEndpoint = `https://api.giphy.com/v1/trending/searches?api_key=${apikey}`;
    const responseHTML = await fetch(trendingWordsEndpoint);
    const responseJson = await responseHTML.json();
    const arrayWords = responseJson.data;
    for (let i = 0; i < 5; i++) {
        const word = arrayWords[i];
        let wordContainer = document.createElement("a");
        let spacing = document.createElement("a");
        wordContainer.classList.add("element__suggestions");
        spacing.classList.add("element__suggestions");
        wordContainer.textContent = word;
        spacing.textContent = ",  ";
        
        if(i=== 4){
            wordsContainer.appendChild(wordContainer);
        }else{
            wordsContainer.appendChild(wordContainer);
            wordsContainer.appendChild(spacing);
        }

        wordContainer.addEventListener("click", ()=>{
            searchWithClick(wordContainer,gifsContainer,input);
        });
    }
}
//Llamado e impresión de los gifs del trending

const trendingGifs = async(gifsContainer) =>{
    const trendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`;
    const responseHttp = await fetch(trendingEndpoint);
    const responseJson = await responseHttp.json();
    const arrayTrendings = responseJson.data;
    printGifs(arrayTrendings, gifsContainer);
}



