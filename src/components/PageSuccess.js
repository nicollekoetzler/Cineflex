import {Link} from 'react-router-dom';

export default function PageSuccess( {choseChair, sessao, buyerData} ) {


    return (
        <div className="page-success">
                <div className="up">
                    <Link style={{textDecoration: "none", color: "black"}} to={"/"}>
                        <div className="header">
                            <h1>CineFlex</h1>
                        </div>
                    </Link>
                    <div className="subheader4">
                        <p>Pedido feito com sucesso!</p>
                    </div>
                </div>
                <div className="down4">
                    <div className="container">
                        <h2>Filme e sessão</h2>
                        <h3>{sessao.movie.title}</h3>
                        <p>{sessao.day.date} {sessao.name}</p>
                    </div>
                    <div className="container">
                        <h2>Ingressos</h2>
                        {choseChair.map( seat => {
                            return (
                                <h3>Assento: {seat.name}</h3>
                            )
                        } )}
                    </div>
                    <div className="container">
                        <h2>Comprador</h2>
                        <h3>Nome: {buyerData.name}</h3>
                        <p>CPF: {buyerData.cpf}</p>
                    </div>
                    <Link style={{textDecoration: "none", color: "black"}} to={"/"}>
                        <div className="container-button4">
                            <button>Voltar pra Home</button>
                        </div>
                    </Link>
                </div>
            </div>
    )
}