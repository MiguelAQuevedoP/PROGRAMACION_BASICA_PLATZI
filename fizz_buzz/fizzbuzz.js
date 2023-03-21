var user = prompt("Cuantos numeros deseas analizar?");

for(var i=0; i<= parseInt(user); i++){
    numSelected = false;
    if(numDivisible(i, 3)){
        document.write("fizz");
    }
    if(numDivisible(i, 5)){
        document.write("buzz");
    }
    if(!numDivisible(i, 3) && !numDivisible(i, 5)){
        document.write(i);
    }
    document.write("<br/>");
}
function numDivisible(numerador, divisor){
    if(numerador % divisor == 0){
        return true;
    }else{
        return false;
    }
}