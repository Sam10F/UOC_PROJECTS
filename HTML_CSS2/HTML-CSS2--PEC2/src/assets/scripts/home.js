const myCarousel = document.getElementById("MainSlider");
myCarousel.addEventListener("slide.bs.carousel", function () {
  let tweets = document.getElementsByClassName("tweet");
  let intervalTime = 700;

  tweets = Array.from(tweets).sort((a, b) => {
    return a.dataset.order - b.dataset.order;
  });

  Array.from(tweets).forEach((tweet) => {
    tweet.style.opacity = "0";
    setTimeout(function () {
      tweet.style.opacity = "1";
    }, intervalTime);
    intervalTime += 500;
  });
});
