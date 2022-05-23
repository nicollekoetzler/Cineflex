import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Hour({ weekday, date, showtimes }) {
    return(
        <div className="container-data">
            <div className="data">
                <p>{`${ weekday } - ${ date }`}</p>
            </div>
            <div className="horas">
                {showtimes.map(showtime => {
                    return (    
                        <Link style={{textDecoration: "none", color: "black"}} to={`/assentos/${showtime.id}`}>
                            <div className="sub-hora">
                                <p>{showtime.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default function PageSelectHour(){

    const { idFilme } = useParams();
    const [films, setFilms] = useState({});
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promise.then(response => {
            setFilms({...response.data})
        })
    }, []);

    return (
        <div className="page-select-hour">
                <div className="up">
                <Link style={{textDecoration: "none", color: "black"}} to={"/"}>
                    <div className="header">
                        <h1>CineFlex</h1>
                    </div>
                </Link>
                    <div className="subheader">
                        <p>Selecione o horário:</p>
                    </div>
                </div>
                <div className="down2">
                    {films.days !== undefined ? films.days.map(value => <Hour weekday={value.weekday} date={value.date} showtimes={value.showtimes} />) : <></>}
                </div>
                <div className="bottom">
                    <div className="miniatura">
                        <div className="miniatura-poster">
                            <img src={films.posterURL} />
                        </div>
                    </div>
                    <p>{films.title}</p>
                </div>
            </div>
    )
}