class money{
    constructor(price, amount){
        this.image = new Image();
        this.price = price;
        this.amount = amount;
    }
    view(){
        document.body.appendChild(this.image);
    }
}

function giveMoney(){
    var arrayObtained = [];//array de dinero obtenido
    var txtMoney = document.getElementById("txtMoney");
    amountMoney = parseInt(txtMoney.value);
    for (var i = 0; i < arrayMoney.length; i++){
        if(amountMoney > 0){
            div = Math.floor(amountMoney / arrayMoney[i].price);
            if(div > arrayMoney[i].amount){
                amountObtained = arrayMoney[i].amount;
            }
            else{
                amountObtained = div;
            }
            arrayObtained.push(new money(arrayMoney[i].price, amountObtained));
            amountMoney = amountMoney - (arrayMoney[i].price * amountObtained);
            arrayMoney[i].amount = arrayMoney[i].amount - amountObtained;
        }
    }
    if(amountMoney > 0){
        result.innerHTML += "Cajero sin el dinero suficiente o sin billetes de esa denominación"
    }
    else{
        for(var b of arrayObtained){
            if(b.amount > 0){
                result.innerHTML += b.amount + " billetes de: <br/>"
                +"<img src=" + images[b.price] + " /><br/>";
            }
        }
    }
    result.innerHTML += "<hr/>";
    console.log(arrayMoney);
    
}
var arrayMoney = [];//genera el array de objetos
arrayMoney.push(new money(100,10));
arrayMoney.push(new money(50,10));
arrayMoney.push(new money(20,20));
arrayMoney.push(new money(10,20));

var images = [];
images[100] = "100.png";
images[50] = "50.png";
images[20] = "20.png";
images[10] = "10.png";

var div = 0;
var amountObtained = 0;

var result = document.getElementById("result");
var btnExtraer = document.getElementById("btnExtraer");
btnExtraer.addEventListener("click", giveMoney);