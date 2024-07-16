document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formcontato__form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        if (nome.value.trim() === "") {
            alert("Por favor, preencha o nome.");
            valid = false;
        }
