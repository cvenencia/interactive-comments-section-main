import React from 'react';

export default function Delete({ onClick }) {
    return (
        <button onClick={onClick} className='toggle-button delete-button'>
            Delete
        </button>
    );
}
