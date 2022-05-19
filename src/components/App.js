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
        
                <PageSelectFilm />
                <PageSelectHour />
                <PageSelectChair />
                <PageSuccess />
            
        </BrowserRouter>
    )
}