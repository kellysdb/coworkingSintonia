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