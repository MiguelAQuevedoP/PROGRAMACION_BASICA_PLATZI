var user = prompt("Cuantos numeros deseas analizar?");//prompt is like a alert but this may obtain data
/*
the program write "fizz" if the number may be divisible by tree,
write "buzz" if is divisible by five and fizzbuzz if is divisible by tree and five
*/
for(var i=0; i<= parseInt(user); i++){
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
//this function is for know if a number is divisible
function numDivisible(numerador, divisor){
    if(numerador % divisor == 0){
        return true;
    }else{
        return false;
    }
}