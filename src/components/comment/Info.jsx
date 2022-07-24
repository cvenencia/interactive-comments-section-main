import React from 'react';
import ProfilePicture from './ProfilePicture';

export default function Info({ user, createdAt, currentUser, edited }) {
    let youTag = '';
    if (user.username === currentUser.username) {
        youTag = ' you-tag';
    }

    const Edited = () =>
        edited ? <div className='comment__edited'>(edited)</div> : null;

    return (
        <div className='comment__info'>
            <ProfilePicture
                imgURL={user.image.png}
                className='profile-picture--comment'
            ></ProfilePicture>
            <div className={'comment__username' + youTag}>{user.username}</div>
            <div className='comment__date'>{createdAt}</div>
            <Edited />
        </div>
    );
}
