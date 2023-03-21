var frameVilla = document.getElementById("canvaVilla"); //trae el canva el html
var paper = frameVilla.getContext("2d");//genera el contexto del canva 2d
document.addEventListener("keydown", drawKeyboard);//atiende al evento de presionar la tecla
var center = 210;// como la imagen es de 80x80 el centro es 210 para el canva de 500x500
var x = center;//inicializo de manera global la posicion x & y
var y = center;

//para tener un mejor orden de las teclas de crea el texto de formato json con el codigo de las teclas
var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//se crea el background, chicken y cow para despues pintarlos en el canva
var background = {
    url: "tile.png",
    loadOk: false
};
var chicken = {
    url: "pollo.png",
    loadOk: false
};
var cow = {
    url: "vaca.png",
    loadOk: false
};
//se inician como imagenes para el load
background.object = new Image();
background.object.src = background.url;
background.object.addEventListener("load", loadBackground);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loadCow);

chicken.object = new Image();
chicken.object.src = chicken.url;
chicken.object.addEventListener("load", loadChicken);
//funcion que afirma que estan cargados lo archivos background y chicken
function loadBackground(){
    background.loadOk = true;
    draw();
}
function loadChicken(){
    chicken.loadOk = true;
    draw(250, 250);
}
function loadCow(){
    cow.loadOk = true;
    cow.x = [];
    cow.y = [];
    for (var i=0; i<amountCow; i++){
        cow.x[i] = random(0, 7)*59;
        cow.y[i] = random(0, 7)*59;
    }
    draw();
}

var amountCow = random(0,20);//var with the range of cows

// dibuja las imagenes solo si están cargadas
function draw(x,y){
    if(loadBackground){
        paper.drawImage(background.object, 0, 0);
    }
    for (var i=0; i<amountCow; i++){
        if(cow.loadOk){
            paper.drawImage(cow.object, cow.x[i], cow.y[i]);
        }
    }
    if(loadChicken){
        paper.drawImage(chicken.object, x, y);
    }
}

//funcion para atender al evento de presionar las teclas y mueve en 5px el objeto chicken
function drawKeyboard(event){
    var move = 5;
    console.log("codigo de tecla: "+ event.keyCode);
    switch(event.keyCode){
        case keys.UP:
            draw(x,y-move);
            y = y-move;
            if(y == -40){
                y = 540;
            }
        break;
        case keys.DOWN:
            draw(x,y+move);
            y = y+move;
            if(y == 540){
                y = -40;
            }
        break;
        case keys.LEFT:
            draw(x-move,y);
            x = x-move;
            if(x == -40){
                x = 540;
            }
        break;
        case keys.RIGHT :
            draw(x+move,y);
            x = x+move;
            if(x == 540){
                x = -40;
            }
        break;
    }
}

function random(numMin, numMax){
    var result = Math.floor(Math.random()*(numMax - numMin +1)) + numMin;
    return result;
}