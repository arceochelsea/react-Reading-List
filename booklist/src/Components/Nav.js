import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext'

const Nav = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className='nav'>
            <h1>To Read List</h1>
            <p>Currently you have { books.length } to read...</p>
        </div>
    );
} 
export default Nav;
