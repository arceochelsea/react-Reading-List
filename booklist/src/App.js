import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Nav from './Components/Nav';
import BookList from './Components/BookList';
import NewBookForm from './Components/BookForm';

function App() {
  return (
    <div className='App'>
  <BookContextProvider>
    <Nav />
    <BookList />
    <NewBookForm />
  </BookContextProvider>
    </div>
  );
}

export default App;
