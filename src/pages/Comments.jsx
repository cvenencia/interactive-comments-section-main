import React, { Fragment, useEffect, useState } from 'react';
import CommentInput from '../components/comment/CommentInput';
import CommentWrapper from '../components/comment/CommentWrapper';
import RepliesWrapper from '../components/comment/RepliesWrapper';
import d from '../data.json';

export default function Comments() {
    let storageComments = JSON.parse(localStorage.getItem('comments'));
    if (storageComments) {
        localStorage.setItem('comments', JSON.stringify(d.comments));
    } else {
        storageComments = d.comments;
    }

    let storageUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storageUser) {
        localStorage.setItem('currentUser', JSON.stringify(d.currentUser));
    } else {
        storageUser = d.currentUser;
        localStorage.setItem('currentUser', JSON.stringify(d.currentUser));
    }

    const [currentUser] = useState(storageUser);
    const [comments, setComments] = useState(storageComments);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const updateComment = comment =>
        setComments(comments.map(c => (c.id === comment.id ? comment : c)));

    const handleDeleteComment = comment => {
        setComments(comments.filter(c => c.id !== comment.id));
    };

    const handleNewComment = data => {
        if (data.threadStart) {
            setComments(
                comments.map(c =>
                    c.id === data.threadStart
                        ? { ...c, replies: c.replies.push(data.id) }
                        : c
                )
            );
        }
        setComments([...comments, data]);
    };

    return (
        <div className='comments'>
            {comments.map(comment => {
                if (!comment.replyingTo) {
                    const { id } = comment;
                    if (comment.replies.length) {
                        return (
                            <Fragment key={id}>
                                <CommentWrapper
                                    key={id}
                                    comment={comment}
                                    currentUser={currentUser}
                                    updateComment={updateComment}
                                    handleNewComment={handleNewComment}
                                    handleDeleteComment={handleDeleteComment}
                                />
                                <RepliesWrapper
                                    comments={comments.filter(c =>
                                        comment.replies.includes(c.id)
                                    )}
                                    threadStart={comment.id}
                                    currentUser={currentUser}
                                    updateComment={updateComment}
                                    handleNewComment={handleNewComment}
                                    handleDeleteComment={handleDeleteComment}
                                />
                            </Fragment>
                        );
                    } else {
                        return (
                            <CommentWrapper
                                key={id}
                                comment={comment}
                                currentUser={currentUser}
                                updateComment={updateComment}
                                handleNewComment={handleNewComment}
                                handleDeleteComment={handleDeleteComment}
                            />
                        );
                    }
                } else {
                    return null;
                }
            })}
            <CommentInput
                currentUser={currentUser}
                updateComment={updateComment}
                handleNewComment={handleNewComment}
            />
        </div>
    );
}
