import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

function Card({ movie }) {
    return (
        <Fragment>

            <div className="col-sm-6 col-md-6 col-lg-4 col-sl-3 mb-4">
                <Link to={`/movie/${ movie.imdbID }`} className="card">
    
                    <div className="card-header p-0">
    
                        <img src={ movie.Poster } alt={ movie.Title } className="card-img-top" />
    
                    </div>
                    
                    <div className="card-body">
    
                        <h4>{ movie.Title } { movie.Year }</h4>
    
                        <p>{ movie.Type }</p>
    
                    </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default Card;