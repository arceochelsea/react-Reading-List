import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Nav from './Components/Nav';
import BookList from './Components/BookList';

function App() {
  return (
    <div className='App'>
  <BookContextProvider>
    <Nav />
    <BookList />
  </BookContextProvider>
    </div>
  );
}

export default App;
