import React, { Fragment, useEffect, useState } from 'react';

import Card from './Card/Card';

function List() {

    const [moviesList, setMoviesList] = useState([]);

    const [state, setState] = useState({
        searchTerm: '',
        error: '',
        loading: true
    });

    useEffect(() => {
        getInfo();
    }, []);

    const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=1513ca41&';
    const option = 's=hobbit';

    const getInfo = async () => {
        const res = await fetch(`${api}${option}`);
        const data = await res.json();
        setMoviesList(data.Search);
        setState({ loading: false });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!state.searchTerm) {
            return setState(
                { 
                    error: 'Please write a valid text.'
                }
            );
        }

        try {
            const res = await fetch(`${api}&s=${state.searchTerm}`);
            const data = await res.json();
            if (!data.Search) {
                return setState(
                    { 
                        error: 'There are no results.' 
                    }
                );
            }
            setMoviesList(data.Search);
            setState(
                { 
                    error: '',
                    searchTerm: ''
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>

            {
                state.loading ? <h2 className="text-light text-center p-4">Loading...</h2> : ''
            }

            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={ e => handleSubmit(e) }>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search a movie" 
                            onChange={
                                e => setState({ searchTerm: e.target.value })
                            }
                            autoFocus
                            value={ state.searchTerm }
                            />
                    </form>
                    <p className="text-white mt-2">
                        { state.error ? state.error : '' }
                    </p>
                </div>
            </div>
            
            <div className="row">
                {
                    moviesList.map((movie, index) => {
                        return <Card movie={ movie } key={ index } />
                    })
                }
            </div>
        </Fragment>
    );
}

export default List;