const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".fundo");
let cartaoAtual = 0; 

cartoes.forEach(cartao =>  {
    const cartaVirada = cartao.querySelector(".carta-virada");
    cartao.addEventListener("click", function (){
        
        cartao.classList.toggle("virar");

        setTimeout(() => {
            cartaVirada.classList.toggle("mostrar-fundo-carta");
        },205);
    });
});

btnAvancar.addEventListener("click", function(){
    cartoes[cartaoAtual].classList.remove("selecionado");
    cartaoAtual++;
            if(cartaoAtual == cartoes.length){
            cartaoAtual = 0;
            }
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function(){
    cartoes[cartaoAtual].classList.remove("selecionado");
    cartaoAtual--;
            if(cartaoAtual == -1){
            cartaoAtual = cartoes.length -1;
            }
    cartoes[cartaoAtual].classList.add("selecionado");
});

