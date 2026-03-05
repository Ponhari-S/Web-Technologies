let currentPage = 1;
let currentMode = 'all'; 

document.addEventListener('DOMContentLoaded', () => loadBooks(1, true));

function renderBooks(books, clearExisting = true) {
    const container = document.getElementById('books-container');
    if (clearExisting) container.innerHTML = '';

    if (books.length === 0 && clearExisting) {
        container.innerHTML = '<p>No books found.</p>';
        return;
    }

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <div class="stats">
                <span class="price">₹${book.price}</span>
                <span class="rating">⭐ ${book.rating}/5</span>
            </div>
        `;
        container.appendChild(card);
    });
}

async function searchBooks() {
    const title = document.getElementById('search-input').value;
    if (!title) return resetView();
    
    currentMode = 'search';
    document.getElementById('load-more-btn').style.display = 'none';

    const res = await fetch(`/books/search?title=${title}`);
    const books = await res.json();
    renderBooks(books);
}

async function filterByCategory() {
    const category = document.getElementById('category-input').value;
    if (!category) return;

    currentMode = 'filter';
    document.getElementById('load-more-btn').style.display = 'none';

    const res = await fetch(`/books/category/${category}`);
    const books = await res.json();
    renderBooks(books);
}

async function sortBooks(field) {
    currentMode = 'sort';
    document.getElementById('load-more-btn').style.display = 'none';

    const res = await fetch(`/books/sort/${field}`);
    const books = await res.json();
    renderBooks(books);
}

async function getTopBooks() {
    currentMode = 'top';
    document.getElementById('load-more-btn').style.display = 'none';

    const res = await fetch(`/books/top`);
    const books = await res.json();
    renderBooks(books);
}

async function loadBooks(page, clearExisting = false) {
    const res = await fetch(`/books?page=${page}`);
    const books = await res.json();
    
    renderBooks(books, clearExisting);

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (books.length < 5) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMore() {
    if (currentMode === 'all') {
        currentPage++;
        loadBooks(currentPage, false); 
    }
}

function resetView() {
    currentMode = 'all';
    currentPage = 1;
    document.getElementById('search-input').value = '';
    document.getElementById('category-input').value = '';
    loadBooks(1, true);
}