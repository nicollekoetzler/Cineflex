import {useParams} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PageSelectHour(){

    const { idFilme } = useParams();
    const [films, setFilms] = React.useState({});
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promise.then(response => {
            setFilms({...response.data})
        })
    }, [])

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
                    <div className="container-data">
                        <div className="data">
                            <p>Quinta-feira - 24/06/2021</p>
                        </div>
                        <div className="horas">
                            <div className="sub-hora">
                                <p>15:00</p>
                            </div>
                            <div className="sub-hora">
                                <p>19:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-data">
                        <div className="data">
                            <p>Quinta-feira - 24/06/2021</p>
                        </div>
                        <div className="horas">
                            <div className="sub-hora">
                                <p>15:00</p>
                            </div>
                            <div className="sub-hora">
                                <p>19:00</p>
                            </div>
                        </div>
                    </div>
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