class Pakyman{
    constructor(name, live, attack){
        this.image = new Image();
        this.name = name;
        this.live = live;
        this.attack = attack;

        this.image.src = images[this.name];
    }
    view(){
        document.write("<h2>" + this.name + "</h2>");
        document.body.appendChild(this.image);
        document.write("<br/>Vida: " + this.live);
        document.write("<br/>Ataque: " + this.attack +"<hr/>");
    }
}