const axios = require('axios');

// Get all books
async function getAllBooks() {
    const response = await axios.get('http://localhost:5000/books');
    console.log(response.data);
}

// Get by ISBN
async function getByISBN(isbn) {
    const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
    console.log(response.data);
}

// Get by Author
async function getByAuthor(author) {
    const response = await axios.get(`http://localhost:5000/books/author/${author}`);
    console.log(response.data);
}

// Get by Title
async function getByTitle(title) {
    const response = await axios.get(`http://localhost:5000/books/title/${title}`);
    console.log(response.data);
}

// Run
getAllBooks();
getByISBN("9781593279509");
getByAuthor("Marijn Haverbeke");
getByTitle("Eloquent JavaScript");
