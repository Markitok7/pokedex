//passo 1 - pegar no JS o elemento HTML correspondente ao botao de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//criar variavel para pegar a imagem do botão
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

//Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
  //arrow function
  //verificar se o body já tem a classe "modo-escuro":
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  if (modoEscuroEstaAtivo) {
    //remover a classe
    body.classList.remove("modo-escuro");
    imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");
    //vamos alterar o alt também
    imagemBotaoTrocarDeTema.setAttribute("alt", "imagem do sol");
  } else {
    //passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");
    //passo 5 - trocar imagem do botao de aterar tema para lua
    //agora vamos alterar o src da tag img do html
    imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
    //vamos alterar o alt também
    imagemBotaoTrocarDeTema.setAttribute("alt", "imagem da lua");
  }
});