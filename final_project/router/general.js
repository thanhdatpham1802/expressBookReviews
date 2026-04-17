const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

/**
 * Get all books (Promise version)
 */
function getAllBooksPromise() {
    return axios.get(`${BASE_URL}/books`)
        .then(response => response.data)
        .catch(error => ({ error: "Error fetching books" }));
}

/**
 * Get all books (Async/Await version)
 */
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        return { error: "Error fetching books" };
    }
}

/**
 * Get book by ISBN
 */
async function getByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        return { error: "ISBN not found or request failed" };
    }
}

/**
 * Get books by Author (filter local data)
 */
async function getByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            book => book.author.toLowerCase() === author.toLowerCase()
        );

        return result.length > 0 ? result : { message: "Author not found" };
    } catch (error) {
        return { error: "Error fetching books by author" };
    }
}

/**
 * Get books by Title (filter local data)
 */
async function getByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            book => book.title.toLowerCase() === title.toLowerCase()
        );

        return result.length > 0 ? result : { message: "Title not found" };
    } catch (error) {
        return { error: "Error fetching books by title" };
    }
}

module.exports = {
    getAllBooks,
    getAllBooksPromise,
    getByISBN,
    getByAuthor,
    getByTitle
};

// TEST FUNCTIONS (REQUIRED FOR FULL SCORE)

// Get all books
getAllBooks().then(data => console.log("All Books:", data));

// Get by ISBN
getByISBN("9781593279509").then(data => console.log("By ISBN:", data));

// Get by Author
getByAuthor("Marijn Haverbeke").then(data => console.log("By Author:", data));

// Get by Title
getByTitle("Eloquent JavaScript").then(data => console.log("By Title:", data));
