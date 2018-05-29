var oldDimMasterModal = document.getElementById("oldDimMasterModal");
var oldDimMasterContainer = document.getElementById("oldDimMasterContainer");
var oldDimMasterClose = document.getElementById("oldDimMasterClose");

var mulaxyModal = document.getElementById("mulaxyModal");
var mulaxyContainer = document.getElementById("mulaxyContainer");
var mulaxyClose = document.getElementById("mulaxyClose");

var colorPrismModal = document.getElementById("colorPrismModal");
var colorPrismContainer = document.getElementById("colorPrismContainer");
var colorPrismClose = document.getElementById("colorPrismClose");

var rybModal = document.getElementById("rybModal");
var rybContainer = document.getElementById("rybContainer");
var rybClose = document.getElementById("rybClose");

var boYaModal = document.getElementById("boYaModal");
var boYaContainer = document.getElementById("boYaContainer");
var boYaClose = document.getElementById("boYaClose");

var herdModal = document.getElementById("herdModal");
var herdContainer = document.getElementById("herdContainer");
var herdClose = document.getElementById("herdClose");

var coffeeMakerModal = document.getElementById("coffeeMakerModal");
var coffeeMakerContainer = document.getElementById("coffeeMakerContainer");
var coffeeMakerClose = document.getElementById("coffeeMakerClose");

var teaTeeModal = document.getElementById("teaTeeModal");
var teaTeeContainer = document.getElementById("teaTeeContainer");
var teaTeeClose = document.getElementById("teaTeeClose");

var blueModal = document.getElementById("blueModal");
var blueContainer = document.getElementById("blueContainer");
var blueClose = document.getElementById("blueClose");

var catModal = document.getElementById("catModal");
var catContainer = document.getElementById("catContainer");
var catClose = document.getElementById("catClose");

oldDimMasterContainer.onclick = function(){
  oldDimMasterModal.style.display = "block";
}
oldDimMasterClose.onclick = function(){
  oldDimMasterModal.style.display = "none";
}

mulaxyContainer.onclick = function(){
  mulaxyModal.style.display = "block";
}
mulaxyClose.onclick = function(){
  mulaxyModal.style.display = "none";
}

colorPrismContainer.onclick = function(){
  colorPrismModal.style.display = "block";
}
colorPrismClose.onclick = function(){
  colorPrismModal.style.display = "none";
}

rybContainer.onclick = function(){
  rybModal.style.display = "block";
}
rybClose.onclick = function(){
  rybModal.style.display = "none";
}

boYaContainer.onclick = function(){
  boYaModal.style.display = "block";
}
boYaClose.onclick = function(){
  boYaModal.style.display = "none";
}

herdContainer.onclick = function(){
  herdModal.style.display = "block";
}
herdClose.onclick = function(){
  herdModal.style.display = "none";
}

coffeeMakerContainer.onclick = function(){
  coffeeMakerModal.style.display = "block";
}
coffeeMakerClose.onclick = function(){
  coffeeMakerModal.style.display = "none";
}

teaTeeContainer.onclick = function(){
  teaTeeModal.style.display = "block";
}
teaTeeClose.onclick = function(){
  teaTeeModal.style.display = "none";
}

blueContainer.onclick = function(){
  blueModal.style.display = "block";
}
blueClose.onclick = function(){
  blueModal.style.display = "none";
}

catContainer.onclick = function(){
  catModal.style.display = "block";
}
catClose.onclick = function(){
  catModal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == oldDimMasterModal){
    oldDimMasterModal.style.display = "none";
  }
  else if(event.target == mulaxyModal){
    mulaxyModal.style.display = "none";
  }
  else if(event.target == colorPrismModal){
    colorPrismModal.style.display = "none";
  }
  else if(event.target == rybModal){
    rybModal.style.display = "none";
  }
  else if(event.target == boYaModal){
    boYaModal.style.display = "none";
  }
  else if(event.target == herdModal){
    herdModal.style.display = "none";
  }
  else if(event.target == coffeeMakerModal){
    coffeeMakerModal.style.display = "none";
  }
  else if(event.target == teaTeeModal){
    teaTeeModal.style.display = "none";
  }
  else if(event.target == blueModal){
    blueModal.style.display = "none";
  }
  else if(event.target == catModal){
    catModal.style.display = "none";
  }
}
/* silde show */
var blueSlideIndex = 0;
blueShowSlides(blueSlideIndex);

function bluePlusSlides(n){
  blueShowSlides(blueSlideIndex += n);
}

function blueShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("blueSlides");
  if(n >= slides.length){
    blueSlideIndex = 0;
  }
  if(n < 0){
    blueSlideIndex = 3;
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[blueSlideIndex].style.display = "block";
}

var catSlideIndex = 0;
catShowSlides(catSlideIndex);

function catPlusSlides(n){
  catShowSlides(catSlideIndex += n);
}

function catShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("catSlides");
  if(n >= slides.length){
    catSlideIndex = 0;
  }
  if(n < 0){
    catSlideIndex = 1;
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[catSlideIndex].style.display = "block";
}
