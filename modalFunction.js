var oldDimMasterModal = document.getElementById("oldDimMasterModal");
var oldDimMasterContainer = document.getElementById("oldDimMasterContainer");
var oldDimMasterClose = document.getElementById("oldDimMasterClose");

var mulaxyModal = document.getElementById("mulaxyModal");
var mulaxyContainer = document.getElementById("mulaxyContainer");
var mulaxyClose = document.getElementById("mulaxyClose");

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

window.onclick = function(event) {
  if(event.target == oldDimMasterModal){
    oldDimMasterModal.style.display = "none";
  }
  else if(event.target == mulaxyModal){
    mulaxyModal.style.display = "none";
  }
}
