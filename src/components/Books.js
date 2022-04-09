import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bookContext from '../context/books/bookContext';
import AddBook from './AddBook';
import BooksItem from './BooksItem';




function Books(props) {
    const context = useContext(bookContext);
    const { books, getBooks, editBook } = context;
    let navigate=useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getBooks();
            
        }
        else{
            navigate('/login')
        }
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null);

    // Using the useState 
    const [book, setBook] = useState({ id: "", updatetitle: "", updatedescription: "", updatetag: "" })

    const updateBook = (currentBook) => {

        ref.current.click();
        setBook({ id: currentBook._id, updatetitle: currentBook.title, updatedescription: currentBook.description, updatetag: currentBook.tag });
       


    }
    const updateNow = (e) => {
        console.log("Updating the book", book);
        editBook(book.id, book.updatetitle, book.updatedescription, book.updatetag)
        // e.preventDefault();
        refClose.current.click();
        props.showAlert("Updated Successfuly !","success")
      
    }

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <AddBook showAlert={props.showAlert} /> */}

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit the Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-4'>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="updatetitle" name="updatetitle" value={book.updatetitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                        <div id="emailHelp" className="form-text"> </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="updatedescription" name="updatedescription" value={book.updatedescription} onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag </label>
                                        <input type="text" className="form-control" id="updatetag" name="updatetag" value={book.updatetag} onChange={onChange} />
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={book.updatetitle.length < 5 || book.updatedescription.length < 5} onClick={updateNow} type="button" className="btn btn-primary">Update Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Books/Notes</h2>
                <div className="container mx-3">
                    {books.length === 0 && "No Books To Display"}
                </div>
                {books.map((books) => {
                    return <BooksItem books={books} updateBook={updateBook} showAlert={props.showAlert} />;
                })}
            </div>
        </>
    )
}

export default Books
