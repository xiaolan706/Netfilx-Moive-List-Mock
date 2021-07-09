import react, {useState} from 'react';
import styled from "styled-components";

const Movie = ({className, img, title, children}) => {
    const [showButton, setShowButton] = useState(false);

    return (
        <div className={className}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <img src={img} alt={title}/>
            <div className="title">
                {showButton && <div className="button">{children}</div>}
                <p >{title}</p>    
            </div>
                            
        </div>
    )
}

export default styled(Movie)`
    padding: 5px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-self: center;
    flex-direction: column;
    min-width:300px;
    
    .title {
        text-align: center;
    }
`;