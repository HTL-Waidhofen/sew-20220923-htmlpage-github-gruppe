function displayGallery(){
document.getElementById("p1").innerHTML=FileReader.readAsText("gallery.html");
console.log("p1Debug");}
function displayDesc(){
document.getElementById("p2").innerHTML=FileReader.readAsText("desc.html");}