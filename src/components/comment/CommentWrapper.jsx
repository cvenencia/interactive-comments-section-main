import React, { Fragment } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

export default function CommentWrapper({
    comment,
    currentUser,
    updateComment,
    handleNewComment,
    handleDeleteComment,
    threadStart,
}) {
    const input = comment.toReply ? (
        <CommentInput
            currentUser={currentUser}
            comment={comment}
            updateComment={updateComment}
            handleNewComment={handleNewComment}
            threadStart={threadStart ?? comment.id}
            isReply={true}
        />
    ) : null;

    return (
        <Fragment>
            <Comment
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
                updateComment={updateComment}
                handleDeleteComment={handleDeleteComment}
            />
            {input}
        </Fragment>
    );
}
