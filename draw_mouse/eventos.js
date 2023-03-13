var frame = document.getElementById("drawArea");
var paper = frame.getContext("2d");
var borderColor = "black";
var btnBlack = document.getElementById("btnCBlack");
var btnBlue = document.getElementById("btnCBlue");
var btnYellow = document.getElementById("btnCYellow");
var btnWhite = document.getElementById("btnCWhite");
var slider = document.getElementById("slider");
let mouse = false;
console.log("valor slider "+slider.value);
frame.height = slider.value;
frame.width = slider.value;
frame.addEventListener("mousedown", clickMouse);
frame.addEventListener("mouseup", noClickMouse);
frame.addEventListener("mousemove", drawMouse);
btnBlack.addEventListener("click", drawMouseBlack());
btnBlue.addEventListener("click", drawMouseBlue());
btnYellow.addEventListener("click", drawMouseYellow());
btnWhite.addEventListener("click", drawMouseWhite());

//bordes de canvas
drawLine(borderColor, 1, 1, 1, frame.height-1, paper);//left vertical line
drawLine(borderColor, frame.width-1, 1, frame.width-1, frame.height-1, paper);//right vertical line
drawLine(borderColor, 1, 1, frame.width-1, 1, paper);//up horizontal line
drawLine(borderColor, 1, frame.height-1, frame.width-1, frame.height-1, paper);//down horizontal line

function clickMouse(){
    mouse = true;
}

function noClickMouse(){
    mouse = false;
}

function drawMouseBlack(){
    if(mouse == true){
        drawLine("black", event.layerX-1, event.layerY-1, event.layerX+1, event.layerY+1, paper);
    }
}
function drawMouseBlue(){
    if(mouse == true){
        drawLine("#008CBA", event.layerX-1, event.layerY-1, event.layerX+1, event.layerY+1, paper);
    }
}function drawMouseYellow(){
    if(mouse == true){
        drawLine("yellow", event.layerX-1, event.layerY-1, event.layerX+1, event.layerY+1, paper);
    }
}function drawMouseWhite(){
    if(mouse == true){
        drawLine("white", event.layerX-1, event.layerY-1, event.layerX+1, event.layerY+1, paper);
    }
}

function drawLine(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}