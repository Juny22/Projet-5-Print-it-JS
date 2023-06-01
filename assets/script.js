const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideIndex = 0;
const dotsNumber = slides.length;

const PreviousLeft = document.getElementById("left");
PreviousLeft.addEventListener("click", function (e) {
  e.preventDefault();

  const previousIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : dotsNumber - 1;
  const previousSlide = slides[previousIndex];

  const currentSlideImage = document.getElementById("currentSlide");
  const currentSlideTitle = document.getElementById("currentSlideTitle");
  currentSlideImage.src = "./assets/images/slideshow/" + previousSlide.image;
  currentSlideTitle.innerHTML = previousSlide.tagLine;

  console.log("Previous Image", PreviousLeft);

  slideIndex = previousIndex;
  initDots();
});

const NextRight = document.getElementById("right");
NextRight.addEventListener("click", function (e) {
  e.preventDefault();

  const nextIndex = slideIndex + 1 < dotsNumber ? slideIndex + 1 : 0;
  const nextSlide = slides[nextIndex];

  const currentSlideImage = document.getElementById("currentSlide");
  const currentSlideTitle = document.getElementById("currentSlideTitle");
  currentSlideImage.src = "./assets/images/slideshow/" + nextSlide.image;
  currentSlideTitle.innerHTML = nextSlide.tagLine;

  console.log("Next Image", NextRight);

  slideIndex = nextIndex;
  initDots();
});

function initDots() {
  const dotsDiv = document.getElementById("dots");
  let dotsDivHtmlContent = "";
  for (let i = 0; i < dotsNumber; i++) {
    let className = "dot";
    if (i === slideIndex) {
      className += " dot_selected";
    }
    dotsDivHtmlContent += '<div class="' + className + '"></div>';
  }
  dotsDiv.innerHTML = dotsDivHtmlContent;
}

initDots();
