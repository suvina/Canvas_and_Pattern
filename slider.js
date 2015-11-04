window.onload = init;

// canvas and context variables
var canvas;
var ctx;

// center of the pattern
var cenx, ceny;


function init() {
    
        canvas = document.getElementById("testCanvas");
        ctx = canvas.getContext("2d");

        cenx = canvas.width / 2;
        ceny = canvas.height / 2;
  
        // draw the initial pattern
        drawPattern();
}


// called whenever the slider value changes
function drawPattern() {
  
var red="#f00";
var blue="#0000FF";
ctx.clearRect(0, 0, canvas.width, canvas.height);
// bandwith taken from the html page through the slider
var bw = document.getElementById("bandwidth").value;
document.getElementById("show").innerHTML=bw;


for (i=cenx; i>0; i=i-bw){
ctx.beginPath();
ctx.fillStyle = red;    
ctx.arc(cenx, ceny, i, 0, 2 * Math.PI, true);
 
ctx.fill();
ctx.beginPath();
ctx.fillStyle = blue;    
ctx.arc(cenx, ceny, i-bw, 0, 2 * Math.PI, true);
 
ctx.fill();
i=i-bw;
}
}

