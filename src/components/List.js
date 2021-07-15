import react, { useState } from 'react';
import styled from "styled-components";

const List = ({className, section, data, buttonName, toggleButton}) => {
    const [showButton, setShowButton] = useState();

    return (
        <div className={className} >
            <h2>{section}</h2>
            <div className="listContainer" >
                {data.map((movie) => {
                    return (
                        <div className='movieCardContainer' key={movie.id}
                            onMouseEnter={() => setShowButton(movie.id)}
                            onMouseLeave={() => setShowButton(-1)}
                        >
                            <img src={movie.img} alt={movie.title}/>
                            <div className="titleContainer">
                                <p className="title">{movie.title}</p>
                                {showButton == movie.id && <button className="button" onClick={() => toggleButton(movie)}>{buttonName}</button>}
                            </div>    
                        </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default styled(List)`   
    padding-left: 50px;

    .listContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;

    .movieCardContainer{
        display: flex;
        justify-self: center;
        flex-direction: column;
        min-width:300px;
    }
    
    .title {
        padding: 0 20px 0 100px;
    }

    .button {
        height:50px;
        width:80px;
    }
`;
