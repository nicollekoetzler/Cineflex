import axios from 'axios';
import React from 'react';

function EmCartaz({source}) {
    return(
        <div className="em-cartaz">
            <img src={source} />
        </div>
    )
}

export default function PageSelectFilm() {


    const [films, setFilms] = React.useState([]);

    
    React.useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
    
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
                        {films.map(value => <EmCartaz source={value.posterURL} />)}
                    </div>
                </div>
            </div>
    )
}