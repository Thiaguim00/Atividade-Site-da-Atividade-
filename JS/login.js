document.addEventListener("DOMContentLoaded", () => {

    const botao = document.querySelector("button");

    botao.addEventListener("click", async (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const senha =
            document.getElementById("senha").value;

        try {

            const resposta = await fetch(
                `http://localhost:3000/usuarios?email=${email}`
            );

            const usuarios =
                await resposta.json();

            if (
                usuarios.length > 0 &&
                usuarios[0].senha === senha
            ) {

                localStorage.setItem(
                    "usuarioLogado",
                    JSON.stringify(
                        usuarios[0]
                    )
                );

                alert("Login confirmado!");

                window.location.href =
                    "../Html/home.html";

            } else {

                alert(
                    "Email ou senha inválidos."
                );

            }

        } catch (erro) {

            console.error(erro);

            alert(
                "Erro ao conectar com o servidor."
            );

        }

    });

});