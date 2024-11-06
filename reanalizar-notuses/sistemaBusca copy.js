import { resFantasiaDados, resCienciaDados, resGalaxiaDados,resDistopiaDados } from "./resumos";

function pesquisaLivros() {
    const procura = document.getElementById("barraPesquisa").value.toLowerCase();
    const resultadoContainer = document.getElementById("resultadoBusca");
    resultadoContainer.innerHTML = "";

    const juntaDados = [resFantasiaDados, resCienciaDados, resGalaxiaDados, resDistopiaDados];

    const resultados = juntaDados.flatMap(item => {
        return item.filter(livro => {
            const values = Object.values(livro).join(" ").toLowerCase();
            return values.includes(procura);
        });
    });

    if(resultados.lenght > 0) {
        resultados.forEach(livro => {
            const ItemResultado = document.createElement("div");
            ItemResultado.classList.add("Lista", "obras");
            
            ItemResultado.innerHTML = `
            <div class="lista obras">
                <div class="autor">
                    <div class="linha">
                    <div class="autor-nome"><strong>${livro.Obra}</strong></div>
                    <div class="pais-nome-livros"><strong>  ${livro.Autor}</strong></div>
                    </div>
                    
                    <div class="linha">
                    <div class="conteudo">
                        <img src=${livro.Capa}.Capa[n]}>
                    </div>
                    <div class="pais-nome-livros">
                        <p>Sinópse: ${livro.Sinopse}</p>
                    </div>
                    <div class="livros">
                        <ul>
                            <li>Nº de páginas: ${livro.Paginas}</li>
                            <li>Data do primeiro lançamento: ${livro.Lancamento}</li>
                            <li>Nº de Republicações: ${livro.Republicacoes}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            `;
        resultadoContainer.appendChild(ItemResultado);
    });
    } else {
        resultadoContainer.textContent = "Busca não encontrada, ainda não adicionamos esta obra."
    }
}

window.pesquisaLivros = pesquisaLivros;

const Procura = document.getElementById("pesquisar")

Procura.onclick = function() {
    pesquisaLivros();
}