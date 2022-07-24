import React from 'react';
import CommentWrapper from './CommentWrapper';

export default function RepliesWrapper({
    comments,
    currentUser,
    updateComment,
    handleNewComment,
    handleDeleteComment,
    threadStart,
}) {
    return (
        <div className='replies-container'>
            {comments.map(c => {
                return (
                    <CommentWrapper
                        key={c.id}
                        comment={c}
                        currentUser={currentUser}
                        updateComment={updateComment}
                        toReply={true}
                        handleNewComment={handleNewComment}
                        handleDeleteComment={handleDeleteComment}
                        threadStart={threadStart}
                    />
                );
            })}
        </div>
    );
}
