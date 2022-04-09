const express = require('express');
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Book = require('../models/Book');
const { body, validationResult } = require('express-validator');




// ROUTE 1:  fetch all books using   GET "/api/books/fetchallbooks"  login requires 

router.get('/fetchallbooks', fetchuser, async (req, res) => {
    try {

        const books = await Book.find({ user: req.user.id });
        res.json(books);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")

    }
});


// ROUTE 2: ADD New Books using  POST: "/api/books/addbooks"  login requires 
router.post('/addbooks', fetchuser, [
    body('title', 'Enter the Valid Title').isLength({ min: 4 }),
    body('description', 'Enter the Valid Description').isLength({ min: 10 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        //If there are any errors then return the bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const book = new Book({
            title, description, tag, user: req.user.id
        })
        const savedBook = await book.save()
        res.json(savedBook);
    } catch (errors) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")

    }
});

// ROUTE 3: UPDATE the Book Or Note Using PUT: "/api/books/update"  login requires 
router.put('/update/:id', fetchuser, async (req, res) => {

    try {

        // using destructuring method to take title, description , and tag 
        const { title, description, tag } = req.body;
        //create newBook object 
        const newBook = {};
        if (title) { newBook.title = title }
        if (description) { newBook.description = description }
        if (tag) { newBook.tag = tag }

        // find the book to be updated and update it
        let book = await Book.findById(req.params.id);
        if (!book) { return res.status(404).send("Not Found") }

        if (book.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        book = await Book.findByIdAndUpdate(req.params.id, { $set: newBook }, { new: true });
        res.json({ book })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Kuch Gadbad ho Gya hai!")

    }
});
// ROUTE 4: Delete  the existing  Book Or Note Using DELETE: "/api/books/deletebook"  login requires 
router.delete('/deletebook/:id', fetchuser, async (req, res) => {
    try {
        // find the book to be deleted and delete it
        let book = await Book.findById(req.params.id);
        if (!book) { return res.status(404).send("Not Found") }
        // Delete book only if user owns this book
        if (book.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        book = await Book.findByIdAndDelete(req.params.id);
        res.json({ "Success ": "Book has been Deleted", book: book })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")

    }
});


module.exports = router