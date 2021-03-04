import { useState, useEffect } from 'react';
import BooksCategory from './components/BooksCategory';

import * as BooksAPI from './BooksAPI';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const changeCategory = (id, e) => {
    BooksAPI.update(id, e.target.value).then((data) => {
      const updatedBooks = books.map((book) => {
        var temp = Object.assign({}, book);
  
        if (temp.id === id) {
          temp.shelf = e.target.value;
        }
  
        return temp;
      });
  
      setBooks(updatedBooks);

      console.log(books);
    });
  }

  return (
    <div className='wrapper'>
      <aside>
        Aside
      </aside>

      <main>
        <h1>Explore</h1>

        <BooksCategory
          name='Readings'
          books={ books.filter((book) => { return book.shelf === 'currentlyReading' }) }
          onChangeCategory={ changeCategory }
        />

        <BooksCategory
          name='Wanted'
          books={ books.filter((book) => { return book.shelf === 'wantToRead' }) }
          onChangeCategory={ changeCategory }
        />

        <BooksCategory
          name='Read'
          books={ books.filter((book) => { return book.shelf === 'read' }) }
          onChangeCategory={ changeCategory }
        />

        <div>
          { books.map((book) => {
            return (
              <p key={ book.id}>
                { book.id } <br />
                { book.title } <br />
                { book.shelf } <br /><br />
              </p>
            )
          }) }
        </div>
      </main>
    </div>
  );
}

export default App;
