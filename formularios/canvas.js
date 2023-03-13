var txtLineas =  document.getElementById("txtLineas");
var txtSize = document.getElementById("txtSize");
var btn = document.getElementById("btn");
var d = document.getElementById("cDibujo");
var lienzo = d.getContext("2d");
btn.addEventListener("click", drawForClick);


function drawLines(color,xi,yi,xf,yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo. moveTo (xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}
function drawForClick(){
    var lineas = parseInt(txtLineas.value);
    var drawWidth = d.width = parseInt(txtSize.value);
    var drawHeight = d.height = parseInt(txtSize.value);
    var l = 0;
    var centro = drawHeight/2;
    var yi,xf,xi,yf;
    var opHorizontal = (parseInt(drawWidth)/lineas);
    var opVertical = (parseInt(drawHeight)/lineas);
    while(l < lineas){
        xi = (centro/lineas)*l;
        yf = centro+xi;
        drawLines("blue", xi, centro, centro, yf);
        l++;
    }
    for(l=0; l<lineas;l++){
        yi = (centro/lineas)*l;
        xf = centro+yi;
        drawLines("red", centro, yi,xf, centro);
    }
    l=0;
    while(l < lineas){
        yi=centro+(centro/lineas)*l;
        xf=drawHeight-(centro/lineas)*l;
        drawLines("green", centro, yi, xf, centro);
        l++;
    }
    for(l=0; l<lineas;l++){
        xi=(centro/lineas)*l;
        yf=centro-xi;
        drawLines("purple", xi, centro, centro, yf);
    }
    /*hace lo mismo que el purple
    l=0;
    while(l < lineas){
        yi=(centro/lineas)*l;
        xf=centro-yi;
        drawLines("green", centro, yi, xf, centro);
        console.log("yi: "+ yi + "\nxf: "+xf)
        l++;
    }*/
}
