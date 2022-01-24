import React from 'react';

export default function GiphImage({giph}) {
    
    return (
        <a href={giph.images.downsized.url} ><img width="200px" src={giph.images.downsized.url} alt="true"/></a>
    )
}
