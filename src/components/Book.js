import React from 'react';

function Book(props) {
    return (
        <div className='book'>
            <div className='book-background'>
                <img src={ props.cover } alt={ props.title } />

                <div className='fas fa-ellipsis-v'>
                    <select value={ props.shelf } onChange={ (e) => { props.changeCategoryFunction(props.bookKey, e.target.value) } }>
                        <option value='none'>None</option>
                        <option value='wantToRead'>Want To Read</option>
                        <option value='currentlyReading'>Reading</option>
                        <option value='read'>Read</option>
                    </select>
                </div>
            </div>

            <p>{ props.title.length > 37 ? props.title.substring(0, 34) + '...' : props.title }</p>
            <span>{ props.category ? props.category : 'OTHERS' }</span>
        </div>
    );
}

export default Book;
