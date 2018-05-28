var oldDimMasterModal = document.getElementById("oldDimMasterModal");
var oldDimMasterContainer = document.getElementById("oldDimMasterContainer");
var oldDimMasterClose = document.getElementById("oldDimMasterClose");

oldDimMasterContainer.onclick = function(){
  oldDimMasterModal.style.display = "block";
}
oldDimMasterClose.onclick = function(){
  oldDimMasterModal.style.display = "none";
}
window.onclick = function(event) {
  if(event.target == oldDimMasterModal){
    oldDimMasterModal.style.display = "none";
  }
}
