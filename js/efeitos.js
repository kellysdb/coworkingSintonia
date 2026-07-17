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