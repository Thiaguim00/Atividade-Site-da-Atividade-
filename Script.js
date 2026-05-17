const raros = [

    {
        id: 1,
        titulo: "Candy Cane",
        descricao: "Candy Cane é um doce colorido branco e vermelho.",
        conteudo: "O Candy Cane surgiu há muitos anos e ficou famoso principalmente no natal. Seu formato de bengala é extremamente conhecido.",
        categoria: "Doces",
        imagem: "https://picsum.photos/200/300?1"
    },

    {
        id: 2,
        titulo: "Câmera Antiga",
        descricao: "Uma câmera rara dos anos 80.",
        conteudo: "Essa câmera foi utilizada por fotógrafos profissionais durante décadas e virou item de coleção.",
        categoria: "Objetos",
        imagem: "https://picsum.photos/200/300?2"
    },

    {
        id: 3,
        titulo: "Livro Perdido",
        descricao: "Um livro raro encontrado em uma biblioteca antiga.",
        conteudo: "O livro contém histórias desconhecidas e manuscritos extremamente antigos.",
        categoria: "Livros",
        imagem: "https://picsum.photos/200/300?3"
    }

];


// HOME PAGE

const cardsContainer = document.getElementById("cards-container");

if (cardsContainer) {

    raros.forEach(item => {

        cardsContainer.innerHTML += `

            <div class="col-md-4 col-12 mb-4">

                <div class="cartao">

                    <div class="corpo-do-cartao">

                        <h1>${item.titulo}</h1>

                        <img src="${item.imagem}" alt="${item.titulo}">

                        <span class="categoria-da-noticia">
                            ${item.categoria}
                        </span>

                        <p>${item.descricao}</p>

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
    const item = raros.find(raro => raro.id === id);

    // SE ENCONTROU
    if (item) {

        detalhesContainer.innerHTML = `

            <div class="row justify-content-center">

                <div class="col-md-8">

                    <div class="cartao">

                        <div class="corpo-do-cartao">

                            <h1>${item.titulo}</h1>

                            <img src="${item.imagem}" alt="${item.titulo}">

                            <span class="categoria-da-noticia">
                                ${item.categoria}
                            </span>

                            <p>
                                <strong>Descrição:</strong>
                                ${item.descricao}
                            </p>

                            <p>
                                <strong>Conteúdo:</strong>
                                ${item.conteudo}
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