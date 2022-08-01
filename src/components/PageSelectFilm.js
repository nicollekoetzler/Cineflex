import axios from 'axios';
import {Link} from 'react-router-dom';
import React from 'react';

function EmCartaz({source, id}) {

    return(
        <Link to={`/sessoes/${id}`}>
            <div className="em-cartaz">
                <img src={source} />
            </div>
        </Link>
    )
}

export default function PageSelectFilm() {
    const [films, setFilms] = React.useState([]);

    
    React.useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
    
        promise.then(response => {
            setFilms([...response.data])
        })
    }, [] );

    return (
        <div className="select-film ">
                <div className="up">
                        <div className="header">
                            <h1>CineFlex</h1>
                        </div>
                    <div className="subheader">
                        <p>Selecione o filme:</p>
                    </div>
                </div>
                <div className="down">
                    <div className="container-filmes">
                        {films.map(value => <EmCartaz source={value.posterURL} id={value.id} />)}
                    </div>
                </div>
            </div>
    )
}