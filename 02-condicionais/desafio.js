/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - preço da gasolina;
 3 - O tipode combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;
 
 Impima no console o valor que será gasto para realizar a viagem.*/

const precoEtanol = 3.64;
const precoGasolina = 5.61;
const mediaKmPorCombustivel = 11.5;
const distanciaViagemEmKm = 12;

const combustivelTipo = 'gasolina';

const litrosConsumidos = distanciaViagemEmKm / mediaKmPorCombustivel;

if(combustivelTipo == 'etanol'){
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2))
}