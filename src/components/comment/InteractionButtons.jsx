import React, { useState } from 'react';
import Delete from '../buttons/Delete';
import EditToggle from '../buttons/Edit';
import ReplyToggle from '../buttons/ReplyToggle';
import ConfirmDeleteModal from '../dialog/ConfirmDeleteModal';

export default function InteractionButtons({
    user,
    currentUser,
    handleToggleReply,
    handleToggleEdit,
    handleDelete,
}) {
    const [open, setOpen] = useState(false);

    const confirmDeletion = () => {
        setOpen(true);
    };

    if (user.username === currentUser.username) {
        return (
            <div className='comment-buttons'>
                <Delete onClick={confirmDeletion} />
                <EditToggle onClick={handleToggleEdit} />
                <ConfirmDeleteModal
                    open={open}
                    setOpen={setOpen}
                    handleDelete={handleDelete}
                />
            </div>
        );
    } else {
        return <ReplyToggle onClick={handleToggleReply} />;
    }
}
