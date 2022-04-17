import React from 'react';

function SecondaryButton({type, text, onClickHandler}) {
    return (
        <button
            type={type} onClick={onClickHandler ? onClickHandler : null}>
            <h4 className="paragraph">{text}</h4>
        </button>
    );
}

export default SecondaryButton;
