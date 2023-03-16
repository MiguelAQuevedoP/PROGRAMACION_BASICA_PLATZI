var frame = document.getElementById("drawArea");
var paper = frame.getContext("2d");
var borderColor = "black";
var color = document.getElementById("colorSelect");
var txtWidth = document.getElementById("txtWidth");
var txtHeight = document.getElementById("txtHeight");
var btnSize = document.getElementById("btnChangeSize");
var x;
var y;
let mouse = false;

btnSize.addEventListener("click", changeSizeCanva);
frame.addEventListener("mousemove", drawMouse);
drawLine(color, x-1, y-1, x+1, y+1, paper);
//bordes de canvas
drawLine(borderColor, 1, 1, 1, frame.height-1, paper);//left vertical line
drawLine(borderColor, frame.width-1, 1, frame.width-1, frame.height-1, paper);//right vertical line
drawLine(borderColor, 1, 1, frame.width-1, 1, paper);//up horizontal line
drawLine(borderColor, 1, frame.height-1, frame.width-1, frame.height-1, paper);//down horizontal line

function drawMouse(event){
    if(event.buttons == 1){
        drawLine(color.value, x, y, event.offsetX, event.offsetY, paper);
    }
    x = event.offsetX
    y = event.offsetY
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

function changeSizeCanva(){
    console.log("tamaño Height: "+ txtHeight.value);
    console.log("tamaño width: "+txtWidth.value);
    frame.width = parseInt(txtWidth.value);
    frame.height = parseInt(txtHeight.value);
    drawLine(borderColor, 1, 1, 1, frame.height-1, paper);//left vertical line
    drawLine(borderColor, frame.width-1, 1, frame.width-1, frame.height-1, paper);//right vertical line
    drawLine(borderColor, 1, 1, frame.width-1, 1, paper);//up horizontal line
    drawLine(borderColor, 1, frame.height-1, frame.width-1, frame.height-1, paper);//down horizontal line
}