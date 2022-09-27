/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
    - 1 preço do combustível
    - 2 gasto médio de combustível do carro por KM
    - 3 distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar essa viagem.

formúla: 
  - preco combustível * valor medio gasto do carro / distancia em km da viagem = consumo de combustível previsto para a viagem
*/

const precoCombustivel = 2.19;
const kmPorLitros = 30;
let distanciaEmKm = 30;
let consumoPrevistoViagem = 0;

valorGastoPrevisto = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log(valorGastoPrevisto);