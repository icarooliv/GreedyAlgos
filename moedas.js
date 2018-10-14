function numeroMoedas(moedas, troco) {
  var qtdMoedas = 0;
  var tamMoedas = moedas.length;
  var i = tamMoedas - 1;

  for (i; i >= 0; i--) {
    // |0 força o valor a ser inteiro
    var aux = (troco / moedas[i]) | 0;
    troco -= aux * moedas[i];
    qtdMoedas += aux;
    if (aux > 0) {
      console.log("Moeda escolhida:", moedas[i]);
      console.log("Troco restante:", troco);
    }
  }
  return qtdMoedas;
}

function main() {
  troco = 73;
  moedas = [1, 2, 5, 10, 20];

  console.log("Total de moedas: ", numeroMoedas(moedas, troco));
}

main();

// Exemplo com troco = 26

/*
    troco = 26
    M = [1, 2, 5, 10, 20]
    aux = 26/20 = 1
    troco = 26 - 1 * 20 = 26-20 = 6
    qtdMoedas = 1

    troco = 6
    aux = 6 / 10 = 0
    troco = 6 - 0 = 6
    qtd moedas = 1 + 0 = 1

    troco = 6
    aux = 6/5 = 1
    troco = 6-1 * 5 = 1
    qtdMoedas = 1 + 1 = 2

    troco = 1
    aux = 6/5 = 1
    troco = 6 - 1 * 5 = 1
    qtdMoedas = 1 + 1 = 2

    auxMoedas = 1 / 2 = 0 
    troco = 1
    qtdMoedas = 2

    auxMoedas = 1/1 = 1
    troco = 1 - 1 * 1 = 0
    qtdMoedas 2 + 1 = 3

  */
