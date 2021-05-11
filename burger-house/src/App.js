import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import { css } from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
    const [loading, setLoading] = useState(false);
    const override = css ` 
    display : block;
    border-color : red;
    margin-top : 20%;
    `;
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
    return ( <
        div className = "App" > {
            loading ? < PropagateLoader color = { "#3d2514" }
            Loading = "loading"
            css = { override }
            size = { 40 }
            /> 
            :
                <>
                <NavBar/>
                <Header/>
                <Product/>
                <About/>
                <Contact/>
                </>
        } </div >
    );
}

export default App;