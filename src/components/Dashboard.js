import React from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from './ProgressBar';

function Dashboard(props) {
    const books = props.books.length;
    const read = props.books.filter((book) => { return book.shelf === 'read' }).length;
    const wanted = props.books.filter((book) => { return book.shelf === 'wantToRead' }).length;
    const reading = props.books.filter((book) => { return book.shelf === 'currentlyReading' }).length;


    return (
        <div className='dashboard'>
        <div className='dashboard-header'>
          <h3>Dashboard</h3>
          <Link to='/search'>
            <span className='fas fa-search'></span>
          </Link>
        </div>

        <div className='dashboard-infos'>
          <div className='dashboard-indicator'>
            <p>{ books }</p>
            <span>books</span>
          </div>

          <ProgressBar color='#41B724' width='100%' />
        </div>

        <div className='dashboard-infos'>
          <div className='dashboard-indicator'>
            <p>{ wanted }</p>
            <span>wanted</span>
          </div>

          <ProgressBar color='#22BCC6' width={ `${ (wanted / books) * 100 }%` } />
        </div>

        <div className='dashboard-infos'>
          <div className='dashboard-indicator'>
            <p>{ reading }</p>
            <span>reading</span>
          </div>

          <ProgressBar color='#D8C624' width={ `${ (reading/books) * 100 }%` } />
        </div>

        <div className='dashboard-infos'>
          <div className='dashboard-indicator'>
            <p>{ read }</p>
            <span>read</span>
          </div>

          <ProgressBar color='#C919A2' width={ `${ (read/books) * 100 }%`} />
        </div>
      </div>
    );
}

export default Dashboard;
