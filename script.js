var css =document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var randomButton = document.querySelector(".randoms");

// console.log(body);
// console.log(color1);
// console.log(color2);
// console.log(Math.floor(Math.random()*16777215).toString(16));
setGradient();
function setGradient(){
	body.style.background = "linear-gradient(to right," +color1.value + ","+ color2.value+")";
	css.textContent = body.style.background + ";";
}

function randomColor(){
	color1.value = "#" +Math.random().toString(16).slice(2, 8).toUpperCase();
	color2.value = "#" +Math.random().toString(16).slice(2, 8).toUpperCase();
	setGradient();
}
randomButton.addEventListener("click",randomColor);
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);