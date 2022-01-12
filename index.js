let num = 10;
let num2 = Math.floor(1.25);
let num3 = Math.ceil(1.25);
let num4 = Math.max(num, num2, num3);
let num5 = Math.min(num, num2, num3);
let num6 = Math.pow(10,2);
let num7 = Math.sqrt(7);
let num8 = Math.tan(7);

console.log(num+1.25)//adição
console.log(num-1)//subtração
console.log(num/1)//divisão
console.log(num*1)//multiplicação
console.log(num%1)//resto da divisão
console.log(num2)//arredonda valor para baixo
console.log(num3)//arredonda valor para cima
console.log(num4)//retorna o maior valor entre um ou mais numeros
console.log(num5)//retorna o menor valor entre um ou mais numeros
console.log(num6)//retorna a base elevada ao expoente 
console.log(num7)//retorna a raiz quadrada de um numero
console.log(num8)//retorna a tangente de um numero 

/* calcula a circunferência de um círculo com um dado raio*/
function calcularCircuferencia(radius){
    return 2 * Math.PI * radius;
}
    console.log(calcularCircuferencia(1));

calcularCircuferencia()