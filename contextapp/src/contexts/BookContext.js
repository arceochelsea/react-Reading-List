import React, {createContext, useState} from 'react';

export const BookContext = createContext();

//when we want to output this.props.children we put them in the param below
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'blah blah', id: 1},
        {title: 'yerrr', id: 2},
        {title: 'herrrro', id: 3},
        {title: 'ayo', id: 4}
    ])

    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;