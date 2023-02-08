const flecha_botao = document.querySelector("#flecha-botao")

flecha_botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})