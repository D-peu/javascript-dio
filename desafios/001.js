/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Destância em KM da viagem;
    
    Imprima no console o valor que será gato para realizar esta viagem.*/


 let combustivel = 5.00;
 let litrosKm = 2;
 let viagemKM = 40;

let gastoKm = litrosKm * combustivel;

let resultado = gastoKm * viagemKm;

console.log(resultado);