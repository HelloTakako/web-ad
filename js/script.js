const FLOWER1=document.getElementById("img1");
const FLOWER2=document.getElementById("img2");
const FLOWER3=document.getElementById("img3");
const FLOWER4=document.getElementById("img4");
const circle = document.getElementsByClassName("circle");
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');


// TweenMax.from(c2, 0.5, {
//     opacity:0,
//     scale:0,
//     ease:Bounce.easeOut
// });



// TweenMax.from(SVG1, 0.5, {
//     opacity:0,
//     scale:0,
//     ease:Bounce.easeOut
// });


var wrap = document.getElementsByClassName("wrapper");
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

var inner = document.getElementById('wrapper-inner');

document.addEventListener("mousemove", m);

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
}