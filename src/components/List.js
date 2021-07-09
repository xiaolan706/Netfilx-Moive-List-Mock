import react from 'react';
import Movie from './Movie';
import styled from "styled-components";

const List = ({className, section, data, buttonName, toggleButton}) => {
    return (
        <div>
            <h2 className="section">{section}</h2>
            <div className={className}>
                {data.map((movie) => {
                    return (
                        <Movie key={movie.id} img={movie.img} title={movie.title}>
                            <button onClick={() => toggleButton(movie)}>{buttonName}</button>
                        </Movie>    
                    )
                })}
            </div>
        </div>
    )
}

export default styled(List)`   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    .section {
        padding-left: 50px;
    }
`;
