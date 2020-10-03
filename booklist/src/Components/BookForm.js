import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author);
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Book Title" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} required></input>
                <input type="text" placeholder="Author" value={author} onChange={(e) => {
                    setAuthor(e.target.value)
                }} required></input>
                <input type="submit" value="Add Book"></input>
            </form>
        </div>
    );
}

export default NewBookForm;