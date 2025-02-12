const Book = require("../models/bookModel")

exports.addBook = async (req, res) => {
    try {
        const {title, author, stockedQuantity, checkedOutQuantity} = req.body
        const newBook = new Book({
            title,
            author,
            stockedQuantity,
            checkedOutQuantity: 0
        })
        await newBook.save()
        res.status(201).send("Book added successfully");
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
exports.fetchAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.json(books)
    } catch (err) {
        console.error(err)
        res.status(500).send("Failed to fetch books")
    }
}
exports.searchBook = async (req, res) => {
    try {
        const { title } = req.query;
        const book = await Book.findOne({ title: new RegExp(title, 'i') })

        if (!book) {
            return res.status(404).send("Book not found")
        }

        res.json(book)
    } catch (err) {
        console.error(err)
        res.status(500).send("Error searching for book")
    }
};
exports.checkoutBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)

        if (!book) {
            return res.status(404).send("Book not found")
        }

        if (book.checkedOutQuantity >= book.stockedQuantity) {
            return res.status(400).send("No copies available to checkout")
        }

        book.checkedOutQuantity += 1
        await book.save()

        res.send(`Checked out one copy of "${book.title}".`)
    } catch (err) {
        console.error(err);
        res.status(500).send("Error checking out book")
    }
}
exports.returnBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)

        if (!book) {
            return res.status(404).send("Book not found");
        }

        if (book.checkedOutQuantity <= 0) {
            return res.status(400).send("No copies to return")
        }

        book.checkedOutQuantity -= 1
        await book.save()

        res.send(`Returned one copy of "${book.title}".`)
    } catch (err) {
        console.error(err);
        res.status(500).send("Error returning book")
    }
}