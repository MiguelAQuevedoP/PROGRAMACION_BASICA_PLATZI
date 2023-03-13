var d = document.getElementById("cDibujo");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi,xf,xi,yf;

while(l < lineas){
    drawLines("blue", 300, l*10, l*10, 0);
    l++;
}
for(l=0; l<lineas;l++){
    drawLines("red", 0, l*10, l*10, 300);
}
l=0;
while(l < lineas){
    yf=10*l;
    xi=300-yf;
    drawLines("green", xi, 0, 0, yf);
    l++;
}
for(l=0; l<lineas;l++){
    xi=10*l;
    yf=300-xi;
    drawLines("purple", xi, 300, 300, yf);
    console.log("valor de l: "+l);
}
//uso de funciones
function drawLines(color,xi,yi,xf,yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo. moveTo (xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}