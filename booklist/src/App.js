import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='App'>
  <BookContextProvider>
    <Nav />
  </BookContextProvider>
    </div>
  );
}

export default App;
