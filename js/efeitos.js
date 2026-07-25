/* carrossel hero */

const imagens = document.querySelectorAll(".hero-img");

let imagemAtual = 0;

function trocarImagem() {

    const proximaImagem = (imagemAtual + 1) % imagens.length;

    imagens[proximaImagem].classList.add("active");

    setTimeout(() => {
        imagens[imagemAtual].classList.remove("active");
        imagemAtual = proximaImagem;
    }, 600);

}

setInterval(trocarImagem, 3000);

/* carrossel sobre */

const imagensSobre = document.querySelectorAll(".sobre-img");

let imagemAtualSobre = 0;

function trocarImagemSobre() {
    
    const proxima = (imagemAtualSobre + 1) % imagensSobre.length;
    imagensSobre[proxima].classList.add("active");

    setTimeout(() => {
        imagensSobre[imagemAtualSobre].classList.remove("active");
        imagemAtualSobre = proxima;
    },600)
}

setInterval(trocarImagemSobre, 3000);

/* carrossel espaço */

const modal = document.querySelector(".modal-galeria");
const imagemModal = document.querySelector(".imagem-modal");

const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");
const btnFechar = document.querySelector(".fechar-galeria");

const botoesGaleria = document.querySelectorAll(".galeria-indicador");

let imagensGaleria = [];
let indice = 0;

botoesGaleria.forEach(botao => {

    botao.addEventListener("click", () => {

        const slider = botao.parentElement;

        imagensGaleria = [...slider.querySelectorAll(".espaco-img")];

        indice = 0;

        imagemModal.src = imagensGaleria[indice].src;

        modal.classList.add("active");

    });

});

btnProximo.addEventListener("click", () => {

    indice++;

    if(indice >= imagensGaleria.length){
        indice = 0;
    }

    imagemModal.src = imagensGaleria[indice].src;

});

btnAnterior.addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = imagensGaleria.length - 1;
    }

    imagemModal.src = imagensGaleria[indice].src;

});

btnFechar.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e)=>{

    if(e.target === modal){
        modal.classList.remove("active");
    }

});

document.addEventListener("keydown",(e)=>{

    if(!modal.classList.contains("active")) return;

    if(e.key === "Escape"){
        modal.classList.remove("active");
    }

    if(e.key === "ArrowRight"){
        btnProximo.click();
    }

    if(e.key === "ArrowLeft"){
        btnAnterior.click();
    }

});