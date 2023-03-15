var frame = document.getElementById("drawArea");
var paper = frame.getContext("2d");
var borderColor = "black";
var color = document.getElementById("colorSelect");
var slider = document.getElementById("slider");
let mouse = false;

console.log("valor color "+ color.value);
frame.addEventListener("mousedown", clickMouse);
frame.addEventListener("mouseup", noClickMouse);
frame.addEventListener("mousemove", drawMouse);

console.log("valor slider "+slider.value);

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

function drawMouse(){
    if(mouse == true){
        drawLine(color.value, event.layerX-1, event.layerY-1, event.layerX+1, event.layerY+1, paper);
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