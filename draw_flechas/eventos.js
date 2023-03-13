var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", drawKeyboard);
var frame = document.getElementById("drawArea");
var paper = frame.getContext("2d");
var x = 150;
var y = 150;

//guia central del canva
drawLine("red", x-1, y-1, x+1, y+1, paper);

function drawLine(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}

function drawKeyboard(event){
    var c = "black";
    var move = 10;
    console.log("codigo de tecla: "+event.keyCode);
    switch(event.keyCode){
        case teclas.UP:
            drawLine(c, x, y, x, y-move, paper);
            console.log("color: "+c+
            "\nx: "+ x +
            "\ny: "+ y);
            y = y-move;
        break;
        case teclas.DOWN:
            drawLine(c, x, y, x, y+move, paper);
            console.log("color: "+c+
            "\nx: "+ x +
            "\ny: "+ y);
            y = y+move;
        break;
        case teclas.LEFT:
            drawLine(c, x, y, x-move, y, paper);
            console.log("color: "+c+
            "\nx: "+ x +
            "\ny: "+ y);
            x = x-move;
        break;
        case teclas.RIGHT :
            drawLine(c, x, y, x+move, y, paper);
            console.log("color: "+c+
            "\nx: "+ x +
            "\ny: "+ y);
            x = x+move;
        break;
    }
}