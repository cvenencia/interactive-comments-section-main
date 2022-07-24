import React from 'react';
import TextInput from '../input/TextInput';
import Button from '../buttons/Button';

export default function CommentContent({
    comment,
    textInputRef,
    handleUpdate,
    editing,
}) {
    let replyingTo;
    if (comment.replyingTo) {
        replyingTo = <span className='reply-tag'>@{comment.replyingTo} </span>;
    }

    const commentContent = editing ? (
        <div className='comment__edit'>
            <TextInput
                textInputRef={textInputRef}
                placeholder={'Update comment'}
                children={comment.content}
                handleSend={handleUpdate}
            />
            <Button onClick={handleUpdate} children={'Update'} />
        </div>
    ) : (
        <p className='comment__content'>
            {replyingTo}
            {comment.content}
        </p>
    );
    return commentContent;
}
