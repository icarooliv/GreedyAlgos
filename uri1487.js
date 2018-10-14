var rls = require("readline-sync");

var Brinquedo = class Brinquedo {
  constructor(duracao, pontuacao) {
    this.duracao = duracao;
    this.pontuacao = pontuacao;
  }
  get div() {
    return this.calculaDiv();
  }
  /*
  o div representa o brinquedo com maior "importancia": 
  quanto maior a pontuaçao e menor a duracao, melhor
  */
  calculaDiv() {
    return this.pontuacao / this.duracao;
  }
};

function main() {
  var numeroTotalBrinquedos = 1,
    tempoTotalEquipe = 1,
    instancias = 1;

  while (1) {
    var brinquedos = new Array();

    numeroTotalBrinquedos = rls.questionInt("Insira o número de brinquedos: ");
    tempoTotalEquipe = rls.questionInt("Insira o tempo total: ");

    if (numeroTotalBrinquedos == 0) {
      console.log("N nao pode ser 0!");
      break;
    }

    for (var i = 0; i < numeroTotalBrinquedos; i++) {
      var b = new Brinquedo();
      b.duracao = rls.questionInt(`Insira a duração do brinquedo ${i}: `);
      b.pontuacao = rls.questionInt(`Insira a pontuação do brinquedo ${i}: `);
      brinquedos.push(b);
    }

    brinquedos.sort((a, b) => b.div > a.div);

    console.log("Brinquedos inseridos:", brinquedos);

    var pontuacaoTotal = 0,
      tempoTotal = 0;
    var k = 0;
    var escolhidos = Array();
    while (k < numeroTotalBrinquedos) {
      var auxTempoTotal = tempoTotal + brinquedos[k].duracao;
      if (auxTempoTotal <= tempoTotalEquipe) {
        pontuacaoTotal += brinquedos[k].pontuacao;
        tempoTotal = auxTempoTotal;
        escolhidos.push(brinquedos[k]);
      } else k++;
    }
    console.log("Brinquedos escolhidos: \n", escolhidos);
    console.log(`Instancia:${instancias++}`);
    console.log(pontuacaoTotal);
    console.log("\n\n");
  }
}

main();
