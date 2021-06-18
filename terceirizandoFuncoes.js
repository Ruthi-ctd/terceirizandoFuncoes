// Aula 07 - 18/06/2021
// Callbacks - Exercício 'Terceirizando funções'

function acaoCarro(Callback) {
  return Callback();
}

function andar() {
  return console.log('O carro está andando.');
};

function parar() {
  return console.log('O carro parou.');
};

acaoCarro(andar);
acaoCarro(parar);