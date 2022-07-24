import React from 'react';

export default function EditToggle({ onClick }) {
    return (
        <button onClick={onClick} className='toggle-button toggle-button--edit'>
            Edit
        </button>
    );
}
