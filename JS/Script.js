
// =======================================
// HOME PAGE
// =======================================

async function carregarItens() {

    const cardsContainer =
        document.getElementById("cards-container");

    if (!cardsContainer) return;

    try {

        const resposta = await fetch(
            "http://localhost:3000/itens"
        );

        const itens = await resposta.json();

        cardsContainer.innerHTML = "";

        itens.forEach(item => {

            cardsContainer.innerHTML += `

                <div class="col-md-4 col-12 mb-4">

                    <div class="cartao">

                        <div class="corpo-do-cartao">

                            <h1>${item.nome}</h1>

                            <img
                                src="${item.imagem_principal || '../img do site/logosite.png'}"
                                alt="${item.nome}"
                            >

                            <span class="categoria-da-noticia">
                                ${item.jogo}
                            </span>

                            <p>${item.descricao}</p>

                            <p>
                                <strong>Raridade:</strong>
                                ${item.raridade}
                            </p>

                            <a
                                href="detalhes.html?id=${item.id}"
                                class="btn btn-dark"
                            >
                                Ver detalhes
                            </a>

                        </div>

                    </div>

                </div>

            `;
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar itens:",
            erro
        );

    }

}


// =======================================
// PÁGINA DE DETALHES
// =======================================

async function carregarDetalhes() {

    const detalhesContainer =
        document.getElementById(
            "detalhes-container"
        );

    if (!detalhesContainer) return;

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    const id =
        parametros.get("id");

    try {

        const resposta = await fetch(
            `http://localhost:3000/itens/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Item não encontrado");
        }

        const item =
            await resposta.json();

        detalhesContainer.innerHTML = `

            <div class="row justify-content-center">

                <div class="col-md-8">

                    <div class="cartao">

                        <div class="corpo-do-cartao">

                            <h1>${item.nome}</h1>

                            <img
                                src="${item.imagem_principal || '../img do site/logosite.png'}"
                                alt="${item.nome}"
                                onerror="this.src='../img do site/logosite.png'"
                            >

                            <span class="categoria-da-noticia">
                                ${item.jogo}
                            </span>

                            <p>
                                <strong>Descrição:</strong>
                                ${item.descricao}
                            </p>

                            <p>
                                <strong>Conteúdo:</strong>
                                ${item.conteudo}
                            </p>

                            <p>
                                <strong>Raridade:</strong>
                                ${item.raridade}
                            </p>

                            <p>
                                <strong>Valor de Trade:</strong>
                                ${item.valor_trade}
                            </p>

                            <p>
                                <strong>Evento:</strong>
                                ${item.evento}
                            </p>

                            <a
                                href="../Html/home.html"
                                class="btn btn-dark"
                            >
                                Voltar
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        `;

    } catch (erro) {

        detalhesContainer.innerHTML = `

            <div class="alert alert-danger">

                Item não encontrado.

            </div>

        `;

    }

}


// =======================================
// USUÁRIO LOGADO
// =======================================

function carregarUsuario() {

    const usuarioContainer =
        document.getElementById(
            "usuario-logado"
        );

    if (!usuarioContainer) return;

    const usuario =
        JSON.parse(
            localStorage.getItem(
                "usuarioLogado"
            )
        );

    if (usuario) {

        usuarioContainer.innerHTML = `

            <div class="d-flex align-items-center gap-2">

                <span>

                    Olá,

                    <strong>${usuario.nome}</strong>

                </span>

                <button
                    class="btn btn-sm btn-outline-danger"
                    onclick="logout()"
                >

                    Sair

                </button>

            </div>

        `;

    }

}


// =======================================
// ADMIN
// =======================================

function verificarAdmin() {

    const areaAdmin =
        document.getElementById(
            "area-admin"
        );

    if (!areaAdmin) return;

    const usuario =
        JSON.parse(
            localStorage.getItem(
                "usuarioLogado"
            )
        );

    if (
        usuario &&
        usuario.tipo === "admin"
    ) {

        areaAdmin.innerHTML = `

            <a
                href="../Html/cadastro-item.html"
                class="btn btn-danger"
            >

                Adicionar Item

            </a>

        `;

    }

}


// =======================================
// LOGOUT
// =======================================

function logout() {

    localStorage.removeItem(
        "usuarioLogado"
    );

    window.location.href =
        "../Html/login.html";

}


// =======================================
// INICIALIZAÇÃO
// =======================================

if (document.getElementById("cards-container")) {
    carregarItens();
}

if (document.getElementById("detalhes-container")) {
    carregarDetalhes();
}

carregarUsuario();
verificarAdmin();


// =======================================
// MENU USUÁRIO
// =======================================

function carregarMenuUsuario() {

    const usuarioMenu =
        document.getElementById("usuario-menu");

    if (!usuarioMenu) return;

    const usuario =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {

        usuarioMenu.innerHTML = `
            <button
                class="btn-menu-admin"
                onclick="window.location.href='login.html'"
            >
                Fazer Login
            </button>
        `;

        return;
    }

    let html = `
        <p>
            Logado como:
            <br>
            <strong>${usuario.nome}</strong>
        </p>
    `;

    if (usuario.tipo === "admin") {

        html += `
            <button
                class="btn-menu-admin"
                onclick="window.location.href='admin.html'"
            >
                Adicionar Item
            </button>
        `;
    }

    html += `
        <button
            class="btn-menu-sair"
            onclick="logout()"
        >
            Sair
        </button>
    `;

    usuarioMenu.innerHTML = html;
}

function logout() {

    localStorage.removeItem(
        "usuarioLogado"
    );

    window.location.href =
        "../Html/login.html";
}

carregarMenuUsuario();