import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

import Home from './components/Home';

import * as BooksAPI from './BooksAPI';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

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

        <Route path='/search' render={() => (
          <h1>Search</h1>
        )} />
      </main>
    </>
  );
}

export default App;
