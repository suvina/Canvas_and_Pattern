window.onload = init;

function init() {
    
var canvas = document.getElementById('testCanvas');
var context = canvas.getContext('2d');
// finding the center of the canvas
centerX = canvas.width / 2;
centerY = canvas.height / 2;

// beginning the path
context.beginPath();
creating a path with red and blue alternate color
context.arc(centerX,centerY,200,0,2*Math.PI,true);
context.fillStyle="red";
context.fill();
//path closed
context.closePath();


context.beginPath();
context.arc(centerX,centerY,150,0,2*Math.PI,false);
context.fillStyle="blue"

context.fill();
context.beginPath();
context.fillStyle="red";
context.arc(centerX,centerY,100,0,2*Math.PI,true);
context.fill();
context.closePath();


context.beginPath();
context.fillStyle="blue";
context.arc(centerX,centerY,50,0,2*Math.PI,false);
context.fill();
context.closePath();
}







