import React from 'react';
import minus from '../../assets/icon-minus.svg';
import plus from '../../assets/icon-plus.svg';

export default function Score({ score, handleUpvote, handleDownvote }) {
    return (
        <div className='comment__score'>
            <button onClick={handleUpvote} className='score-button'>
                <img src={plus} alt='Upvote button' />
            </button>
            <div className='score-text'>{score}</div>
            <button onClick={handleDownvote} className='score-button'>
                <img src={minus} alt='Downvote button' />
            </button>
        </div>
    );
}
