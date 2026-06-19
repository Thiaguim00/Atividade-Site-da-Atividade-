document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById(
                "formCadastro"
            );

        form.addEventListener(
            "submit",
            async (e) => {

                e.preventDefault();

                const nome =
                    document.getElementById(
                        "nome"
                    ).value;

                const email =
                    document.getElementById(
                        "email"
                    ).value;

                const senha =
                    document.getElementById(
                        "senha"
                    ).value;

                const confirmarSenha =
                    document.getElementById(
                        "confirmarSenha"
                    ).value;

                if (
                    senha !== confirmarSenha
                ) {

                    alert(
                        "As senhas não coincidem."
                    );

                    return;

                }

                try {

                    const resposta =
                        await fetch(
                            `http://localhost:3000/usuarios?email=${email}`
                        );

                    const usuarios =
                        await resposta.json();

                    if (
                        usuarios.length > 0
                    ) {

                        alert(
                            "Este email já está cadastrado."
                        );

                        return;

                    }

                    await fetch(
                        "http://localhost:3000/usuarios",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                "application/json"

                            },

                            body: JSON.stringify({

                                nome,
                                email,
                                senha,

                                tipo:
                                "usuario"

                            })

                        }
                    );

                    alert(
                        "Cadastro realizado com sucesso!"
                    );

                    window.location.href =
                        "../Html/login.html";

                }

                catch (erro) {

                    console.error(
                        erro
                    );

                    alert(
                        "Erro ao cadastrar."
                    );

                }

            }
        );

    }
);