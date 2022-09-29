function JanRead(string fileName){
let fileReader=new FileReader();
fileReader.onload=function(){
document.getElementById('output')
.textContent=fileReader.result;}
return fileReader.readAsText(fileName);
}
function displayGallery(){ 
document.getElementById("p1").innerHTML=JanRead("gallery.html");
console.log("p1Debug");}
function displayDesc(){
document.getElementById("p2").innerHTML=FileReader.readAsText("desc.html");}
