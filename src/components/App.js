import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import PageSelectChair from "./PageSelectChair";
import PageSelectFilm from "./PageSelectFilm";
import PageSelectHour from "./PageSelectHour";
import PageSuccess from "./PageSuccess";
import { useState } from 'react';


export default function App(){
    const [choseChair, setChoseChair] = useState([]);
    const [sessao, setSessao] = useState({});
    const [buyerData, setBuyerData] = useState({});

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageSelectFilm />}/>
                <Route path="/sessoes/:idFilme" element={<PageSelectHour />}/>
                <Route path="/assentos/:idSessao" element={<PageSelectChair setBuyerData={setBuyerData} sessao={sessao} setSessao={setSessao} choseChair={choseChair} setChoseChair={setChoseChair} />}/>
                <Route path="/success" element={<PageSuccess buyerData={buyerData} sessao={sessao} choseChair={choseChair} />}/>
            </Routes>
        </BrowserRouter>
    )
}