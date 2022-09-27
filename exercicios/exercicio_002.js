/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para
dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a alutra de um adulto mostre sua condição
de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 26 e 30 acima do peso;
- Entre 31 e 40 obeso;
- Acima de 40 obesidade grave;
*/

let peso = 65;
let altura = 1.71;
calcImc = peso / Math.pow(altura, 2);

if(calcImc < 18.5){
    console.log('Abaixo de 18.5 abaixo do peso');
}else if(calcImc >= 18.5 && calcImc < 25){
    console.log('Seu peso é: ', calcImc.toFixed(2), ', Entre 18.5 e 25 peso normal');
}else if(calcImc >= 25 && calcImc < 30){
    console.log('Seu peso é: ', calcImc.toFixed(2),' Entre 25 e 30 acima do peso');
}else if(calcImc >= 30 && calcImc < 40){
    console.log('Seu peso é: ', calcImc.toFixed(2),' Entre 31 e 40 obeso');
}else{
    console.log('Seu peso é: ', calcImc.toFixed(2),' Acima de 40 obesidade grave');
}