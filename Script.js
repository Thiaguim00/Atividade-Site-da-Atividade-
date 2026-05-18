const dados = {

    itens: [

        {
            id: 1,

            nome: "Candy Cane",

            jogo: "Grand Piece Online",

            descricao: "Espada limitada do evento de natal.",

            conteudo: "Candy Cane foi uma arma exclusiva de evento no GPO. Atualmente ela não pode mais ser obtida normalmente, tornando-se extremamente rara.",

            raridade: "Limited",

            valor_trade: "Alto",

            evento: "Natal 2021",

            destaque: true,

            imagem_principal: "./img do site/cc.webp"
        },

        {
            id: 2,

            nome: "True Triple Yoru",

            jogo: "Blox Fruits",

            descricao: "Uma das espadas mais raras do jogo.",

            conteudo: "True Triple Yoru é extremamente rara e associada a contas especiais e administradores.",

            raridade: "Admin / Unobtainable",

            valor_trade: "Inestimável",

            evento: "Especial",

            destaque: true,

            imagem_principal: "./img do site/triple yoru.webp"
        },

        {
            id: 3,

            nome: "Marine Cap",

            jogo: "Grand Piece Online",

            descricao: "Acessório extremamente raro.",

            conteudo: "Marine Cap é um item antigo e difícil de encontrar atualmente no GPO.",

            raridade: "Admin / Unobtainable",

            valor_trade: "Absurdamente alto",

            evento: "Admin",

            destaque: false,

            imagem_principal: "./img do site/marine cap.webp"
        }

    ]
};


// =======================================
// HOME PAGE
// =======================================

const cardsContainer = document.getElementById("cards-container");

if (cardsContainer) {

    dados.itens.forEach(item => {

        cardsContainer.innerHTML += `

            <div class="col-md-4 col-12 mb-4">

                <div class="cartao">

                    <div class="corpo-do-cartao">

                        <h1>${item.nome}</h1>

                        <img src="${item.imagem_principal}" alt="${item.nome}">

                        <span class="categoria-da-noticia">
                            ${item.jogo}
                        </span>

                        <p>${item.descricao}</p>

                        <p>
                            <strong>Raridade:</strong>
                            ${item.raridade}
                        </p>

                        <a href="detalhes.html?id=${item.id}" class="btn btn-dark">
                            Ver detalhes
                        </a>

                    </div>

                </div>

            </div>

        `;
    });

}


// =======================================
// PÁGINA DE DETALHES
// =======================================

const detalhesContainer = document.getElementById("detalhes-container");

if (detalhesContainer) {

    // PEGA O ID DA URL
    const parametros = new URLSearchParams(window.location.search);

    const id = Number(parametros.get("id"));

    // PROCURA O ITEM
    const item = dados.itens.find(item => item.id === id);

    // SE ENCONTROU
    if (item) {

        detalhesContainer.innerHTML = `

            <div class="row justify-content-center">

                <div class="col-md-8">

                    <div class="cartao">

                        <div class="corpo-do-cartao">

                            <h1>${item.nome}</h1>

                            <img src="${item.imagem_principal}" alt="${item.nome}">

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

                            <a href="index.html" class="btn btn-dark">
                                Voltar
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        `;
    }

    // SE NÃO ENCONTROU
    else {

        detalhesContainer.innerHTML = `

            <div class="alert alert-danger">

                Item não encontrado.

            </div>

        `;
    }
}