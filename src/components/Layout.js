import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'

let date = new Date().getFullYear()

const Layout = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <Link to="/">Главная</Link>
                <Link to="/test">тест</Link>
            </header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer"> ©2004-{date} Все права защищены</footer>
        </div>
    );
};

export {Layout};