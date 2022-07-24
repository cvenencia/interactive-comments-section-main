import React from 'react';

export default function ReplyToggle({ onClick }) {
    return (
        <button
            onClick={onClick}
            className='toggle-button toggle-button--reply'
        >
            Reply
        </button>
    );
}
