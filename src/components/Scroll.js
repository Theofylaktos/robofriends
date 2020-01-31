import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borderBottom: '3px solid black', borderTop: '3px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;