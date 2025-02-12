const express = require ("express")
const bookRoutes = express.Router()
const bookController = require ("../controllers/bookController")

bookRoutes.post('/books/add', bookController.addBook);
bookRoutes.get('/books', bookController.fetchAllBooks);
bookRoutes.get('/books/search', bookController.searchBook);
bookRoutes.post('/books/:id/checkout', bookController.checkoutBook);
bookRoutes.post('/books/:id/return', bookController.returnBook);

module.exports = bookRoutes