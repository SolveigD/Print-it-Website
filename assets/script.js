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

const images = slides.map(slide => slide.image);
const tagLine = slides.map(slide => slide.tagLine)

let baliseImage = document.querySelector(".banner-img")
let elementsDot = document.querySelectorAll(".dot")
let tableauDot = Array.from(elementsDot)
let paraSlide = document.querySelector("#banner p")

let index = 0
tableauDot[0].classList.add("dot_selected")
baliseImage.src = "./assets/images/slideshow/" + images[0]



let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", ()=>{
	console.log("click sur fleche gauche")

	index --

	if (index < 0) {
		index = images.length - 1;
		tableauDot[0].classList.remove("dot_selected")
	} else {
		tableauDot[index+1].classList.remove("dot_selected")
	}

	console.log(index);

	baliseImage.src = "./assets/images/slideshow/" + images[index]
	paraSlide.innerHTML = tagLine[index]
	tableauDot[index].classList.add("dot_selected")
	

})


let arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () =>{
	console.log("click sur fleche droite")

	index ++

	if (index === images.length) {
		index = 0;
		tableauDot[images.length-1].classList.remove("dot_selected")
	}

	baliseImage.src = "./assets/images/slideshow/" + images[index]
	paraSlide.innerHTML = tagLine[index]
	tableauDot[index].classList.add("dot_selected")
	tableauDot[index -1].classList.remove("dot_selected")

	

		

})


