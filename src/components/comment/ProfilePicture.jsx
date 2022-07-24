import React from 'react';

export default function ProfilePicture({ imgURL, className }) {
    return (
        <img
            className={'circle ' + className}
            src={`${process.env.PUBLIC_URL}${imgURL}`}
            alt='Profile'
        />
    );
}
