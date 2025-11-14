// Dados simulados do catálogo de livros
const books = [
    { title: "Dom Quixote", author: "Miguel de Cervantes", theme: "Clássico", year: 1605 },
    { title: "1984", author: "George Orwell", theme: "Ficção Científica", year: 1949 },
    { title: "Orgulho e Preconceito", author: "Jane Austen", theme: "Romance", year: 1813 },
    { title: "Cem Anos de Solidão", author: "Gabriel García Márquez", theme: "Realismo Mágico", year: 1967 },
    { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", theme: "Fantasia", year: 1954 },
    { title: "Ensaio sobre a Cegueira", author: "José Saramago", theme: "Distopia", year: 1995 },
    { title: "A Metamorfose", author: "Franz Kafka", theme: "Clássico", year: 1915 },
    { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", theme: "Fantasia", year: 1997 },
];

const bookListDiv = document.getElementById('bookList');
const authorFilterSelect = document.getElementById('authorFilter');
const themeFilterSelect = document.getElementById('themeFilter');

// --- Funções Auxiliares para População e Renderização ---

/**
 * Cria o HTML para um único livro (o "cartão").
 * @param {object} book - Objeto livro.
 */
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Ano:</strong> ${book.year}</p>
        <span class="theme">${book.theme}</span>
    `;
    
    return card;
}

/**
 * Renderiza a lista de livros no container HTML.
 * @param {array} filteredBooks - Array de livros a serem exibidos.
 */
function renderBooks(filteredBooks) {
    bookListDiv.innerHTML = ''; // Limpa o conteúdo atual
    
    if (filteredBooks.length === 0) {
        bookListDiv.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Nenhum livro encontrado com os filtros aplicados.</p>';
        return;
    }

    filteredBooks.forEach(book => {
        bookListDiv.appendChild(createBookCard(book));
    });
}

/**
 * Preenche os selects de filtro com opções únicas de autores e temas.
 */
function populateFilters() {
    const authors = [...new Set(books.map(book => book.author))].sort();
    const themes = [...new Set(books.map(book => book.theme))].sort();

    // Preenche o filtro de Autores
    authors.forEach(author => {
        const option = new Option(author, author);
        authorFilterSelect.add(option);
    });

    // Preenche o filtro de Temas
    themes.forEach(theme => {
        const option = new Option(theme, theme);
        themeFilterSelect.add(option);
    });
}


// --- Função Principal de Filtragem ---

/**
 * Filtra a lista de livros com base na pesquisa de texto e nos selects de filtro.
 */
window.filterBooks = function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedAuthor = authorFilterSelect.value;
    const selectedTheme = themeFilterSelect.value;

    const filtered = books.filter(book => {
        // 1. Filtro de Pesquisa (título, autor, tema)
        const matchesSearch = 
            book.title.toLowerCase().includes(searchInput) ||
            book.author.toLowerCase().includes(searchInput) ||
            book.theme.toLowerCase().includes(searchInput);

        // 2. Filtro por Autor
        const matchesAuthor = selectedAuthor === "" || book.author === selectedAuthor;

        // 3. Filtro por Tema
        const matchesTheme = selectedTheme === "" || book.theme === selectedTheme;

        // O livro deve passar por todos os filtros para ser exibido
        return matchesSearch && matchesAuthor && matchesTheme;
    });

    renderBooks(filtered);
}


// --- Inicialização ---

// Executa as funções iniciais quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    filterBooks(); // Renderiza a lista inicial completa
});