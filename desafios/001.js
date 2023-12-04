/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Destância em KM da viagem;
    
    Imprima no console o valor que será gato para realizar esta viagem.*/


 const precoCombustivel = 5.79;
 const kmPorLitros = 10;
 const distanciaEmKm = 100;

 const litrosConsumidos = distanciaEmKm / kmPorLitros;
 const gastoViagem = litrosConsumidos * precoCombustivel;

console.log(gastoViagem);