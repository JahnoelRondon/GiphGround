import {Image} from 'react-bootstrap';

export default function GiphImage({giph}) {
    
    return (
        <a href={giph.images.downsized.url} target="_blank">
            <Image 
                rounded={true} 
                width="300px" 
                height="200px" 
                src={giph.images.downsized.url} 
                alt="true"
                className="shadow"
            />
        </a>
    )
}
