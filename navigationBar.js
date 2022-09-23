function JanRead(string fileName){
let fr=new FileReader();
fr.onload=function(){
document.getElementById('output')
.textContent=fr.result;}
return fr.readAsText(fileName);
}
function displayGallery(){ 
document.getElementById("p1").innerHTML=JanRead("gallery.html");
console.log("p1Debug");}
function displayDesc(){
document.getElementById("p2").innerHTML=FileReader.readAsText("desc.html");}