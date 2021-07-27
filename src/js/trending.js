//ELEMENTOS HTML
let trending = document.getElementById("trending");
let trendingButtonLeft = document.getElementById("trendingButtonLeft");
let trendingButtonRight = document.getElementById("trendingButtonRight");
let sliderContainer = document.getElementById("sliderContainer");
let favIcons = document.getElementsByClassName("favIcon");
let downloadIcons = document.getElementsByClassName("downloadIcon");
let expandIcons = document.getElementsByClassName("expandIcon");

if(body.className.includes("night--style")){
    trendingButtonLeft.setAttribute("src","./src/img/icons/home-main/button-slider-left-md-noct.svg");
    trendingButtonRight.setAttribute("src","./src/img/icons/home-main/button-slider-right-md-noct.svg");
    nightClass3(trending);
}

//EVENTOS
nightModeButton.addEventListener("click",() =>{
    nightClass3(trending);
    if(body.className.includes("night--style")){
        trendingButtonLeft.setAttribute("src","./src/img/icons/home-main/button-slider-left-md-noct.svg");
        trendingButtonRight.setAttribute("src","./src/img/icons/home-main/button-slider-right-md-noct.svg");
    }else{
        trendingButtonLeft.setAttribute("src","./src/img/icons/home-main/button-slider-left.svg");
        trendingButtonRight.setAttribute("src","./src/img/icons/home-main/button-slider-right.svg");
    }
});

trendingButtonLeft.onclick = function(){
    sliderContainer.scrollLeft -= 790; 
}

trendingButtonRight.onclick = function(){
    sliderContainer.scrollLeft += 790 ; 
}

//HOVERS

hover(trendingButtonLeft,"./src/img/icons/home-main/button-slider-left-hover.svg","./src/img/icons/home-main/button-slider-left.svg");

Nighthover(trendingButtonLeft,
        "./src/img/icons/home-main/button-slider-left-hover.svg",
        "./src/img/icons/home-main/button-slider-left-md-noct.svg");

hover(trendingButtonRight,
        "./src/img/icons/home-main/button-slider-right-hover.svg",
        "./src/img/icons/home-main/button-slider-right.svg");

Nighthover(trendingButtonRight,
        "./src/img/icons/home-main/button-slider-right-hover.svg",
        "./src/img/icons/home-main/button-slider-right-md-noct.svg");

const trendingGifs = async(gifsContainer) =>{
    const trendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`;
    const responseHttp = await fetch(trendingEndpoint);
    const responseJson = await responseHttp.json();
    const arrayTrendings = responseJson.data;
    printGifs(arrayTrendings, gifsContainer,25);
} 
trendingGifs(sliderContainer);