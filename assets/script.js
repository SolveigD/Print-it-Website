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

console.log(paraSlide)
let index = 0


console.log(tableauDot)

let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", ()=>{
	console.log("click sur fleche gauche")
	index = (index - 1) % slides.length
	baliseImage.src = "./assets/images/slideshow/" + images[index]
	paraSlide.innerHTML = tagLine[index]
	
	tableauDot[index - 1].classList.add("dot_selected")
	tableauDot[index].classList.remove("dot_selected")
	
})

tableauDot[index].classList.add("dot_selected")

let arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () =>{
	console.log("click sur fleche droite")
	console.log(slides.length)
	index = (index + 1) % slides.length
	baliseImage.src = "./assets/images/slideshow/" + images[index]
	paraSlide.innerHTML = tagLine[index]
	
	tableauDot[index].classList.add("dot_selected")
	tableauDot[index -1].classList.remove("dot_selected")
	
	
	


})


