import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Chairs({seats}){

    return (
        <>
            {seats.map( (seat, index) => {
                return(
                    <div className="ball">
                        <p>{seat.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default function PageSelectChair() {
    const {idSessao} = useParams();
    const [sessao, setSessao] = useState({})

    useEffect ( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then( (response) => setSessao(response.data) );
    }, []);

    return (
        <div className="page-select-chair">
                <div className="up">
                    <div className="header">
                        <h1>CineFlex</h1>
                    </div>
                    <div className="subheader">
                        <p>Selecione o(s) assento(s):</p>
                    </div>
                </div>
                <div className="down3">
                    <div className="assentos">
                        <div className="container-balls">
                            {sessao.seats !== undefined ? <Chairs seats={sessao.seats}/> : <></>}
                        </div>
                    </div>
                </div>
                <div className="status">
                    <div className="container-selecionado">
                        <div className="selecionado"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="container-disponivel">
                        <div className="disponivel"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="container-indisponivel">
                        <div className="indisponivel"></div>
                        <p>Indisponivel</p>
                    </div>
                </div>
                <div className="dados">
                    <div className="nome">
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome..."></input>
                    </div>
                    <div className="cpf">
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu CPF..."></input>
                    </div>
                </div>
                <div className="container-button">
                    <button>Reservar assento(s)</button>
                </div>
                <div className="bottom">
                    <div className="miniatura">
                        <div className="miniatura-poster">
                            <img src={sessao.movie !== undefined ? sessao.movie.posterURL : ""} alt={sessao.movie !== undefined ? sessao.movie.title : ""}/>
                        </div>
                    </div>
                    <p>{sessao.movie !== undefined ? sessao.movie.title : ""}</p>
                    <p>{sessao.day !== undefined ? `${sessao.day.weekday} ${sessao.day.date}` : ""}</p>
                </div>
            </div>
    )
}