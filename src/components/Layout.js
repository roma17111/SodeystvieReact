import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'

import {HeaderInfo} from "./header/HeaderInfo";

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
                <div className="container-fluid text-center text-footer-color">
                    <span className="text-center">©2004-{date} Все права защищены</span>
                </div>
                <div className="text-center">
                    <p><a className="text-center a-footer text-footer-color" href="mailto:sodeystvie@gmail.com">📧 sodeystvie@gmail.com</a></p>
                </div>
                <div className="text-center mb-2 text-footer-color">
                    <span>📞 +7(916)157-11-31</span>
                </div>
                <div className="created text-center text-footer-color">
                    <span>Created by Roman and Nika</span>
                </div>
            </footer>
        </div>
    );
};

export {Layout};