import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

export default function Booklist() {
    const {books} = useContext(BookContext)

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (
                        <BookDetails book={book} key={book.id} />
                 )})}
            </ul>
        </div>
    ) : (
        <div className = "empty">No books to read at the moment. Enjoy your free time :)</div>
    )
}