var frameVilla = document.getElementById("canvasVilla");
var paper = frameVilla.getContext("2d");

var background = {
    url: "tile.png",
    loadOk: false
};
var cow = {
    url: "vaca.png",
    loadOk: false
};
var pig = {
    url: "cerdo.png",
    loadOk: false
};
var chicken = {
    url: "pollo.png",
    loadOk: false
};

var amountCow = random(0,20);
var amountPig = random(0,20);
var amountChicken = random(0,20);

background.object = new Image();
background.object.src = background.url;
background.object.addEventListener("load", loadBackground);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loadCow);

pig.object = new Image();
pig.object.src = pig.url;
pig.object.addEventListener("load", loadPig);

chicken.object = new Image();
chicken.object.src = chicken.url;
chicken.object.addEventListener("load", loadChicken);

function loadBackground(){
    background.loadOk = true;
    draw();
}
function loadCow(){
    cow.loadOk = true;
    draw();
}
function loadPig(){
    pig.loadOk = true;
    draw();
}
function loadChicken(){
    chicken.loadOk = true;
    draw();
}


function draw(){
    if(background.loadOk){
        paper.drawImage(background.object, 0, 0);
    }
    for (var i=0;i<amountCow;i++){
        if(cow.loadOk){
            paper.drawImage(cow.object, random(0, 7)*59, random(0, 7)*59);
        }
    }
    for (var i=0;i<amountPig;i++){
        if(pig.loadOk == true){
            paper.drawImage(pig.object, random(0, 7)*59, random(0, 7)*59);
        }
    }
    for (var i=0; i<amountChicken; i++){
        if(chicken.loadOk == true){
            paper.drawImage(chicken.object, random(0, 7)*59, random(0, 7)*59);
        }
    }
    
}

function random(numMin, numMax){
    var result = Math.floor(Math.random()*(numMax - numMin +1)) + numMin;
    return result;
}