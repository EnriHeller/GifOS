//ELEMENTOS HTML
let trending = document.getElementById("trending");
let trendingButtonLeft = document.getElementById("trendingButtonLeft");
let trendingButtonRight = document.getElementById("trendingButtonRight");
let sliderContainer = document.getElementById("sliderContainer");
let favIcons = document.getElementsByClassName("favIcon");
let downloadIcons = document.getElementsByClassName("downloadIcon");
let expandIcons = document.getElementsByClassName("expandIcon");

if(body.className.includes("night--style")){
    trendingButtonLeft.setAttribute("src","/src/img/icons/home-main/button-slider-left-md-noct.svg");
    trendingButtonRight.setAttribute("src","/src/img/icons/home-main/button-slider-right-md-noct.svg");
    nightClass3(trending);
}

//EVENTOS
nightModeButton.addEventListener("click",() =>{
    nightClass3(trending);
    if(body.className.includes("night--style")){
        trendingButtonLeft.setAttribute("src","/src/img/icons/home-main/button-slider-left-md-noct.svg");
        trendingButtonRight.setAttribute("src","/src/img/icons/home-main/button-slider-right-md-noct.svg");
    }else{
        trendingButtonLeft.setAttribute("src","/src/img/icons/home-main/button-slider-left.svg");
        trendingButtonRight.setAttribute("src","/src/img/icons/home-main/button-slider-right.svg");
    }
});

trendingButtonLeft.onclick = function(){
    sliderContainer.scrollLeft -= 790; 
    console.log(sliderContainer)
}

trendingButtonRight.onclick = function(){
    sliderContainer.scrollLeft += 790 ; 
}

//HOVERS

for(icon of favIcons){
    hover(icon,
        "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
        "/src/img/icons/home-main/hoverIcons/icon-fav.svg");

    Nighthover(icon,
            "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
            "/src/img/icons/home-main/hoverIcons/icon-fav.svg");

    activeClass(icon, 
        "/src/img/icons/home-main/hoverIcons/icon-fav-active.svg", 
        "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg",
        "/src/img/icons/home-main/hoverIcons/icon-fav.svg",
        "/src/img/icons/home-main/hoverIcons/icon-fav-hover.svg");
}

for(icon of downloadIcons){
    hover(icon, 
        "/src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
        "/src/img/icons/home-main/hoverIcons/icon-download.svg");
    Nighthover(icon, 
        "/src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
        "/src/img/icons/home-main/hoverIcons/icon-download.svg");
}

for(icon of expandIcons){
    hover(icon, "/src/img/icons/home-main/hoverIcons/icon-trash-hover.svg",
    "/src/img/icons/home-main/hoverIcons/icon-trash-normal.svg");

    Nighthover(icon,
        "/src/img/icons/home-main/hoverIcons/icon-trash-hover.svg",
        "/src/img/icons/home-main/hoverIcons/icon-trash-normal.svg");
}

hover(trendingButtonLeft,"/src/img/icons/home-main/button-slider-left-hover.svg","/src/img/icons/home-main/button-slider-left.svg");

Nighthover(trendingButtonLeft,
        "/src/img/icons/home-main/button-slider-left-hover.svg",
        "/src/img/icons/home-main/button-slider-left-md-noct.svg");

hover(trendingButtonRight,
        "/src/img/icons/home-main/button-slider-right-hover.svg",
        "/src/img/icons/home-main/button-slider-right.svg");

Nighthover(trendingButtonRight,
        "/src/img/icons/home-main/button-slider-right-hover.svg",
        "/src/img/icons/home-main/button-slider-right-md-noct.svg");

