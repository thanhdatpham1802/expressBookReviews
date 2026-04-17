const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

/**
 * Get all books (async/await with Axios)
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
 * Get all books (Promise callback version)
 */
function getAllBooksPromise() {
    return axios.get(`${BASE_URL}/books`)
        .then(res => res.data)
        .catch(() => ({ error: "Error fetching books" }));
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
 * Get books by Author
 */
async function getByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            b => b.author.toLowerCase().trim() === author.toLowerCase().trim()
        );

        return result.length > 0 ? result : { message: "Author not found" };
    } catch (error) {
        return { error: "Error fetching books by author" };
    }
}

/**
 * Get books by Title
 */
async function getByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            b => b.title.toLowerCase().trim() === title.toLowerCase().trim()
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
