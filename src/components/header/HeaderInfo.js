import React from 'react';
import './HeaderInfo.css'
import logo from "../../photos/sod.jpg";
import {Link} from "react-router-dom";
const HeaderInfo = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-primary p-0 nav-color">
                <div className="container ms-lg-2">
                    <button className="navbar-toggler white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <img src={logo} className="lager-image" width= "58"  alt="Картинка"/>
                        <ul className="navbar-nav">
                            <li className="nav-item btn btn-outline-secondary">
                                <Link className="nav-link  white" aria-current="page" to="/">Главная</Link>
                            </li>
                            <li className="nav-item btn btn-outline-secondary">
                                <Link className="nav-link  white" to="/volunteers">Наши волонтёры</Link>
                            </li>
                            <li className="nav-item btn btn-outline-secondary">
                                <Link className="nav-link  white" to="/actual">Актуальные проекты</Link>
                            </li>
                            <li className="nav-item btn btn-outline-secondary">
                                <Link className="nav-link  white" to="/archive">Архив проектов</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export {HeaderInfo};