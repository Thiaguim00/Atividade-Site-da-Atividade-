import { usuario } from "./bd.js";

const email = usuario.email;
const senha = usuario.senha;

function verificarcredenciais() {
    const emailInput = document.getElementById("email").value;
    const senhaInput = document.getElementById("senha").value;

    if (emailInput === email) {
        if (senhaInput === senha) {
            alert("Login confirmado!");
            window.location.href = "../Html/home.html";
        } else
            alert("Senha incorreta!");
    } else
        alert("Email informado incorretamente");
}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarcredenciais();
    });
});