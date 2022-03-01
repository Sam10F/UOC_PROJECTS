const peliculaCnt = document.getElementById('pelicula');
const videoIframe = document.getElementById("videoIframe");
const playButton = document.getElementById("playButton");

peliculaCnt.addEventListener("click", () => { 
    playButton.style.display = "none";
    videoIframe.setAttribute("src", videoIframe.dataset.trailer + "?autoplay=1&mute=1&enablejsapi=1");
})