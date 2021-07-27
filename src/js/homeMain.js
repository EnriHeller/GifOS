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
let resultsContainer = document.getElementById("resultsContainer");
let recomendations = document.getElementById("recomendations");

////FUNCIONES QUE SOLO APARECEN EN EL HOME MAIN

// Funcion asincronica para buscar gifs a partir de una palabra, obtenerlos en forma de objetos y luego hacer algo con ellos mediante el callback.

const buscarGifs = async (q, gifsContainer, offset) => {
    const searchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=12&offset=${offset}`;
    const responseHttp = await fetch(searchEndpoint);
    const responseJson = await responseHttp.json();
    let gifObjects = responseJson.data;
    let verMas = document.getElementById('verMas');
    try {
        if(gifObjects.length !== 0){
            gifsContainer.classList.remove("noResultsDistribution");
            verMas.classList.remove('hidden');
            printGifs(gifObjects, gifsContainer, 12);
        }else{
            throw new Error();
        }
    } catch (error) {
        let noResultsImage= document.createElement("img");
        noResultsImage.src = "./../src/img/home/icon-busqueda-sin-resultado.svg";
        let noResultsMessage = document.createElement("h3");
        noResultsMessage.textContent = "Intenta con otra búsqueda.";
        noResultsMessage.classList.add("noResultsMessage");
        gifsContainer.classList.add('noResultsDistribution');
        verMas.classList.add('hidden');
        gifsContainer.appendChild(noResultsImage);
        gifsContainer.appendChild(noResultsMessage);
    }  
}

//Busqueda por input, apretando en el icono de busqueda o PRESIONANDO ENTER teniendo en cuenta el input secundario para que contengan el mismo.

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
            searchIcon.src = "./../src/img/icons/header/close.svg";
        }else if(input.value !== "" && body.className.includes("night--style")){
            searchIcon.src = "./../src/img/icons/header/close-modo-noct.svg";
        }
        
        else if(input.value === "" && !body.className.includes("night--style")){
            searchIcon.src = "./../src/img/icons/home-main/icon-search.svg";
        }else if(input.value === "" && body.className.includes("night--style")){
            searchIcon.src = "./../src/img/icons/home-main/icon-search-modo-noct.svg";
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
            searchIcon.src = "./../src/img/icons/home-main/icon-search.svg";
        }else{
            searchIcon.src = "./../src/img/icons/home-main/icon-search-modo-noct.svg";
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
            iconSearchSugerencia.src = "./../src/img/icons/home-main/white-search-icon-png-18.png";
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

//CONDICIONALES
if(body.className.includes("night--style")){
    nightClass(busquedaMain);
    nightBorders(searchContainer);
    searchIcon.setAttribute("src", "./../src/img/icons/home-main/icon-search-modo-noct.svg");
    verMas.src = "./../src/img/icons/favoritos-main/ver+-modo-noc.svg";
}

//EVENTOS
nightModeButton.addEventListener("click",() =>{
    nightClass(busquedaMain);
    nightBorders(searchContainer);
    
    if(body.className.includes("night--style")){
        searchIcon.setAttribute("src", "./../src/img/icons/home-main/icon-search-modo-noct.svg");
        verMas.src = "./../src/img/icons/favoritos-main/ver+-modo-noc.svg";

    }else{
        searchIcon.setAttribute("src", "./../src/img/icons/home-main/icon-search.svg");
        verMas.src = "./../src/img/icons/favoritos-main/ver-mas.svg";
    }
});

hover(verMas,"./../src/img/icons/favoritos-main/ver-mas-hover.svg","./../src/img/icons/favoritos-main/ver-mas.svg");

Nighthover(verMas, "./../src/img/icons/favoritos-main/ver+hover-modo-noc.svg", "./../src/img/icons/favoritos-main/ver+-modo-noc.svg");

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

