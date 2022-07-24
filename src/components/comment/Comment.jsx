import React, { useRef, useState } from 'react';
import Score from './Score';
import Info from './Info';
import InteractionButtons from './InteractionButtons';
import CommentContent from './CommentContent';

export default function Comment({
    comment,
    currentUser,
    updateComment,
    handleDeleteComment,
}) {
    const [editing, setEditing] = useState(false);
    const textInputRef = useRef();

    const handleToggleEdit = () => {
        setEditing(!editing);
    };

    const handleUpdate = () => {
        if (!textInputRef.current.value) return;
        comment.content = textInputRef.current.value;
        comment.edited = true;
        handleToggleEdit();
        update();
    };

    const handleToggleReply = () => {
        comment.toReply = !comment.toReply;
        update();
    };

    const handleDelete = () => {
        handleDeleteComment(comment);
    };

    const handleUpvote = () => {
        comment.score += 1;
        update();
    };

    const handleDownvote = () => {
        comment.score -= 1;
        update();
    };

    const update = () => {
        updateComment(comment);
    };

    return (
        <div className='comment'>
            <Score
                score={comment.score}
                handleUpvote={handleUpvote}
                handleDownvote={handleDownvote}
            />
            <div className='comment__container'>
                <div className='comment__top'>
                    <Info
                        user={comment.user}
                        currentUser={currentUser}
                        createdAt={comment.createdAt}
                        edited={comment.edited}
                    />
                    <InteractionButtons
                        handleToggleReply={handleToggleReply}
                        handleToggleEdit={handleToggleEdit}
                        handleDelete={handleDelete}
                        user={comment.user}
                        currentUser={currentUser}
                    />
                </div>
                <CommentContent
                    comment={comment}
                    textInputRef={textInputRef}
                    handleUpdate={handleUpdate}
                    editing={editing}
                />
            </div>
        </div>
    );
}
