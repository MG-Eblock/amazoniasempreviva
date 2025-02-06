//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
//cartao da lista

//- passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
//variavel para selecionar os cartoes
const acoes = document.querySelectorAll(".acao");

//variavel para selecionar o cartao atual
let acaoAtual = 0;


//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar


btnAvancar.addEventListener("click", function(){

    
    

    if(acaoAtual === acoes.length -1) return;

    // -passo 4 remover o cartao que esta selecionado e esconder    
    const acaoSelecionada = document.querySelector(".selecionada");
    acaoSelecionada.classList.remove("selecionada");

    //-passo 3 fazer aparecer o proximo cartao da lista
    acaoAtual++;
    
    acoes[acaoAtual].classList.add("selecionada");

});

/*OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  
 
  
    
    */


//- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar   
const btnVoltar = document.getElementById("btn-voltar");

// - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function(){

    
    
                    
     if(acaoAtual === 0) return;
                    
      //- passo 4 - buscar o cartão que esta selecionado e esconder   
     const acaoSelecionado = document.querySelector(".selecionada");
     acaoSelecionado.classList.remove("selecionada");
                    
       //-passo 3 fazer aparecer o cartao anterior da lista                  
     acaoAtual--;
     
     acoes[acaoAtual].classList.add("selecionada");
                    
 });