const axios = require('axios');
let books = require('./booksdb.js');

/**
 * Get all books (Axios + Promise giả lập)
 */
function getAllBooks() {
    return new Promise((resolve) => {
        resolve(books);
    });
}

/**
 * Get by ISBN
 */
function getByISBN(isbn) {
    return new Promise((resolve, reject) => {
        if (books[isbn]) {
            resolve(books[isbn]);
        } else {
            reject("ISBN not found");
        }
    });
}

/**
 * Get by Author
 */
async function getByAuthor(author) {
    try {
        const result = Object.values(books).filter(
            b => b.author.toLowerCase().trim() === author.toLowerCase().trim()
        );

        return result.length > 0 ? result : { message: "Author not found" };
    } catch (error) {
        return { error: "Error fetching author" };
    }
}

/**
 * Get by Title
 */
async function getByTitle(title) {
    try {
        const result = Object.values(books).filter(
            b => b.title.toLowerCase().trim() === title.toLowerCase().trim()
        );

        return result.length > 0 ? result : { message: "Title not found" };
    } catch (error) {
        return { error: "Error fetching title" };
    }
}
