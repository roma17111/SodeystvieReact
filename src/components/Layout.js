import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'

import {HeaderInfo} from "./header/HeaderInfo";

let date = new Date().getFullYear()

const Layout = () => {
    return (
        <div className="wrapper" >
            <header>
                <HeaderInfo/>
            </header>
            <main className="main container p-5">
                <Outlet/>
            </main>
            <footer className="footer">
                <div className="container">
                    ©2004-{date} Все права защищены
                </div>
            </footer>
        </div>
    );
};

export {Layout};