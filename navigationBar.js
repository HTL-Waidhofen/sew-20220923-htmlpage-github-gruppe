let fr;
function initialization(){

}
function displayGallery(){
let fr=new FileReader();
fr.onload=function(){
                document.getElementById('output')
                        .textContent=fr.result;
            }
document.getElementById("p1").innerHTML=fr.readAsText("gallery.html");
console.log("p1Debug");}
function displayDesc(){
document.getElementById("p2").innerHTML=FileReader.readAsText("desc.html");}