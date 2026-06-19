const usuario =
    JSON.parse(
        localStorage.getItem(
            "usuarioLogado"
        )
    );

// Verifica se é admin
if (!usuario || usuario.tipo !== "admin") {

    alert(
        "Acesso permitido apenas para administradores."
    );

    window.location.href =
        "../Html/home.html";
}

const form =
    document.getElementById(
        "form-item"
    );

form.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const novoItem = {

            nome:
                document.getElementById(
                    "nome"
                ).value,

            jogo:
                document.getElementById(
                    "jogo"
                ).value,

            descricao:
                document.getElementById(
                    "descricao"
                ).value,

            conteudo:
                document.getElementById(
                    "conteudo"
                ).value,

            raridade:
                document.getElementById(
                    "raridade"
                ).value,

            valor_trade:
                document.getElementById(
                    "valor_trade"
                ).value,

            evento:
                document.getElementById(
                    "evento"
                ).value,

            destaque: false,

            imagem_principal:
                document.getElementById(
                    "imagem_principal"
                ).value
        };

        try {

            const resposta =
                await fetch(
                    "http://localhost:3000/itens",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify(
                            novoItem
                        )
                    }
                );

            if (!resposta.ok) {

                throw new Error();
            }

            alert(
                "Item cadastrado com sucesso!"
            );

            window.location.href =
                "../Html/home.html";

        } catch {

            alert(
                "Erro ao cadastrar item."
            );

        }

    }
);