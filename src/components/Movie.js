import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useParams } from 'react-router-dom';

const MovieStyled = styled.div`
    .intro{
        color: #111;
        font-size: 20px;
    }
    .texto{
        color: #ccc;
        font-style: italic;
        font-weight: normal;
        font-size: 17px;
    }
`;

function Movie() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie();
    }, []);

    const option = `i=${id}&plot=full`;
    const api = `http://www.omdbapi.com/?${option}&apikey=1513ca41`;

    const getMovie = async () => {
        const res = await fetch(`${api}`);
        const data = await res.json();
        setMovie(data);
    }

    return (
        <MovieStyled>
            <div className="row border p-0 m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="p-2">
                        <img src={ movie.Poster } alt="" width="500px" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-12 col-md-8 p-0 text-white">
                    <div className="p-2">
                        <h5>
                            <span className="intro">Title: </span><span className="texto">{ movie.Title }</span>
                        </h5>
                        <h5>
                            <span className="intro">Type: </span><span className="texto">{ movie.Type }</span>
                        </h5>
                        <h5>
                            <span className="intro">Year: </span><span className="texto">{ movie.Year }</span>
                        </h5>
                        <h5>
                            <span className="intro">Country: </span><span className="texto">{ movie.Country }</span>
                        </h5>
                        <h5>
                            <span className="intro">Director: </span><span className="texto">{ movie.Director }</span>
                        </h5>
                        <h5>
                            <span className="intro">Genre: </span><span className="texto">{ movie.Genre }</span>
                        </h5>
                        <h5>
                            <span className="intro">Language: </span><span className="texto">{ movie.Language }</span>
                        </h5>
                        <h5>
                            <span className="intro">Sinopsis: </span><span className="texto">{ movie.Plot }</span>
                        </h5>
                        <h5>
                            <span className="intro">Actors: </span><span className="texto">{ movie.Actors }</span>
                        </h5>
                    </div>
                </div>
            </div>
        </MovieStyled>
    );
}

export default Movie;