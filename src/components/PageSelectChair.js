import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Chair( {seat, choseChair, setChoseChair} ) {
    const [selected, setSelected] = useState(false);

    
    function selectChair() {
        setSelected(!selected);
        if(selected){
            setChoseChair(choseChair.filter( (chair) => chair.id !== seat.id ))
        } else{
            setChoseChair([...choseChair, {id:seat.id, name:seat.name}]);
        }
    }

    return(
        <div onClick={ selectChair } className={`ball  ${seat.isAvailable ? (selected ? "selecionado" : "") : "indisponivel"}`}>
            <p>{seat.name}</p>
        </div>
    )
}

function Chairs( {seats, choseChair, setChoseChair} ){

    return (
        <>
            {seats.map( (seat, index) => {
                return(
                    <Chair seat={seat} choseChair={choseChair} setChoseChair={setChoseChair} />
                )
            })}
        </>
    )
}

export default function PageSelectChair({choseChair, setChoseChair, sessao, setSessao, setBuyerData}) {
    const {idSessao} = useParams();
    

    const [inputNome, setInputNome] = useState("");
    const [inputCpf, setInputCpf] = useState("");

    const navigate = useNavigate();

    function setData(event) {
        event.preventDefault()

        const body = {
            ids: choseChair.map( chair => chair.id ),
            name: inputNome,
            cpf: inputCpf
        };

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);

        promise.then(response => {
            setBuyerData(body);
            navigate("/success")
        });
    }

    useEffect ( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then( (response) => setSessao(response.data) );
    }, []);

    return (
        <div className="page-select-chair">
                <div className="up">
                    <Link style={{textDecoration: "none", color: "black"}} to={"/"}>
                        <div className="header">
                            <h1>CineFlex</h1>
                        </div>
                    </Link>
                    <div className="subheader">
                        <p>Selecione o(s) assento(s):</p>
                    </div>
                </div>
                <div className="down3">
                    <div className="assentos">
                        <div className="container-balls">
                            {sessao.seats !== undefined ? <Chairs choseChair={choseChair} setChoseChair={setChoseChair} seats={sessao.seats}/> : <></>} 
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
                <form onSubmit={setData}>
                    <div className="dados">
                        <div className="nome">
                            <label>Nome do comprador:</label>
                            <input required onChange={ (event) => setInputNome(event.target.value)} value={inputNome} type="text" placeholder="Digite seu nome..."/>
                        </div>
                        <div className="cpf">
                            <label>CPF do comprador:</label>
                            <input required onChange={ (event) => setInputCpf(event.target.value)} value={inputCpf} type="text" placeholder="Digite seu CPF..."/>
                        </div>
                    </div>
                    <div className="container-button">
                        <button type='submit' >Reservar assento(s)</button>
                    </div>
                </form>
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