document.addEventListener('DOMContentLoaded', () => {
  const campoBusca = document.getElementById('campoBusca');
  const lista = document.getElementById('lista');
  // Obter todos os <li> dentro do <ul>
  const itens = lista.getElementsByTagName('li');

  // 2. Adicionar o listener de evento para a busca em tempo real
  campoBusca.addEventListener('keyup', function () {
      // Obter o termo digitado e converter para minúsculas
      const termoBusca = campoBusca.value.toLowerCase().trim(); // Adicionado .trim() para remover espaços

      // 3. Iterar sobre todos os itens da lista
      for (let i = 0; i < itens.length; i++) {
          const item = itens[i];

          // Pega o texto do <h1> dentro do <li>, que é o nome da fruta
          // Usamos textContent para pegar o texto de forma limpa
          const nomeFrutaElement = item.getElementsByTagName('h1')[0];
          const nomeFruta = nomeFrutaElement.textContent || nomeFrutaElement.innerText; // Fallback
          const nomeFrutaMinusculo = nomeFruta.toLowerCase();

          // 4. Lógica de filtragem: verifica se o termo de busca está no nome da fruta
          if (nomeFrutaMinusculo.includes(termoBusca)) {
              // Se encontrar o termo, exibe o item
              // 'flex' é usado para manter o estilo de linha de tabela definido no CSS
              item.style.display = 'flex'; 
          } else {
              // Se não encontrar o termo, oculta o item
              item.style.display = 'none';
          }
      }
  });

  // Função de limpeza opcional: limpa a busca se o usuário apertar ESC
  campoBusca.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
          campoBusca.value = '';
          // Dispara o evento keyup para reexibir todos os itens
          campoBusca.dispatchEvent(new Event('keyup')); 
      }
  });
});