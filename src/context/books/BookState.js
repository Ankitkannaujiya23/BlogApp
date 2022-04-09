import React from 'react';
import BookContext from './bookContext';
import { useState } from 'react';

const BookState = (props) => {
  const host = "http://localhost:5000"
  const booksInitial = []
  const [books, setBooks] = useState(booksInitial)

  // GET All Books 
  const getBooks = async () => {
    // API call to Fetch all books
    const response = await fetch(`${host}/api/books/fetchallbooks`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'auth-token': localStorage.getItem('token')   },

    });
    const json = await response.json();
    console.log(json);
    setBooks(json);


  }

  // Add a Book


  const addBook = async (title, description, tag) => {

    //  API Calls

    const response = await fetch(`${host}/api/books/addbooks`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'auth-token': localStorage.getItem('token')   },
      body: JSON.stringify({ title, description, tag })
    });
    const book = await response.json();
    setBooks(books.concat(book))
  }

  // Delete a Book

  const deleteBook = async (id) => {
    //  API Calls
    const response = await fetch(`${host}/api/books/deletebook/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')   },
    });
    const json = response.json();

    console.log("Deleting the note & its ID " + id);
    const newBook = books.filter((books) => { return books._id !== id });
    setBooks(newBook);

  }

  // Edit a Book  

  const editBook = async (id, title, description, tag) => {

    // API Calls

    const response = await fetch(`${host}/api/books/update/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        // 'Content-Type': 'application/json',  
       'Content-Type': 'application/x-www-form-urlencoded',
        'auth-token': localStorage.getItem('token')   },
      body: JSON.stringify(title, description, tag)
    });
    const json = response.json();
    console.log(json);


    // logic to edit the book on client side note
    // create new Book 
    let newBook = JSON.parse(JSON.stringify(books));
    for (let index = 0; index < books.length; index++) {
      const element = newBook[index];
      if (element._id === id) {
        newBook[index].title = title;
        newBook[index].description = description;
        newBook[index].tag = tag;
        
        break;
      }
    }
      setBooks(newBook);
  }

  return (
    <BookContext.Provider value={{ books, setBooks, addBook, deleteBook, editBook, getBooks }}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookState;
