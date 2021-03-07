import React from 'react';

function Profile(props) {
    return (
        <div className='profile'>
            <img src='https://thispersondoesnotexist.com/image' alt={ props.name } />

            <div>
                <p>{ props.name }</p>
                <span>{ props.level }</span>
            </div>
        </div>
    )
}

export default Profile;
