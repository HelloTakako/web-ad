var FLOWER1=document.getElementById("img1");
var FLOWER2=document.getElementById("img2");
var FLOWER3=document.getElementById("img3");
var FLOWER4=document.getElementById("img4");
var wrap = document.getElementsByClassName("wrapper");
var box = document.getElementById("div1");

function m(e){    
        FLOWER1.style.left=e.pageX/10 + 200+ "px";
        FLOWER1.style.top=e.pageY/10 + 90 + "px";
        FLOWER2.style.left=e.pageX/50 + "px";
        FLOWER2.style.top=e.pageY/50 + 90 + "px";
        FLOWER3.style.right=e.pageX/100 + "px";
        FLOWER3.style.top=e.pageY/100 + 130 + "px";
        FLOWER4.style.right=e.pageX/30 + 300 + "px";
        FLOWER4.style.top=e.pageY/30 + 190 + "px";
}

document.addEventListener("mousemove", m);

if (box.contains(dragon)) {
        console.log(1);
        flowerPop(); 
}
function flowerPop(){
        TweenMax.to(FLOWER1, 0.5, {opacity:0,scale:0,ease:Bounce.easeOut});
        TweenMax.to(FLOWER2, 1, {opacity:0,scale:0,ease:Bounce.easeOut});
        TweenMax.to(FLOWER3, 2, {opacity:0,scale:0,ease:Bounce.easeOut});
        TweenMax.to(FLOWER4, 1.5, {opacity:0,scale:0,ease:Bounce.easeOut});
}

//
// drag and drop (https://www.w3schools.com/html/html5_draganddrop.asp)
//
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  flowerPop();  
}
