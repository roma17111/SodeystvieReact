import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'

import {HeaderInfo} from "./header/HeaderInfo";
import Footer from "./Footer";

let date = new Date().getFullYear()

const Layout = () => {
    return (
        <div className="wrapper">
            <header>
                <HeaderInfo/>
            </header>
            <main className="main container p-5">
                <Outlet/>
            </main>
            <footer className="footer p-2">
               <Footer/>
            </footer>
        </div>
    );
};

export {Layout};