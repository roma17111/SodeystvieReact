import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'
import logo from "../photos/sod.jpg";

let date = new Date().getFullYear()

const Layout = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <img src={logo} className="main-image" alt="Картинка"/>
            </header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer"> ©2004-{date} Все права защищены</footer>
        </div>
    );
};

export {Layout};