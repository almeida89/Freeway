function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();//Executar sempre.
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialdoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
