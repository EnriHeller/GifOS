let parrafoCrearGifo = document.querySelector(".parrafo__creargifo");
let tituloCrearGifo = document.querySelector(".titulo__creargifo");
let steps = document.getElementsByClassName("step");
let botonComenzar = document.getElementById("botonComenzar");
let botonGrabar = document.getElementById("botonGrabar");
let botonFinalizar = document.getElementById("botonFinalizar");
let botonSubir = document.getElementById("botonSubir");
let cinta1 = document.getElementById("cinta1");
let cinta2 = document.getElementById("cinta2");
let camBody = document.getElementById("camBody");
let recContainer = document.getElementById("recContainer");
let videoContainer = document.querySelector(".video-container");
let timer = document.querySelector(".timer");
let repetir = document.querySelector(".repetir");
let camLight = document.querySelector(".cam-light");

let crearGifosNightSettings = function(){
    nightBorders(recContainer);
    nightBorders(botonComenzar);
    nightClass(botonComenzar);
    nightClass(parrafoCrearGifo);
    nightBordersForArray(steps);
    if(body.className.includes("night--style")){
        cinta1.src = "./../src/img/creargifo/element_cinta1-modo-noc.svg";
        cinta2.src = "./../src/img/creargifo/element_cinta2-modo-noc.svg";
        camBody.src = "./../src/img/creargifo/camara-modo-noc.png";
        pelicula.src = "./../src/img/creargifo/pelicula-modo-noc.svg";
        
    }else{
        cinta1.src = "./../src/img/creargifo/element_cinta1.svg";
        cinta2.src = "./../src/img/creargifo/element_cinta2.svg";
        camBody.src = "./../src/img/creargifo/element-camara.svg";
        pelicula.src = "./../src/img/creargifo/pelicula.svg";
    }
}

if(body.className.includes("night--style")){
    crearGifosNightSettings();
}

nightModeButton.addEventListener("click",() =>{
    crearGifosNightSettings();
});

botonComenzar.addEventListener("click", ()=>{
    botonComenzar.classList.add("hidden");
    steps[0].classList.add("stepSelection");
    tituloCrearGifo.textContent = "¿Nos das acceso a tu cámara?";
    parrafoCrearGifo.textContent = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
    getMedia();
});

let recorder;

function getMedia(){
    navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true,
    }).then(function(stream){
        videoContainer.innerHTML = "";
        const videoViewer = document.createElement("video");
        videoViewer.classList.add("videoViewer");
        videoViewer.srcObject = stream;
        videoViewer.play();
        videoContainer.appendChild(videoViewer);
        botonGrabar.classList.remove("hidden");
        steps[0].classList.remove("stepSelection");
        steps[1].classList.add("stepSelection");
        timer.classList.remove("hidden");

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
            console.log('started');
        },
        });
    });
}

let timeInterval;

botonGrabar.addEventListener("click", ()=>{
    timeInterval = setInterval(countTimer, 1000); 
    recorder.startRecording();
    botonGrabar.classList.add("hidden");
    botonFinalizar.classList.remove("hidden");
    camLight.classList.add("lightAnimation");
    cinta1.classList.add("cinta1Animation");
    cinta2.classList.add("cinta2Animation");
});

botonFinalizar.addEventListener("click", ()=>{
    clearInterval(timeInterval);
    timer.classList.add("hidden");
    recorder.stopRecording();
    repetir.classList.remove("hidden");
    botonFinalizar.classList.add("hidden");
    botonSubir.classList.remove("hidden");
    camLight.classList.remove("lightAnimation");
    cinta1.classList.remove("cinta1Animation");
    cinta2.classList.remove("cinta2Animation");
})

repetir.addEventListener("click", ()=>{
    botonGrabar.classList.remove("hidden");
    timer.textContent = "00:00:00";
    timer.classList.remove("hidden");
    repetir.classList.add("hidden");
    botonSubir.classList.add("hidden");
    totalSeconds = 0;
    recorder.reset();
});



botonSubir.addEventListener("click",()=>{
    steps[1].classList.remove("stepSelection");
    steps[2].classList.add("stepSelection");
    repetir.classList.add("hidden");
    botonSubir.classList.add("hidden");

    let form = new FormData();
    form.append("file", recorder.getBlob(),"miGifo.gif");
    let postEndPoint = `https://upload.giphy.com/v1/gifs?api_key=${apikey}`;

    let chargeGifoWindow = document.createElement("div");
    chargeGifoWindow.classList.add("charge-gifo-window");
    let chargeGifoIcon = document.createElement("img");
    chargeGifoIcon.src = "./../src/img/creargifo/loader.svg";
    chargeGifoIcon.classList.add("charge-gifo-icon");
    chargeGifoIcon.classList.add("loaderAnimation");
    let chargeGifoText = document.createElement("p");
    chargeGifoText.textContent = "Estamos subiendo tu  GIFO";

    videoContainer.appendChild(chargeGifoWindow);
    chargeGifoWindow.appendChild(chargeGifoIcon);
    chargeGifoWindow.appendChild(chargeGifoText);

    fetch(postEndPoint, {
        method: "POST",
        body: form,
    })
    .then(responseHTTP => responseHTTP.json())
    .then(responseJSON => {
        console.log("Success: ", responseJSON);
        chargeGifoIcon.classList.remove("loaderAnimation");
        chargeGifoIcon.src = "./../src/img/creargifo/check.svg";
        chargeGifoText.textContent = "GIFO subido con éxito";
        downloadMiGif = document.createElement("img");
        downloadMiGif.src = "./../src/img/icons/home-main/hoverIcons/icon-download.svg";
        chargeGifoWindow.appendChild(downloadMiGif);
        chargeGifoWindow.insertBefore(downloadMiGif, chargeGifoIcon);
        hover(downloadMiGif, 
            "./../src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
            "./../src/img/icons/home-main/hoverIcons/icon-download.svg");

        Nighthover(downloadMiGif, 
            "./../src/img/icons/home-main/hoverIcons/icon-download-hover.svg",
            "./../src/img/icons/home-main/hoverIcons/icon-download.svg");
        downloadMiGif.classList.add("download-mi-gif");

        let miGifoId = responseJSON.data.id;
        miGifoEndPoint =`https://api.giphy.com/v1/gifs/${miGifoId}?api_key=${apikey}`;
        fetch(miGifoEndPoint)
        .then(responseHTTP => responseHTTP.json())
        .then(miGifObject =>{
            misGifosArray.push(miGifObject);
            localStorage.setItem("misGifosArray", JSON.stringify(misGifosArray));
            downloadMiGif.addEventListener("click", ()=>{
                (async () => {
                    let a = document.createElement('a');
                    let response = await fetch(`${miGifObject.data.images.fixed_width.url}`);
                    let file = await response.blob();
                    a.download = 'miGIFO';
                    a.href = window.URL.createObjectURL(file);
                    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                    a.click();
                })();
            });
        });
    })
})

let totalSeconds = 0;

function countTimer() {
    totalSeconds++;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
        hour = "0"+hour;
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
        seconds = "0"+seconds;
    timer.innerHTML = hour + ":" + minute + ":" + seconds;
}