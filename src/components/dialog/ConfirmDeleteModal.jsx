import React, { useEffect, useRef } from 'react';

export default function ConfirmDeleteModal({ open, setOpen, handleDelete }) {
    const modal = useRef();

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            modal.current.showModal();
        } else {
            modal.current.close();
        }
    }, [open]);

    return (
        <dialog
            className='comment__modal--delete'
            ref={modal}
            onClose={handleClose}
        >
            <h3 className='modal--delete__title'>Delete comment</h3>
            <p className='modal--delete__text'>
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
            </p>
            <div className='delete-buttons-wrapper'>
                <button
                    className='button button--cancel-delete'
                    onClick={handleClose}
                >
                    NO, CANCEL
                </button>
                <button
                    className='button button--confirm-delete'
                    onClick={handleDelete}
                >
                    YES, DELETE
                </button>
            </div>
        </dialog>
    );
}
