import React from 'react';

import Book from './Book';

function Home(props) {
    return (
        <>
            <h1>Your books</h1>

            <div className='bookShelf'>
                <h3>Wanted</h3>

                <div className='books'>
                    { props.books.filter((book) => { return book.shelf === 'wantToRead' }).map((book) => {
                        return (
                            <Book
                                key={ book.id }
                                bookKey={ book.id }
                                title={ book.title }
                                cover={ book.imageLinks.smallThumbnail }
                                shelf='wantToRead'
                                category={ book.categories }
                                changeCategoryFunction={ props.changeCategoryFunction }
                            />
                        )
                    }) }
                </div>
            </div>

            <div className='bookShelf'>
                <h3>Reading</h3>

                <div className='books'>
                    { props.books.filter((book) => { return book.shelf === 'currentlyReading' }).map((book) => {
                        return (
                            <Book
                                key={ book.id }
                                bookKey={ book.id }
                                title={ book.title }
                                cover={ book.imageLinks.smallThumbnail }
                                shelf='currentlyReading'
                                category={ book.categories }
                                changeCategoryFunction={ props.changeCategoryFunction }
                            />
                        )
                    }) }
                </div>
            </div>

            <div className='bookShelf'>
                <h3>Read</h3>

                <div className='books'>
                    { props.books.filter((book) => { return book.shelf === 'read' }).map((book) => {
                        return (
                            <Book
                                key={ book.id }
                                bookKey={ book.id }
                                title={ book.title }
                                cover={ book.imageLinks.smallThumbnail }
                                shelf='read'
                                category={ book.categories }
                                changeCategoryFunction={ props.changeCategoryFunction }
                            />
                        )
                    }) }
                </div>
            </div>
        </>
    );
}

export default Home;
