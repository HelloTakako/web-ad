const SVG1=document.getElementById("svg1");
const SVG2=document.getElementById("svg2");
const SVG3=document.getElementById("svg3");
const FLOWER1=document.getElementById("img1");
const FLOWER2=document.getElementById("img2");
const FLOWER3=document.getElementById("img3");
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
        FLOWER1.style.left=e.pageX/10 + "px";
        FLOWER1.style.top=e.pageY/10 + "px";
        FLOWER2.style.left=e.pageX/50 + "px";
        FLOWER2.style.top=e.pageY/50 + "px";
        FLOWER3.style.right=e.pageX/100 + "px";
        FLOWER3.style.top=e.pageY/100 + 40 + "px";
}

// var inner = document.getElementById('wrapper-inner');
// c2.addEventListener('mousedown', move);
// function move(e){
//     console.log(e);
//         c2.style.left = e.pageX;
//         c2.style.top = e.pageY;
// }
// function drag(e){
//     c2.style.left = e.pageX;
//     c2.style.top = e.pageY;
// }

document.addEventListener("mousemove", m);

// droppable
droppableEvent.dropzone: c1;