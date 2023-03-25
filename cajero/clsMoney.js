/*
ejercicios:
-poner imagenes en los billetes
-acomodar caja para no tener que recargar hasta que
 se quede sin dinero.
*/

class money{
    constructor(price, amount){
        this.price = price;
        this.amount = amount;
    }
}

function giveMoney(){
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
        result.innerHTML = "No tengo esa cantidad";
    }
    else{
        for(var i of arrayObtained){
            if(i.amount > 0){
                result.innerHTML += i.amount + " billetes de: $" + i.price + "<hr/>";
            }
        }
    }
}
var arrayMoney =[];//genera el array de objetos
var arrayObtained = [];//array de dinero obtenido

arrayMoney.push(new money(100,10));
arrayMoney.push(new money(50,10));
arrayMoney.push(new money(20,30));
arrayMoney.push(new money(10,20));

var div = 0;
var amountObtained = 0;

var result = document.getElementById("result");
var btnExtraer = document.getElementById("btnExtraer");
btnExtraer.addEventListener("click", giveMoney);