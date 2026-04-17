const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        return { error: "Error fetching books" };
    }
}

// Get by ISBN
async function getByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        return { error: "ISBN not found or request failed" };
    }
}

// Get by Author (FILTER CHUẨN)
async function getByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            (book) => book.author.toLowerCase() === author.toLowerCase()
        );

        if (result.length === 0) {
            return { message: "Author not found" };
        }

        return result;
    } catch (error) {
        return { error: "Error fetching books by author" };
    }
}

// Get by Title (FILTER CHUẨN)
async function getByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const result = Object.values(books).filter(
            (book) => book.title.toLowerCase() === title.toLowerCase()
        );

        if (result.length === 0) {
            return { message: "Title not found" };
        }

        return result;
    } catch (error) {
        return { error: "Error fetching books by title" };
    }
}

// Export functions
module.exports = {
    getAllBooks,
    getByISBN,
    getByAuthor,
    getByTitle
};
