import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

import Home from './components/Home';
import Search from './components/Search';

import * as BooksAPI from './BooksAPI';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const addABook = (id, shelf) => {
    let currentBooks = books.map((book) => { return book });

    const bookAlreadyAdded = books.filter((book) => { return book.id === id });

    if (bookAlreadyAdded.length === 0) {
      BooksAPI.get(id).then((data) => {
        data.shelf = shelf;
        currentBooks.push(data);
  
        setBooks(currentBooks);
      });
    }
  }

  const changeCategory = (id, shelf) => {
    BooksAPI.update(id, shelf).then((data) => {
      const updatedBooks = books.map((book) => {
        var temp = Object.assign({}, book);
  
        if (temp.id === id) {
          temp.shelf = shelf;
        }
  
        return temp;
      });
  
      setBooks(updatedBooks);
      console.log(updatedBooks);
    });
  }

  return (
    <>
      <aside>
        <Profile name='Taylor Johanson' level='Beginner' />

        <Dashboard books={ books } />
      </aside>

      <main>
        <Route exact path='/'>
          <Home books={ books } changeCategoryFunction={ changeCategory } />
        </Route>

        <Route path='/search'>
          <Search changeCategoryFunction={ addABook } />
        </Route>
      </main>
    </>
  );
}

export default App;
