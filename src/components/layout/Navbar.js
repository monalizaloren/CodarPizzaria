import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Pizzerias from "../home/home";


function Navbar (){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Buscar</Link>
                </li>
            </ul>
        </nav>
    );

}

function Rota () {
    return (
        < BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={<Pizzerias/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota