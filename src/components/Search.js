import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

import Book from './Book';

function Search(props) {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query !== '') {
            BooksAPI.search(query).then((data) => {
                if (!('error' in data)) {
                    setBooks(data);
                } else {
                    setBooks([]);
                }
            })
        }
    }, [query]);

    return (
        <>
            <div className='searchBox'>
                <input type='text' name='search' placeholder='Enter a book title' onKeyUp={ (e) => { setQuery(e.target.value); }} />
                { books.length > 0 ? <Link to='/'><i className='fas fa-chevron-right'></i></Link> : <i className='fas fa-search'></i>}
                
            </div>

            <div className='searchResults'>
                { books.length === 0 && (
                    <p className='noResults'>
                        There's nothing to show
                        <span>Back to <Link to='/'>Home</Link></span>
                    </p>
                )}

                { books && books.map((book) => {
                    return (
                        <Book
                          key={ book.id }
                            bookKey={ book.id }
                            title={ book.title }
                            cover={ book.imageLinks ? book.imageLinks.smallThumbnail : 'https://dummyimage.com/150x200/CCC/333.png' }
                            shelf='none'
                            category={ book.categories }
                            changeCategoryFunction={ props.changeCategoryFunction }
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Search;
