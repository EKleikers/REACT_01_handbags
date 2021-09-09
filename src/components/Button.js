import React from 'react';

function Button({title, disabled}){
    return(
        <button
            type="button"
            disabled={disabled}
            onClick={() =>
                console.log({title})
            }
        >
            {title}
        </button>
    )
}

export default Button;
