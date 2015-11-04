window.onload = init;

function init() {
    
var canvas = document.getElementById('testCanvas');
var ceny= canvas.height /2;
var cenx= canvas.width  /2;

var ctx = canvas.getContext("2d");
var red = "#f00";
var blue = "#0000FF";
var bw = 25;

for (i=cenx; i>0; i=i-bw){
ctx.beginPath();
ctx.fillStyle = red;
ctx.arc(cenx, ceny, i, 0, 2 * Math.PI, true);
ctx.fill();
ctx.fillStyle = blue; 
ctx.beginPath();    
ctx.arc(cenx, ceny, i-bw, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();
i=i-bw;
}
}
