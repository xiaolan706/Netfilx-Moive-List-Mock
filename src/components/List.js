import react, {useState} from 'react';
// import Movie from './Movie';
import styled from "styled-components";

const List = ({className, section, data, buttonName, toggleButton}) => {
    const [showButton, setShowButton] = useState(false);

    return (
        <div>
            <h2 className="section">{section}</h2>
            <div className={className}>
                {data.map((movie) => {
                    return (
                        <div className='movieCardContainer' key={movie.id}
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <img className="imageContainer" src={movie.img} alt={movie.title}/>
                            <div className="titleContainer">
                                <p className="title">{movie.title}</p>
                                {showButton && <button className="button" onClick={() => toggleButton(movie)}>{buttonName}</button>}
                            </div>    
                        </div>



                        // <Movie key={movie.id} img={movie.img} title={movie.title}>
                        //     <button onClick={() => toggleButton(movie)}>{buttonName}</button>
                        // </Movie>    
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

    .movieCardContainer{
        display: flex;
        justify-self: center;
        flex-direction: column;
        min-width:300px;
    }
    
    .section {
        padding-left: 50px;
    }
    
    .titleContainer {
        text-align: center;
    }

    .title {
        padding: 0 20px;;
    }
`;
