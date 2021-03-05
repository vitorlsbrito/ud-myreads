import React from 'react';

function BooksCategory(props) {
    return (
        <div className='booksCategory'>
          <h3>{ props.name }</h3>

          <ul>
            { props.books.map((book) => (
              <li key={ book.id }>
                <div className='bookBackground'>
                  <div className='bookPhoto'>
                    <img src={ book.imageLinks.smallThumbnail } alt={ book.title } />
                  </div>

                  <i className='fa fa-bars'>
                    <select name='teste' onChange={ (e) => { props.onChangeCategory(book.id, e) } }>
                        <option value='currentlyReading'>Reading</option>
                        <option value='wantToRead'>Want To Read</option>
                        <option value='read'>Read</option>
                    </select>
                  </i>
                </div>

                <p className='bookName'>{ book.title.length <= 30 ? book.title : book.title.substring(0, 27) + '...' }</p>
                <p className='bookCategory'>{ book.categories ? book.categories : 'Others' }</p>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default BooksCategory;
