// Função que será chamada ao clicar no botão
        function manipularDOM() {
            // 1. Obtém o elemento de parágrafo pelo ID
            const resultado = document.getElementById('resultado-js');
            
            // 2. Altera o texto do parágrafo
            resultado.innerHTML = "<strong>Parabéns!</strong> O JavaScript usou o método <code>document.getElementById</code> para encontrar este parágrafo e alterar seu conteúdo.";
            
            // 3. Torna o parágrafo visível (altera o estilo CSS)
            resultado.style.display = 'block'; 
        }

        // 4. Obtém o botão e anexa a função ao evento de clique
        const botao = document.getElementById('botao-js');
        botao.addEventListener('click', manipularDOM);