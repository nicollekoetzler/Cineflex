import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import PageSelectChair from "./PageSelectChair";
import PageSelectFilm from "./PageSelectFilm";
import PageSelectHour from "./PageSelectHour";
import PageSuccess from "./PageSuccess";


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageSelectFilm />}/>
                <Route path="/sessoes/:idFilme" element={<PageSelectHour />}/>
                <Route path="/assentos/:idSessao" element={<PageSelectChair />}/>
                <Route path="/success/:parametrosuccess" element={<PageSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}