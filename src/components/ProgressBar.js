import React from 'react';

function ProgressBar(props) {
    
    return (
        <div className='progressbar'>
            <div style={{ backgroundColor: props.color, width: props.width }}></div>
        </div>
    );
}

export default ProgressBar;
