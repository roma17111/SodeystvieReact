import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <Link to="/" >Главная </Link>
                <Link to="/test"  >тест</Link>
            </header>
            <Outlet/>
            <footer>

            </footer>
        </div>
    );
};

export {Layout};