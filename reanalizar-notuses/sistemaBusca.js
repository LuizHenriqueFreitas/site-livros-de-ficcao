function pesquisaLivros() {
    const procura = document.getElementById("barraPesquisa").value.toLowerCase();
    const resultadoContainer = document.getElementById("resultadoBusca");
  
    resFantasiaDados.forEach(livro => {
        if (livro.Obra.toLowerCase = procura){ 
            resultadoContainer.innerHTML = `
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
        } else {
        resCienciaDados.forEach(livro => {
            if (livro.Obra.toLowerCase = procura){
                resultadoContainer.innerHTML = `
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
            
        } else {
            resGalaxiaDados.forEach(livro => {
                if (livro.Obra.toLowerCase = procura){
                    resultadoContainer.innerHTML = `
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
            
        } else {
            resDistopiaDados.forEach(livro => {
                if (livro.Obra.toLowerCase = procura){
                    resultadoContainer.innerHTML = `
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
            }})
        }})
    }})
}})
};

document.getElementById("pesquisa").onclick = function() {
pesquisaLivros();
}