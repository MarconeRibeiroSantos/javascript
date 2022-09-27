/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que seá gasto para realizar esta viagem.
*/
let tipoCombustivel = 'gasolina';
const precoCombustivelEtanol = 5.79;
const precoCombustivelGasol = 6.66;
const kmPorLitros = 10;
let distanciaEmKm = 100;
let consumoPrevistoViagem = 0;

if(tipoCombustivel === 'etanol'){
    valorGastoPrevisto = (distanciaEmKm / kmPorLitros) * precoCombustivelEtanol;
    console.log(valorGastoPrevisto.toFixed(2));
}else if(tipoCombustivel === 'gasolina'){
    valorGastoPrevisto = (distanciaEmKm / kmPorLitros) * precoCombustivelGasol;
    console.log(valorGastoPrevisto.toFixed(2));
}else{
    console.log('O combustível escolhido não é válido!')
}