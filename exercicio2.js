// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let numImg = 0;
function alteraImagem(mudar) {
  if (mudar === 1) { //avançar imagem
    numImg++;
    if (numImg === todasAsImagens.length) numImg = 0;
  } else if (mudar === -1) { //retroceder imagem
    numImg--;
    if (numImg === -1) numImg = todasAsImagens.length-1;
  }
  document.getElementById('slide').src = servidorDasImagens+todasAsImagens[numImg];
}

document.getElementById('proximo').addEventListener('click', function(e) {alteraImagem(1)});

document.getElementById('anterior').addEventListener('click', function(e) {alteraImagem(-1)});
