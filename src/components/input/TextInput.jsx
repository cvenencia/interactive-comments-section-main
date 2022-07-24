import React from 'react';

export default function TextInput({
    textInputRef,
    children,
    placeholder,
    handleSend,
}) {
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <textarea
            rows='4'
            ref={textInputRef}
            type='text'
            className='comment__text-input'
            defaultValue={children}
            placeholder={placeholder}
            onKeyDownCapture={handleKeyPress}
        ></textarea>
    );
}
