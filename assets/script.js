const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideIndex= 0;
const dotsNumber = slides.length;

const leftArrow = window.document.getElementById("left");
leftArrow.addEventListener("click", function (e) {
	e.preventDefault();

	const previousIndex = slideIndex - 1 < dotsNumber ? slideIndex - 1 : 0;
	const previousSlide = slides[previousIndex];

	const currentSlideImage = window.document.getElementById("currentSlide");
	const currentSlideTitle = window.document.getElementById("currentSlideTitle");
	currentSlideImage.src = "./assets/images/slideshow/" + previousSlide.image;
	currentSlideTitle.innerHTML = previousSlide.tagLine;

	console.log("click on left arrow", leftArrow);

	slideIndex = previousIndex;
})

const rightArrow = window.document.getElementById("right");
rightArrow.addEventListener("click", function (e) {
	e.preventDefault();

	const nextIndex = slideIndex + 1 < dotsNumber ? slideIndex + 1 : 0;
	const nextSlide = slides[nextIndex];

	const currentSlideImage = window.document.getElementById("currentSlide");
	const currentSlideTitle = window.document.getElementById("currentSlideTitle");
	currentSlideImage.src = "./assets/images/slideshow/" + nextSlide.image;
	currentSlideTitle.innerHTML = nextSlide.tagLine;

	console.log("click on right arrow", rightArrow);

	slideIndex = nextIndex;
})
