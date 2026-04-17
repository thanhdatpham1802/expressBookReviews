let books = require('./booksdb.js');

/**
 * Get all books (Promise)
 */
function getAllBooks() {
    return new Promise((resolve, reject) => {
        try {
            resolve(books);
        } catch (error) {
            reject("Error fetching books");
        }
    });
}

/**
 * Get by ISBN
 */
function getByISBN(isbn) {
    return new Promise((resolve, reject) => {
        try {
            if (books[isbn]) {
                resolve(books[isbn]);
            } else {
                reject("ISBN not found");
            }
        } catch (error) {
            reject("Error fetching ISBN");
        }
    });
}

/**
 * Get by Author
 */
function getByAuthor(author) {
    return new Promise((resolve, reject) => {
        try {
            const result = Object.values(books).filter(
                book => book.author.toLowerCase().trim() === author.toLowerCase().trim()
            );

            if (result.length > 0) {
                resolve(result);
            } else {
                reject("Author not found");
            }
        } catch (error) {
            reject("Error fetching author");
        }
    });
}

/**
 * Get by Title
 */
function getByTitle(title) {
    return new Promise((resolve, reject) => {
        try {
            const result = Object.values(books).filter(
                book => book.title.toLowerCase().trim() === title.toLowerCase().trim()
            );

            if (result.length > 0) {
                resolve(result);
            } else {
                reject("Title not found");
            }
        } catch (error) {
            reject("Error fetching title");
        }
    });
}

module.exports = {
    getAllBooks,
    getByISBN,
    getByAuthor,
    getByTitle
};
