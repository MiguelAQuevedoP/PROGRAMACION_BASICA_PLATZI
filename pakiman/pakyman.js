var images = [];
images["Sra. Cow"] = "vaca.png";
images["Bartolito"] = "pollo.png";
images["Dr. Tocino"] = "cerdo.png";

var colection = [];

colection.push(new Pakyman("Sra. Cow", 100, 30));
colection.push(new Pakyman("Bartolito", 80, 50));
colection.push(new Pakyman("Dr. Tocino", 120, 40));

for(var i of colection){
    i.view();
}
/*
cow.view();
chicken.view();
pig.view();
*/