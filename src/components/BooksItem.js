import React from 'react'
import { useContext } from 'react'
import bookContext from '../context/books/bookContext';

const BooksItem = (props) => {
    // Destructuring 
    const { books,updateBook } = props;
    const context = useContext(bookContext);
    const { deleteBook } = context;

    return (
        <div className='col-md-3'>
            {/* {books.title}
            {books.description}
            {books.tag} */}
            <div className="card my-3">
                <div className="card-body">
                    
                    <div className="d-flex bd-highlight mb-3">
                        <div className="me-auto "><h5 className="card-title">{books.title}</h5></div>
                        <div className="mx-2 "><i className="fas fa-trash" onClick={()=>{deleteBook(books._id); props.showAlert("Deleted Successfully!","success") }}></i></div>
                        <div className=" "><i className="far fa-edit" onClick={()=>{updateBook(books);  }}></i></div>
                    </div>
                    <p className="card-text">{books.description}</p>
                    <a href="/" className="btn btn-outline-primary">{books.tag}</a>
                </div>
            </div>
        </div>

    )
}

export default BooksItem
