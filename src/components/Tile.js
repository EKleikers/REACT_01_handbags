import React from 'react';

function Tile({title, children, image, alt}){

    return(
        <section>
            <img src={image} alt={alt}/>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Tile;

