import React from 'react'
import { useContext ,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import bookContext from '../context/books/bookContext';

const AddBook = (props) => {
    let navigate=useNavigate();
    const context = useContext(bookContext);
    const { addBook,getBooks } = context;
    const [book, setBook] = useState({title:"",description:"",tag :""})
    const addBookSubmit = (e) =>{
        e.preventDefault();
        addBook(book.title, book.description,book.tag );
        setBook({title:"",description:"",tag :""})
        props.showAlert("Book  Added Successfully " ,"success");
    }

    const onChange = (e)=>{
        setBook({...book,  [e.target.name] : e.target.value})
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getBooks();
            
        }
        else{
            navigate('/login')
        }
    }, [])
    return (
        <div className='container my-4'>
            <h2>Add A Note On Cloud</h2>
            <form className='my-4'>
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} value={book.title}  minLength={5} required />
                        <div id="emailHelp" className="form-text"> </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={book.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag </label>
                        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={book.tag} />
                    </div>
                   
                    <button disabled={book.title.length<5 || book.description.length<5} type="submit" className="btn btn-primary" onClick={addBookSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook
