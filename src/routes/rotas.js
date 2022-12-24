import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "../pages/Home";
import Informacoes from "../pages/Informacoes";

const Rotas = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/informacoes" element={<Informacoes/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;