import React, { useRef } from 'react';
import ProfilePicture from './ProfilePicture';
import TextInput from '../input/TextInput';
import Button from '../buttons/Button';
import { v4 as uuidv4 } from 'uuid';

export default function CommentInput({
    currentUser,
    comment,
    updateComment,
    handleNewComment,
    threadStart,
    isReply,
}) {
    const textInputRef = useRef();
    const placeholder = isReply ? 'reply' : 'comment';
    const buttonText = isReply ? 'Reply' : 'Send';

    const handleSend = () => {
        const content = textInputRef.current.value.trim();

        if (!content) return;

        const newComment = {
            id: uuidv4(), // backend
            content,
            createdAt: 'Now',
            score: 0,
            replyingTo: comment ? comment.user.username : null,
            threadStart,
            user: currentUser,
            replies: [],
        };
        if (comment) {
            // New comment replying to a comment
            comment.toReply = false;
            updateComment(comment);
        } else {
            // New comment on the page
            textInputRef.current.value = '';
        }
        handleNewComment(newComment);
    };

    return (
        <div className='comment comment__input'>
            <ProfilePicture
                imgURL={currentUser.image.png}
                className='profile-picture--input'
            />
            <TextInput
                textInputRef={textInputRef}
                placeholder={'Add a ' + placeholder}
                handleSend={handleSend}
            />
            <Button onClick={handleSend} children={buttonText} />
        </div>
    );
}
