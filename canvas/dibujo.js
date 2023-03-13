var d = document.getElementById("cDibujo");
var lienzo = d.getContext("2d");
var c = "green";
//Exterior
drawLines(c,1,1,1,299);
drawLines(c,1,1,299,1);
drawLines(c,299,1,299,299);
drawLines(c,299,299,1,299);
/*Ojo izquierdo
drawLines(c,50,150,50,75);
drawLines(c,50,75,125,75);
drawLines(c,125,75,125,150);
drawLines(c,125,150,50,150);
interior ojo izquierdo
drawLines(c,90,150,90,115);
drawLines(c,90,115,125,115);*/
//relleno
for(i=75;i<150;i++){
    drawLines(c,50,i,125,i);
}
/*ojo derecho
drawLines(c,250,150,250,75);
drawLines(c,250,75,175,75);
drawLines(c,175,75,175,150);
drawLines(c,175,150,250,150);
interior ojo derecho
drawLines(c,210,150,210,115);
drawLines(c,175,115,210,115);*/
//relleno
for(i=75;i<150;i++){
    drawLines(c,175,i,250,i);
}
/*boca
drawLines(c,125,150,210,150);
drawLines(c,125,150,125,185);
drawLines(c,175,150,175,185);
drawLines(c,125,185,90,185);
drawLines(c,175,185,210,185);
drawLines(c,90,185,90,299);
drawLines(c,210,185,210,300);
drawLines(c,125,299,125,265);
drawLines(c,175,299,175,265);
drawLines(c,125,265,175,265);*/
//relleno boca
for(i=150;i<185;i++){
    drawLines(c,125,i,175,i);
}
for(i=185;i<265;i++){
    drawLines(c,90,i,210,i);
}
for(i=185;i<300;i++){
    drawLines(c,90,i,125,i);
}
for(i=185;i<300;i++){
    drawLines(c,175,i,210,i);
}

//uso de funciones
function drawLines(color,xi,yi,xf,yf){
    lienzo.strokeStyle = color;
    lienzo. moveTo (xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}